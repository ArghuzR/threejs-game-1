import './style.css'
import * as THREE from 'three';
import { addPlatforms } from './platforms';
import { moveDown,moveUp,addPlayerMove} from './playerControls';

export const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//player

const playerGeometry = new THREE.SphereGeometry (1, 22, 9);
const playerMaterial = new THREE.MeshNormalMaterial();
export const player = new THREE.Mesh( playerGeometry,playerMaterial);

scene.add(player)

const playerRay = new THREE.Raycaster();
const playerRayDir = new THREE.Vector3(0,-1,0);

//player move

document.addEventListener('keydown', moveDown)
document.addEventListener('keyup', moveUp)

//platforms

addPlatforms();

camera.position.z = 25;
camera.position.x = 9

function animate() {
	requestAnimationFrame( animate );

	playerRay.ray.origin.copy(player.position);

	playerRay.ray.direction.copy(playerRayDir)

	let intersects = playerRay.intersectObjects(scene.children)

	if (intersects.length > 0){
	 	console.log(`se ha encontrado el objeto ${intersects[0].object} a una distancia de ${intersects[0].distance}`)
		
	 	console.log(intersects[0].object)
	}

	addPlayerMove()

	//console.log(playerMove)

	renderer.render( scene, camera );

}
animate();