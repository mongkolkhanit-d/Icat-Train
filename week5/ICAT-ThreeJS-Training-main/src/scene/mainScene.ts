import * as THREE from 'three';
import { Cube } from '../object/cube';

export class MainScene{
    scene: THREE.Scene;
    renderer: THREE.WebGLRenderer;
    camera: THREE.PerspectiveCamera;
    container: HTMLElement;

    cube: THREE.Mesh | null = null;

    cubeClass: Cube | null = null;

    constructor(container: HTMLElement){
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer();
        this.container = container;
        this.camera = new THREE.PerspectiveCamera(75, this.container.clientWidth/ this.container.clientHeight,0.1,1000);
        
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.container.appendChild(this.renderer.domElement);

        this.onStart();

        this.container.addEventListener('click', this.onClick);

        this.renderer.setAnimationLoop(this.render);
    }

    onClick = (event: any) => {
        const rectBox = this.container.getBoundingClientRect();
        const mousePositionNormalize = {
            x: (event.x / rectBox.width)*2-1,
            y: -(event.y / rectBox.height)*2+1
        }

        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(new THREE.Vector2(mousePositionNormalize.x, mousePositionNormalize.y),this.camera);

        const intersects = raycaster.intersectObjects(this.scene.children);

        if(intersects.length>0){
            intersects[0].object.position.x = Math.random()*10;
        }
    }

    onStart = ()=>{
        const geometry = new THREE.BoxGeometry(1,1,1);
        const matirial = new THREE.MeshBasicMaterial({color: 0x00ff00});

        this.cube = new THREE.Mesh(geometry, matirial);

        this.scene.add(this.cube);
        this.camera.position.z = 5;
        this.camera.position.y = 2;
        this.camera.position.x = 2;

        const v0 = new THREE.Vector3(0,0,0,);

        this.cube.position.copy(v0);
        this.cubeClass = new Cube(this.scene);

    }

    render = () => {
        this.cube?.rotateY(Math.PI / 360);

        this.cubeClass?.render();

        this.renderer.render(this.scene, this.camera);
    }
}