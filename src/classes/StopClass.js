import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'

class Stop {
    constructor() {
        this.bind()
        this.modelLoader = new GLTFLoader()
        this.texLoader = new THREE.TextureLoader()
    }

    init(scene) {
        this.scene = scene

        const gTex = this.texLoader.load('./assets/textures/greyMetal.png')
        const bTex = this.texLoader.load('./assets/textures/blackMetal.png')
        const vTex = this.texLoader.load('./assets/textures/violetMetal.png')


        this.gMatCap = new THREE.MeshMatcapMaterial({
            matcap: gTex
        })
        this.bMatCap = new THREE.MeshMatcapMaterial({
            matcap: bTex
        })
        this.vMatCap = new THREE.MeshMatcapMaterial({
            matcap: vTex
        })


        this.modelLoader.load('./assets/models/Stop.glb', (glb) => {
            console.log(glb)
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

const _instance = new Stop()
export default _instance