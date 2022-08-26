import Experience from '../Experience';

/*
 *  World class for Three.JS scene. It is where all of the element of Three.JS come into one place
 *  @constructor
 *    | experience: Experience
 *    | scene: Scene
 */
export class World {
   private experience: Experience;
   private scene: THREE.Scene;

   constructor() {
      this.experience = new Experience();
      this.scene = this.experience.scene;
   }
}

export default World;
