import './style.css'
import * as THREE from 'three';
import { createPlatforms } from './platforms';

export const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//player

const playerGeometry = new THREE.SphereGeometry (1, 22, 9);
const playerMaterial = new THREE.MeshNormalMaterial();
const player = new THREE.Mesh( playerGeometry,playerMaterial);

scene.add(player)

//platforms

createPlatforms(8,2,5,0,-15,0) //first platform
createPlatforms(8,4,5,0,-14,-5) //second platform
createPlatforms(8,6,5,0,-13,-10) //third platform
createPlatforms(8,8,5,0,-12,-15) //fourd platform
createPlatforms(8,10,5,0,-11,-20) //fifth platform
createPlatforms(8,12,5,0,-10,-25) //six platform
createPlatforms(8,14,5,0,-9,-30) //seven platform
createPlatforms(8,1,60,0,-15,-60) //eigth platform
createPlatforms(100,60,1,0,15,-90) //nine platform

camera.position.z = 25;

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );

}
animate();