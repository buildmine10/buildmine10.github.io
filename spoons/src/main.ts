import './style.css'

import { SpoonHandle, SpoonHead, Spoon } from './spoons.ts'

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


const scene = new THREE.Scene();

const viewPortSize = [400, 400]

const camera = new THREE.PerspectiveCamera(
  75, viewPortSize[0] / viewPortSize[1], 0.1, 1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(viewPortSize[0], viewPortSize[1]);
{
  let temp = document.getElementById("app");
  if(temp == null){
    throw new Error("No DOM element with the id app exists. This is supposed to exist.");
  }
  temp.appendChild(renderer.domElement);
}




function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();



let hi = new SpoonHead(1, 3);
let bye = new SpoonHandle(2, 1);
let spoon = new Spoon(hi, bye);


const spoonMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

const spoonMesh = new THREE.Mesh(spoon.model, spoonMaterial);

scene.add(spoonMesh);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(-2, 0, 0); // point to spin around
controls.update();