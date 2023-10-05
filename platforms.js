import * as THREE from 'three';
import { scene } from './main';

function createPlatforms (width,height,depth,posx,posy,posz){

    const platformGeo = new THREE.BoxGeometry (width,height,depth)
    const platformMat = new THREE.MeshNormalMaterial();
    const platform = new THREE.Mesh( platformGeo,platformMat);
  
    scene.add(platform)
  
    platform.position.x = posx;
    platform.position.y = posy;
    platform.position.z = posz
  
}

export function addPlatforms(){
    createPlatforms(8,2,5,0,-15,0) //first platform
    createPlatforms(8,4,5,0,-14,-5) //second platform
    createPlatforms(8,6,5,0,-13,-10) //third platform
    createPlatforms(8,8,5,0,-12,-15) //fourd platform
    createPlatforms(8,10,5,0,-11,-20) //fifth platform
    createPlatforms(8,12,5,0,-10,-25) //six platform
    createPlatforms(8,14,5,0,-9,-30) //seven platform
    createPlatforms(8,1,60,0,-15,-60) //eigth platform
    createPlatforms(100,60,1,0,15,-90) //nine platform
}
