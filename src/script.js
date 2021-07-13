import "./style.css";
import * as THREE from "three";
import gsap from "gsap";

// console.log(THREE.PerspectiveCamera);

//Scene
const scene = new THREE.Scene();

//Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//sizes
const sizes = {
	width: 800,
	height: 600,
};

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
// camera.position.x = 2;
scene.add(camera);

//Renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
	// canvas: canvas
	canvas,
});

renderer.setSize(sizes.width, sizes.height);

// //Time
// let time = Date.now();

// //Clock
// const clock = new THREE.Clock();

gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });
gsap.to(mesh.position, { duration: 1, delay: 2, x: 0 });

//Animation
const tick = () => {
	// //time ms
	// const currentTime = Date.now();
	// const deltaTime = currentTime - time;
	// time = currentTime;

	//clock sec
	// const elapsedTime = clock.getElapsedTime();

	//Update objects
	// mesh.rotation.y += 0.002 * deltaTime;
	// mesh.rotation.y += 1 * elapsedTime; wrong ab add nhi karega bar bar

	// mesh.rotation.y = elapsedTime * Math.PI * 2; //360
	// mesh.position.y = Math.sin(elapsedTime); //sin ka graph
	// mesh.position.x = Math.cos(elapsedTime);
	// camera.position.y = Math.sin(elapsedTime); //sin ka graph
	// camera.position.x = Math.cos(elapsedTime);
	// camera.lookAt(mesh.position); // camera circle meh ghumke obj ko dekh rha h

	//Renderer
	renderer.render(scene, camera);

	window.requestAnimationFrame(tick);
};

tick();
