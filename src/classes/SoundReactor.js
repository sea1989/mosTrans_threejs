import RAF from '../utils/RAF'

class SoundReactor {
    ctx
    audio
    audioSource
    analyser
    fdata
    constructor(audioUrl) {

        this.url = audioUrl
        this.playFlag = false

        this.bind()
    }

    init() {
        this.ctx = new AudioContext();
        this.audio = new Audio(this.url);
        this.audioSource = this.ctx.createMediaElementSource(this.audio);
        this.analyser = this.ctx.createAnalyser();
        this.analyser.smoothingTimeConstant = 0.8

        this.audioSource.connect(this.analyser);
        this.audioSource.connect(this.ctx.destination);
        this.fdata = new Uint8Array(this.analyser.frequencyBinCount);
        this.audio.currentTime = 41

    }

    play() {
        this.audio.play()
        this.playFlag = true
        RAF.subscribe('audioReactorUpdate', this.update)
    }

    pause() {
        this.audio.pause()
        this.playFlag = false
        RAF.unsubscribe('audioReactorUpdate')

    }

    update() {
        this.analyser.getByteFrequencyData(this.fdata);
    }

    bind() {
        this.update = this.update.bind(this)
        this.init = this.init.bind(this)
    }

}

const _instance = new SoundReactor("assets/nice-day.mp3")
export default _instance;