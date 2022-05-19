import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'

class ErrorPageA {
    constructor() {
        this.bind()
        this.modelLoader = new GLTFLoader()
        this.texLoader = new THREE.TextureLoader()
    }

    init(scene) {
        this.scene = scene

        //   const vTex = this.texLoader.load('./assets/textures/violetMetal.png')
        this.vMatCap = new THREE.MeshPhysicalMaterial({
            color: 0x6532F6,
            flatShading: true,
            roughness: 0.5,
            metalness: 0.3,
            //bumpMap: this.texLoader.load('./assets/textures/bw3.jpg'),
            //bumpScale: 0.001,


        });

        this.modelLoader.load('./assets/models/ErrorPageA.glb', (glb) => {
            glb.scene.traverse(child => {
                child.material = this.vMatCap
            })


            this.scene.add(glb.scene)
        })
    }

    update() {

    }

    bind() {

    }
}

const _instance = new ErrorPageA()
export default _instance