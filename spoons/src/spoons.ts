
import { vec2 } from 'gl-matrix';
import * as THREE from 'three';
import earcut from 'earcut';
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';

//TODO: implement this cache
//When a mesh is requested it only generates it new if it needs to
var headGeometryCache = new Map<string, THREE.BufferGeometry>();
var handleGeometryCache = new Map<string, THREE.BufferGeometry>();

//These configure the spoon shapes
const R0 = 0.25;
const R1 = 1.75;
const R2 = 1.25;

const Q11 = 2.6;
const W12 = 0.425;
const W2 = 1.5;

const Q2 = 0.15;
const Q12 = 0.55;
const Q3 = 1.5;

const SPOON_THICKNESS = 0.1;


function cutHole(outer: number[], holes: number[][]): number[][]{
  let holeIndices : number[] = [];

  let newOuter = outer;
  for(let i = 0; i < holes.length; i++){
    holeIndices.push(newOuter.length / 3);
    newOuter = newOuter.concat(holes[i]);
  }

  return [newOuter, earcut(newOuter, holeIndices, 3), holeIndices];
}

export class SpoonHead {
    
    readonly cornerCount : 0 | 1 | 2; //Number of hard corners
    readonly holeCount : 0 | 1 | 2 | 3; //Number of topological holes


    constructor(cornerCount : 0 | 1 | 2, holeCount : 0 | 1 | 2 | 3){
        this.cornerCount = cornerCount;
        this.holeCount = holeCount;
    }


    
    //These vertices are shared among all heads
    //It is a list of lists so that the disconnected vertex lists can be concatenated later
    private headBaseVertices(): number[][]{
        //There are two parts of this output, the top and bottom half.
        //These halves are connected by the head end

        let output : number[][] = [[], []];

        let temp = Math.exp(1 - R1);

        const vertexCount1 = 5;
        const vertexCount2 = 5;


        for(let i = 0; i < vertexCount1; i++){
            let t = i / vertexCount1;
            output[0].push(t);//x
            output[0].push(-(Math.exp(t - R1) + R0));//y
            output[0].push(0);//z
        }


        for(let i = 0; i < vertexCount2; i++){
            let t = i / vertexCount2 * Math.PI / 2;
            
            output[0].push(t + 1);//x
            output[0].push(-( temp * Math.sin(t) + temp + R0 ));//y
            output[0].push(0);//z
        }



        for(let i = vertexCount2 - 1; i >= 0; i--){
            let t = i / vertexCount2 * Math.PI / 2;

            output[1].push(t + 1);//x
            output[1].push(( temp * Math.sin(t) + temp + R0 ));//y
            output[1].push(0);//z
        }

        for(let i = vertexCount1 - 1; i >= 0; i--){
            let t = i / vertexCount1;
            output[1].push(t);//x
            output[1].push((Math.exp(t - R1) + R0));//y
            output[1].push(0);//z
        }

        return output;
    }

    //These vertices change based on the 
    //It is only one vertex list because there are not disconnected sections
    private headEndVertices(): number[]{
        

        let temp = 2 * Math.exp(1 - R1) + R0;
        

        let output : number[] = [];

        const vertexCount = 5;

        for(let i = vertexCount; i > 0; i--){
            let t = i / vertexCount * Math.PI * 0.5;

            output.push(temp * R2 * Math.cos(t) + Math.PI * 0.5 + 1);
            if(this.cornerCount > 1){
                output.push(temp * -Math.pow(Math.sin(t), 0.2));
            }else{
                output.push(temp * -Math.pow(Math.sin(t), 0.9));
            }
            output.push(0);

        }

        for(let i = 0; i <= vertexCount; i++){
            let t = i / vertexCount * Math.PI * 0.5;

            output.push(temp * R2 * Math.cos(t) + Math.PI * 0.5 + 1);
            
            if(this.cornerCount > 0){
                output.push(temp * Math.pow(Math.sin(t), 0.2));
            }else{
                output.push(temp * Math.pow(Math.sin(t), 0.9));
            }
            
            output.push(0);

        }

        
        return output;
    }

