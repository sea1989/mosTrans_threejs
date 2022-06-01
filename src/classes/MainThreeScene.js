import * as THREE from "three"

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import RAF from '../utils/RAF'

import SpherePillards from './SpherePillardsClass'
import Cube from './Cube'
import ErrorPageA from './ErrorPageA'

//import ParticleSystem from './ParticleSystem'
import CamParallax from './CamParallax'
//import { isGloballyWhitelisted } from '@vue/shared'


class MainThreeScene {

    camera
    scene
    renderer
    controls

    constructor() {
        this.bind()
    }

    init(container, metalicValue, roughnessValue, colorValue) {
        //RENDERER SETUP
        this.container = container
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        this.renderer.setSize(800, 420)
        this.renderer.debug.checkShaderErrors = true
        container.appendChild(this.renderer.domElement)

        //MAIN SCENE INSTANCE
        // const color = new THREE.Color(0x5C33FF)
        this.scene = new THREE.Scene()
        //this.scene.background = color

        //CAMERA AND ORBIT CONTROLLER
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        this.camera.position.set(0, 0, 1.3)
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)
         this.controls.enabled = false
        this.controls.maxDistance = 40
        this.controls.minDistance = 3
        this.controls.minPolarAngle = 0;
        this.controls.maxPolarAngle = Math.PI / 2.6 + 0.3;
        CamParallax.init(this.camera)
        ErrorPageA.init(this.scene, metalicValue, roughnessValue, colorValue)
        //  SpherePillards.init(this.scene)
        // Floor.init(this.scene)
        //  Spectrum.init(this.scene)
        // ParticleSystem.init(this.scene)


        //LIGHTS

        const color = 0xFFFFFF;
        const intensity = 0.5;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set( -150, -150, 150);
        this.scene.add(light);

        const color2 = 0xFFFFFF;
        const intensity2 = 3;
        const light2 = new THREE.DirectionalLight(color2, intensity2);
        light2.position.set(-450, 50, -250);
        this.scene.add(light2);

        const color3 = 0xFFFFFF;
        const intensity3 = 1.5;
        const light3 = new THREE.DirectionalLight(color3, intensity3);
        light3.position.set(150, 150, 150);
        this.scene.add(light3)

        //RENDER LOOP AND WINDOW SIZE UPDATER SETUP
        window.addEventListener("resize", this.resizeCanvas)
        RAF.subscribe('threeSceneUpdate', this.update)
    }

    update() {
        this.renderer.render(this.scene, this.camera);
       // this.scene.rotateY(0.0015)
        //  SpherePillards.update()
       // ErrorPageA.update()
        // Spectrum.update()
        // ParticleSystem.update()
        CamParallax.update()
    }

    clear() {
        this.container.removeChild(this.renderer.domElement)

    }

    resizeCanvas() {
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.camera.aspect = window.innerWidth / window.innerHeight
        this.camera.updateProjectionMatrix()
    }

    bind() {
        this.resizeCanvas = this.resizeCanvas.bind(this)
        this.update = this.update.bind(this)
        this.init = this.init.bind(this)
    }
}

const _instance = new MainThreeScene()
export default _instance