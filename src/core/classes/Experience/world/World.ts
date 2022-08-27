import * as THREE from 'three';
import Experience from '../Experience';
import Resources from '../utils/Resources';
import Environment from '../utils/Environment';
import Sushi from '../world/Sushi';

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

   constructor() {
      this.experience = new Experience();
      this.scene = this.experience.scene;
      this.resources = this.experience.resources;

      // Wait for resources
      this.resources.on('ready', () => {
         // Setup
         this.sushi = new Sushi();
         this.environment = new Environment();
      });
   }
}

export default World;