    private headOutsideVertices(): number[]{
        let base = this.headBaseVertices();
        let end = this.headEndVertices();

        let output: number[] = [];

        output = output.concat(base[0]);
        output = output.concat(end);
        output = output.concat(base[1]);
        
        return output;
    }

    //These are the vertices that define the holes
    //It is a list of list because there can be multiple holes
    private headHoleVertices(): number[][]{
        //TODO
        if(this.holeCount == 0){
            return [];
        }else if(this.holeCount == 1){
            let output : number[][] = [];
            output.push([]);

            const vertexCount = 10;

            for(let i = 0; i < vertexCount; i++){
                let t = i / vertexCount * Math.PI * 2;

                output[0].push(0.6 * Math.cos(t) + Q11);
                output[0].push(0.6 * Math.sin(t));
                output[0].push(0);
            }

            return output;
        }else{
            let heights : number[] = [];
            if(this.holeCount == 2){
                heights = [W12, -W12];
            }else{
                heights = [Q12, 0, -Q12];
            }

            let width = Q3;
            if(this.holeCount == 2){
                width = W2;
            }

            let output: number[][] = [];

            for(let i = 0; i < heights.length; i++){
                output.push([]);

                //generate the slot

                const vertexCount1 = 4;
                for(let j = 0; j <= vertexCount1; j++){
                    let t = j / vertexCount1 * Math.PI * 0.5;

                    output[output.length - 1].push(Q2 * Math.cos(t) + 0.5 * width + Q11);//x
                    output[output.length - 1].push(Q2 * Math.sin(t) + heights[i]);//y
                    output[output.length - 1].push(0);//z
                }

                for(let j = 0; j < vertexCount1; j++){
                    let t = j / vertexCount1 * Math.PI * 0.5;

                    output[output.length - 1].push(Q2 * Math.sin(-t) - 0.5 * width + Q11);//x
                    output[output.length - 1].push(Q2 * Math.cos(-t) + heights[i]);//y
                    output[output.length - 1].push(0);//z
                }

                for(let j = vertexCount1; j >= 0; j--){
                    let t = j / vertexCount1 * Math.PI * 0.5;

                    output[output.length - 1].push(Q2 * Math.sin(-t) - 0.5 * width + Q11);//x
                    output[output.length - 1].push(Q2 * -Math.cos(-t) + heights[i]);//y
                    output[output.length - 1].push(0);//z
                }
                
                for(let j = vertexCount1; j >= 1; j--){
                    let t = j / vertexCount1 * Math.PI * 0.5;

                    output[output.length - 1].push(Q2 * Math.cos(t) + 0.5 * width + Q11);//x
                    output[output.length - 1].push(Q2 * -Math.sin(t) + heights[i]);//y
                    output[output.length - 1].push(0);//z
                }
            }

            return output;
        }
    }

    //To generate the head, the head base and head end need to get generated and have their vertices combined correctly into one list
    //Then the holes must be generated
    //Then the head should be generated without holes
    //Then the holes should be cut out based on intersection with the edges of the otherwise holeless head.


