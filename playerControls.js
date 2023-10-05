import { player } from "./main";

let playerMove = {
	left: false,
	rigth: false,
	up: false,
	down: false
}

export function moveDown(e){
	let gameKey = e.key;

	if (gameKey === "w"){
		playerMove.up = true;
	}
}

export function moveUp(e){
	let gameKey = e.key;

	if (gameKey === "w"){
		playerMove.up = false;
	}
}

export function addPlayerMove(){
    if(playerMove.up){
        player.position.z -= 0.1
    }
}