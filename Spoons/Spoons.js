"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spoon = exports.SpoonHandle = exports.SpoonHead = void 0;
const gl_matrix_1 = require("gl-matrix");
const THREE = __importStar(require("three"));
//TODO: implement this cache
//When a mesh is requested it only generates it new if it needs to
var meshCache = new Map();
class SpoonHead {
    constructor(cornerCount, holeCount, slitCount) {
        this.cornerCount = cornerCount;
        this.holeCount = holeCount;
        this.slitCount = slitCount;
    }
    //These vertices are shared among all heads
    //It is a list of lists so that the disconnected vertex lists can be concatenated later
    headBaseVertices() {
        //There are two parts of this output, the top and bottom half.
        //These halves are connected by the head end
        let output = [[], []];
        //TODO
        const R0 = 0.25;
        const R1 = 1.75;
        const R2 = 1.25;
        const vertexCount1 = 5;
        const vertexCount2 = 5;
        for (let i = 0; i < vertexCount1; i++) {
            let t = i / vertexCount1;
            output[0].push(t); //x
            output[0].push(-(Math.exp(t - R1) + R0)); //y
            output[0].push(0); //z
        }
        for (let i = 0; i < vertexCount2; i++) {
            let t = i / vertexCount2 * Math.PI / 2;
            let temp = Math.exp(1 - R1);
            output[0].push(t + 1); //x
            output[0].push(-(temp * Math.sin(t) + temp + R1)); //y
            output[0].push(0); //z
        }
        for (let i = vertexCount2 - 1; i >= 0; i--) {
            let t = i / vertexCount2 * Math.PI / 2;
            let temp = Math.exp(1 - R1);
            output[1].push(t + 1); //x
            output[1].push((temp * Math.sin(t) + temp + R1)); //y
            output[1].push(0); //z
        }
        for (let i = vertexCount1 - 1; i >= 0; i--) {
            let t = i / vertexCount1;
            output[1].push(t); //x
            output[1].push((Math.exp(t - R1) + R0)); //y
            output[1].push(0); //z
        }
        return output;
    }
    //These vertices change based on the 
    //It is only one vertex list because there are not disconnected sections
    headEndVertices() {
        //TODO
        return [];
    }
    //These are the vertices that define the holes
    //It is a list of list because there can be multiple holes
    headHoleVertices() {
        //TODO
        return [];
    }
    //To generate the head, the head base and head end need to get generated and have their vertices combined correctly into one list
    //Then the holes must be generated
    //Then the head should be generated without holes
    //Then the holes should be cut out based on intersection with the edges of the otherwise holeless head.
    createGeometry() {
        const geometry = new THREE.BufferGeometry();
        //0, 1 is the top of the connection between the head and the handle
        //0, -1 is the bottom of the connection between the head and the handle
        //1 hole has a circular hole
        //2 and 3 holes have slit holes
        //Slits are always slits
        const vertices = new Float32Array([
            -1.0, -1.0, 1.0, // v0
            1.0, -1.0, 1.0, // v1
            1.0, 1.0, 1.0, // v2
            -1.0, 1.0, 1.0, // v3
        ]);
        const indices = [
            0, 1, 2,
            2, 3, 0,
        ];
        geometry.setIndex(indices);
        geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
        return new THREE.BufferGeometry();
    }
}
exports.SpoonHead = SpoonHead;
class SpoonHandle {
    constructor(cornerCount, holeCount) {
        this.cornerCount = cornerCount;
        this.holeCount = holeCount;
    }
}
exports.SpoonHandle = SpoonHandle;
//This is an instance of a spoon.
//It contains all the information that is used by the game as far as spoons are concerned
class Spoon {
    constructor(head, handle) {
        //Together these form the position of the spoon
        this.position = gl_matrix_1.vec2.fromValues(0, 0);
        this._layer = -1; //This is technically part of the position
        this.angle = 0; //The direction the spoon faces (default is to the right)
        this.head = head;
        this.handle = handle;
    }
    //getters and setters
    get direction() {
        return gl_matrix_1.vec2.fromValues(Math.cos(this.angle), Math.sin(this.angle));
    }
    set direction(dir) {
        this.angle = Math.atan2(dir[1], dir[0]);
    }
    set layer(value) {
        if (!Number.isInteger(value)) {
            throw new Error("Cannot set layer to a non-integer");
        }
        if (value < 0) {
            throw new Error("The layer must be non-negative");
        }
        this._layer = value;
    }
    get layer() {
        return this._layer;
    }
}
exports.Spoon = Spoon;
let hi = new SpoonHead(0, 0, 0);
console.log(hi.headBaseVertices());