    createGeometry(): THREE.BufferGeometry{
        let tempString = JSON.stringify(this);
        if(headGeometryCache.has(tempString)){
            return headGeometryCache.get(tempString)
        }

        let head = this.headOutsideVertices();
        let holes = this.headHoleVertices();

        let mesh: number[][] = cutHole(head, holes);


        //Extrude the mesh
        //[0] = the vertices
        //[1] = the indices
        //[2] = the triangle indices of hole starts



        //Create the indices for the duplicated points
        let offset = mesh[0].length / 3;
        mesh[1] = mesh[1].concat(mesh[1].map(value=>{
            return value + offset;
        }).reverse()).reverse();//This double reverse is because I'm doing something cursed I think

        //duplicate the points
        mesh[0] = mesh[0].concat(mesh[0]);
        //Offset the points on the z axis
        mesh[0] = mesh[0].map((value, index)=>{
            if(index % 3 == 2){
                if(index < mesh[0].length / 2){
                    return value - SPOON_THICKNESS;
                }else{
                    return value + SPOON_THICKNESS;
                }
            }else{
                return value;
            }
        })

        //Connect the two layers

        let previous = 0;
        mesh[2].push(offset);

        for(let j = 0; j < mesh[2].length; j++){
            let value = mesh[2][j];
            for(let i = previous; i < value; i++){
                if(i == value - 1){
                    if(j != 0){
                        mesh[1].push(previous);
                        mesh[1].push(i);
                        mesh[1].push(i + offset);

                        mesh[1].push(previous + offset);
                        mesh[1].push(previous);
                        mesh[1].push(i + offset);
                    }
                }else{
                    if(j == 0){
                        mesh[1].push(i);
                        mesh[1].push(i + 1);
                        mesh[1].push(i + offset);

                        mesh[1].push(i + 1);
                        mesh[1].push(i + 1 + offset);
                        mesh[1].push(i + offset);
                    }else{
                        mesh[1].push(i + 1);
                        mesh[1].push(i);
                        mesh[1].push(i + offset);

                        mesh[1].push(i + 1 + offset);
                        mesh[1].push(i + 1);
                        mesh[1].push(i + offset);
                    }
                }
                
            }
            previous = value;
        }


        let vertices = new Float32Array(mesh[0])

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute(
            'position',
            new THREE.BufferAttribute(vertices, 3)
        );
        geometry.setIndex(mesh[1]);

        geometry.computeVertexNormals(); // optional, for lighting

        headGeometryCache.set(tempString, geometry);
        
        return geometry;
    }
}

const HANDLE_CONST = Math.exp(-R1) + R0;

export class SpoonHandle {
    readonly cornerCount : 0 | 1 | 2; //Number of hard corners
    readonly holeCount : 0 | 1; //Number of topological holes

    constructor(cornerCount : 0 | 1 | 2, holeCount : 0 | 1) {
        this.cornerCount = cornerCount;
        this.holeCount = holeCount;
    }

    private handleOutsideVertices(): number[] {
        let output: number[] = [];

        output.push(0);
        output.push(HANDLE_CONST);
        output.push(0);

        const vertexCount = 10;
        for(let i = 0; i < vertexCount; i++){
            let t = i / vertexCount * Math.PI * 0.5 + Math.PI * 0.5;

            output.push((HANDLE_CONST) * Math.cos(t) - 8);
            if(this.cornerCount >= 1){
                output.push((HANDLE_CONST) * Math.pow(Math.sin(t), 0.2));
            }else{
                output.push((HANDLE_CONST) * Math.sin(t));
            }
            output.push(0);
        }

        for(let i = 0; i <= vertexCount; i++){
            let t = i / vertexCount * Math.PI * 0.5 + Math.PI;

            output.push((HANDLE_CONST) * Math.cos(t) - 8);
            if(this.cornerCount == 2){
                output.push((HANDLE_CONST) * -Math.pow(Math.abs(Math.sin(t)), 0.2));
            }else{
                output.push((HANDLE_CONST) * Math.sin(t));
            }
            
            output.push(0);
        }


        output.push(0);
        output.push(-HANDLE_CONST);
        output.push(0);

        return output;
    }

    private handleHoleVertices(): number[][]{
        if(this.holeCount == 0){
            return [];
        }else{
            let output: number[][] = [[]];
            
            const vertexCount = 10;

        

            for(let i = 0; i < vertexCount; i++){
                let t = i / vertexCount * Math.PI * 2;

                output[0].push(0.3 * (HANDLE_CONST + 0.08) * Math.cos(t) - 8);
                output[0].push(0.3 * (HANDLE_CONST + 0.08) * Math.sin(t));
                output[0].push(0);
            }

            return output;
        }
    }

