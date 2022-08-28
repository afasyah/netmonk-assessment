import * as THREE from 'three';
// import { gsap } from 'gsap';

import Experience from '../Experience';
import Resources from '../utils/Resources';
import Environment from '../utils/Environment';
import Sushi from '../world/Sushi';
import Floor from '../world/Floor';
import Overlay from '../world/Overlay';
import Controls from '../utils/Controls';

/*
 *  World class for Three.JS scene. It is where all of the element of Three.JS come into one place
 *  @constructor
 *    | experience: Experience
 *    | scene: Scene
 *    | sunLight: THREE.DirectionalLight | null
 */
export class World {
   private experience: Experience;
   private scene: THREE.Scene;
   private resources: Resources;
   private environment: Environment;
   private sushi: Sushi;
   private floor: Floor;
   private controls: Controls;
   private overlay: Overlay;

   constructor() {
      this.experience = new Experience();
      this.scene = this.experience.scene;
      this.resources = this.experience.resources;
      // this.overlay = new Overlay();

      // Wait for resources
      this.resources.on('ready', () => {
         // gsap.to(this.overlay.shaderMaterial.uniforms.uAlpha, {
         //    duration: 2,
         //    value: 0,
         // });

         // Setup
         window.setTimeout(() => {
            this.environment = new Environment();
            this.sushi = new Sushi();
            this.floor = new Floor();
            this.controls = new Controls();
            window.dispatchEvent(new CustomEvent('asset-loaded'));
         }, 0);
      });
   }

   update() {
      if (this.sushi) this.sushi.update();
      if (this.controls) this.controls.update();
   }
}

export default World;
