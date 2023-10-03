import * as THREE from 'three';
import { scene } from './main';

export function createPlatforms (width,height,depth,posx,posy,posz){

    const platformGeo = new THREE.BoxGeometry (width,height,depth)
    const platformMat = new THREE.MeshNormalMaterial();
    const platform = new THREE.Mesh( platformGeo,platformMat);
  
    scene.add(platform)
  
    platform.position.x = posx;
    platform.position.y = posy;
    platform.position.z = posz
  
}