    createGeometry(): THREE.BufferGeometry{
        let tempString = JSON.stringify(this);
        if(handleGeometryCache.has(tempString)){
            return handleGeometryCache.get(tempString)
        }


        let head = this.handleOutsideVertices();
        let holes = this.handleHoleVertices();

        let mesh: number[][] = cutHole(head, holes);


        //Extrude the mesh
        //[0] = the vertices
        //[1] = the indices
        //[2] = the triangle indices of hole starts



        //Create the indices for the duplicated points
        let offset = mesh[0].length / 3;
        mesh[1] = mesh[1].concat(mesh[1].map(value=>{
            return value + offset;
        }).reverse()).reverse();//This double reverse is because I'm doing something cursed I think

        //duplicate the points
        mesh[0] = mesh[0].concat(mesh[0]);
        //Offset the points on the z axis
        mesh[0] = mesh[0].map((value, index)=>{
            if(index % 3 == 2){
                if(index < mesh[0].length / 2){
                    return value - SPOON_THICKNESS;
                }else{
                    return value + SPOON_THICKNESS;
                }
            }else{
                return value;
            }
        })

        //Connect the two layers

        let previous = 0;
        mesh[2].push(offset);

        for(let j = 0; j < mesh[2].length; j++){
            let value = mesh[2][j];
            for(let i = previous; i < value; i++){
                if(i == value - 1){
                    if(j != 0){
                        mesh[1].push(previous);
                        mesh[1].push(i);
                        mesh[1].push(i + offset);

                        mesh[1].push(previous + offset);
                        mesh[1].push(previous);
                        mesh[1].push(i + offset);
                    }
                }else{
                    if(j == 0){
                        mesh[1].push(i);
                        mesh[1].push(i + 1);
                        mesh[1].push(i + offset);

                        mesh[1].push(i + 1);
                        mesh[1].push(i + 1 + offset);
                        mesh[1].push(i + offset);
                    }else{
                        mesh[1].push(i + 1);
                        mesh[1].push(i);
                        mesh[1].push(i + offset);

                        mesh[1].push(i + 1 + offset);
                        mesh[1].push(i + 1);
                        mesh[1].push(i + offset);
                    }
                }
            }
            previous = value;
        }


        let vertices = new Float32Array(mesh[0])

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute(
            'position',
            new THREE.BufferAttribute(vertices, 3)
        );
        geometry.setIndex(mesh[1]);

        geometry.computeVertexNormals(); // optional, for lighting

        handleGeometryCache.set(tempString, geometry);
        
        return geometry;
    }
}


//This is an instance of a spoon.
//It contains all the information that is used by the game as far as spoons are concerned
export class Spoon {
    readonly head : SpoonHead;
    readonly handle : SpoonHandle;

    //Together these form the position of the spoon
    position : vec2 = vec2.fromValues(0, 0);
    private _layer : number = -1;//This is technically part of the position

    angle : number = 0;//The direction the spoon faces (default is to the right)


    constructor(head: SpoonHead, handle: SpoonHandle){
        this.head = head;
        this.handle = handle;
    }

    get model(): THREE.BufferGeometry {
        let headGeometry = this.head.createGeometry();
        let handleGeometry = this.handle.createGeometry();
        return BufferGeometryUtils.mergeGeometries([headGeometry, handleGeometry], false);
    }

    //getters and setters
    get direction() : vec2 {
        return vec2.fromValues(Math.cos(this.angle), Math.sin(this.angle));
    }

    set direction(dir : vec2) {
        this.angle = Math.atan2(dir[1], dir[0]);
    }


    set layer(value : number){
        if(!Number.isInteger(value)){
            throw new Error("Cannot set layer to a non-integer")
        }

        if(value < 0){
            throw new Error("The layer must be non-negative");
        }

        this._layer = value;
    }

    get layer() : number{
        return this._layer;
    }

    //Needs to return a model that is generated dynamically at runtime, so that it can be rendered
}


