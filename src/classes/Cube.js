import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'
let modelLoader = new GLTFLoader()

class Cube {
    constructor() {
        this.bind()


    }

    init(scene) {
        this.scene = scene

        //   const vTex = this.texLoader.load('./assets/textures/violetMetal.png')
        this.vMatCap = new THREE.MeshPhysicalMaterial({
            color: 0x292929,    // красный (здесь также можно использовать строку цвета CSS)
            flatShading: true,
            roughness: 0.8,

        });

        modelLoader.load('../assets/models/cube.glb', (glb) => {
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

const _instance = new Cube()
export default _instance