
import { vec2 } from 'gl-matrix';
import * as THREE from 'three';

//TODO: implement this cache
//When a mesh is requested it only generates it new if it needs to
var meshCache = new Map<string, THREE.BufferGeometry>();


export class SpoonHead {
    
    readonly cornerCount : 0 | 1 | 2; //Number of hard corners
    readonly holeCount : 0 | 1 | 2 | 3; //Number of topological holes
    readonly slitCount : 0 | 1 | 2 | 3; //Number of slits that are not topological holes

    constructor(cornerCount : 0 | 1 | 2, holeCount : 0 | 1 | 2 | 3, slitCount : 0 | 1 | 2 | 3){
        this.cornerCount = cornerCount;
        this.holeCount = holeCount;
        this.slitCount = slitCount;
    }


    
    //These vertices are shared among all heads
    //It is a list of lists so that the disconnected vertex lists can be concatenated later
    headBaseVertices(): number[][]{
        //There are two parts of this output, the top and bottom half.
        //These halves are connected by the head end

        let output : number[][] = [[], []];
            
        //TODO
        const R0 = 0.25;
        const R1 = 1.75;
        const R2 = 1.25;

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
            let temp = Math.exp(1 - R1);

            output[0].push(t + 1);//x
            output[0].push(-( temp * Math.sin(t) + temp + R1 ));//y
            output[0].push(0);//z
        }



        for(let i = vertexCount2 - 1; i >= 0; i--){
            let t = i / vertexCount2 * Math.PI / 2;
            let temp = Math.exp(1 - R1);

            output[1].push(t + 1);//x
            output[1].push(( temp * Math.sin(t) + temp + R1 ));//y
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
    headEndVertices(): number[]{
        //TODO
        return [];
    }

    //These are the vertices that define the holes
    //It is a list of list because there can be multiple holes
    headHoleVertices(): number[][]{
        //TODO
        
        return [];
    }

    //To generate the head, the head base and head end need to get generated and have their vertices combined correctly into one list
    //Then the holes must be generated
    //Then the head should be generated without holes
    //Then the holes should be cut out based on intersection with the edges of the otherwise holeless head.



    createGeometry(): THREE.BufferGeometry{
        const geometry = new THREE.BufferGeometry();

        //0, 1 is the top of the connection between the head and the handle
        //0, -1 is the bottom of the connection between the head and the handle

        //1 hole has a circular hole
        //2 and 3 holes have slit holes

        //Slits are always slits

        

        const vertices = new Float32Array( [
            -1.0, -1.0,  1.0, // v0
            1.0, -1.0,  1.0, // v1
            1.0,  1.0,  1.0, // v2
            -1.0,  1.0,  1.0, // v3
        ] );

        const indices = [
            0, 1, 2,
            2, 3, 0,
        ];

        geometry.setIndex( indices );
        geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );

        return new THREE.BufferGeometry();
    }
}

export class SpoonHandle {
    readonly cornerCount : 0 | 1 | 2; //Number of hard corners
    readonly holeCount : 0 | 1; //Number of topological holes

    constructor(cornerCount : 0 | 1 | 2, holeCount : 0 | 1) {
        this.cornerCount = cornerCount;
        this.holeCount = holeCount;
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


