import { OrbitControls } from "https://threejs.org/examples/jsm/controls/OrbitControls.js";
import { Curves } from "../js/CurveExtras.js"
import {GLTFLoader} from './GLTFLoader.js'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 1000 );
let   clock = new THREE.Clock();

const normal = new THREE.Vector3();
const position = new THREE.Vector3();
const lookAt = new THREE.Vector3();

const hlight = new THREE.AmbientLight (0x404040, 100); 
scene.add(hlight); 

const directionalLight = new THREE.DirectionalLight(0xffffff, 100);
directionalLight.position.set(0,1,0); 
directionalLight.castShadow = true; 
scene.add(directionalLight); 

const light = new THREE.PointLight(0xc4c4c4,1); 
light.position.set(0,300,500); 
scene.add(light); 

const light8 = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
scene.add( light8 );

const light2 = new THREE.PointLight(0xc4c4c4,1); 
light2.position.set(500,100, -500); 
scene.add(light2); 

const light3 = new THREE.PointLight(0xc4c4c4, 1);
light3.position.set(0, 100, -500);
scene.add(light3); 

const light4 = new THREE.PointLight(0xc4c4c4, 1);
light4.position.set(-500, 300, 500);
scene.add(light4); 


let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0xFFFCFF);
document.getElementById("canvas").appendChild(renderer.domElement);

const loader = new GLTFLoader(); 

loader.load('./models/zaal.gltf', function(gltf) {
                const car = gltf.scene.children[0]; 
                car.scale.set(.5,.5,.5)
                scene.add(gltf.scene); 
 
            }, undefined, function(error) {
                console.error(error); 
            })

const test = new GLTFLoader(); 

test.load('./models/spline.gltf', (gltf) => {
               console.log(gltf)
                scene.add(gltf.scene);
                let geo = gltf.scene.children[0];
                 console.log(geo.geometry)
     
 
            }, undefined, function(error) {
                console.error(error); 
 })

 console.log(test)



window.addEventListener('resize', function () {
     let width = window.innerWidth;
     let height = window.innerHeight;
     renderer.setSize(width,height);
     camera.aspect = width / height;
     camera.updateProjectionMatrix();
});

window.addEventListener('mousewheel', function(e){
     console.log(e.wheelDelta)
})




let controls = new  OrbitControls(camera,renderer.domElement);


const curve = new Curves.GrannyKnot();
console.log(curve); 
const geometry = new THREE.TubeBufferGeometry( curve, 100, 2, 8, true );
const material = new  THREE.MeshBasicMaterial({
     color:0x000000,
     wireframe: true,
     side:THREE.DoubleSide,
})

const  tube = new THREE.Mesh(geometry,material);
scene.add(tube);




const updateCamera = () => {
   const time = clock.getElapsedTime();
   const  looptime = 20;
   const t = (time % looptime)/ looptime;
   const  t2 = ((time +0.1)% looptime) / looptime;
  const  pos = tube.geometry.parameters.path.getPointAt(t);
  const  pos2 =   tube.geometry.parameters.path.getPointAt(t2);
  camera.position.copy(pos);
  camera.lookAt(pos2);


}

const animate = () => {
     requestAnimationFrame( animate );
     updateCamera();

     renderer.render( scene, camera );
};

animate();
