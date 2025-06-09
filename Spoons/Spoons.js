"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gl_matrix_1 = require("gl-matrix");
//Works like a key
class SpoonPart {
    constructor(cornerCount, holeCount, slitCount) {
        this.cornerCount = cornerCount;
        this.holeCount = holeCount;
        this.slitCount = slitCount;
    }
}
//These store additional information
//Such as textures
class SpoonHeadInformation {
}
class SpoonHandleInformation {
}
//Maintains the list of valid spoon heads
const SpoonHeadRegistry = (() => {
    const definedHeads = new Map();
    function key(part) {
        return JSON.stringify(part);
    }
    function define(head, info) {
        definedHeads.set(key(head), info);
    }
    function assertValid(head) {
        if (!definedHeads.has(key(head))) {
            throw new Error("This is an invalid head");
        }
    }
    function getInfo(head) {
        assertValid(head);
        const result = definedHeads.get(key(head));
        if (result !== undefined) {
            return result;
        }
        throw new Error("Error should be impossible: liusvasf");
    }
    return {
        define,
        assertValid,
        getInfo,
    };
})();
//Maintains the list of valid spoon heads
const SpoonHandleRegistry = (() => {
    const definedHandles = new Map();
    function key(part) {
        return JSON.stringify(part);
    }
    function define(handle, info) {
        definedHandles.set(key(handle), info);
    }
    function assertValid(handle) {
        if (!definedHandles.has(key(handle))) {
            throw new Error("This is an invalid handle");
        }
    }
    function getInfo(handle) {
        assertValid(handle);
        const result = definedHandles.get(key(handle));
        if (result !== undefined) {
            return result;
        }
        throw new Error("Error should be impossible: alfvnlklj");
    }
    return {
        define,
        assertValid,
        getInfo,
    };
})();
//This is an instance of a spoon.
//It contains all the information that is used by the game as far as spoons are concernednpm install gl-matrix
class Spoon {
    constructor(head, handle) {
        //Together these form the position of the spoon
        this.position = gl_matrix_1.vec2.fromValues(0, 0);
        this._layer = -1; //This is technically part of the position
        this.angle = 0; //The direction the spoon faces (default is to the right)
        try {
            SpoonHeadRegistry.assertValid(head);
        }
        catch (e) {
            throw new Error("Attempted to create a Spoon with an invalid head");
        }
        this.head = head;
        try {
            SpoonHandleRegistry.assertValid(handle);
        }
        catch (e) {
            throw new Error("Attempted to create a Spoon with an invalid head");
        }
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
let head1 = new SpoonPart(0, 0, 0);
let head2 = new SpoonPart(0, 1, 0);
SpoonHeadRegistry.define(head1, new SpoonHeadInformation());
SpoonHeadRegistry.define(head2, new SpoonHeadInformation());
let handle1 = new SpoonPart(0, 0, 0);
SpoonHandleRegistry.define(handle1, new SpoonHandleInformation());
let hi = new Spoon(head1, handle1);
