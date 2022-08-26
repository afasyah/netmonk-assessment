import * as THREE from 'three';

import Sizes from './utils/Sizes';
import Time from './utils/Time';
import Camera from './utils/Camera';
import Renderer from './utils/Renderer';
import World from './world/World';

let instance: Experience | null = null;

/*
 *  Main class for maintaining the WebGL & Three.JS Experience structured
 *  @constructor
 *    | canvas: HTMLCanvasElement
 *    | sizes: Sizes
 *    | time: Time
 *    | scene: Scene
 *    | renderer: Renderer
 */
export class Experience {
   public sizes: Sizes;
   public time: Time;
   public scene: THREE.Scene;
   public camera: Camera;
   public renderer: Renderer;
   public world: World;

   constructor(public canvas?: HTMLCanvasElement | undefined) {
      // singleton, to distribute to the other class
      if (instance) return instance;
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      instance = this;
      window.experience = instance;

      this.canvas = canvas;
      this.sizes = new Sizes();
      this.time = new Time();
      this.scene = new THREE.Scene();
      this.camera = new Camera();
      this.renderer = new Renderer();
      this.world = new World();

      this.sizes.on('resize', () => {
         this.resize();
      });

      this.time.on('tick', () => {
         this.update();
      });
   }

   update() {
      this.camera.update();
      this.renderer.update();
   }

   resize() {
      this.camera.resize();
      this.renderer.resize();
   }
}

export default Experience;
