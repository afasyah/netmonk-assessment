import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import {
   PerspectiveCameraInterface,
   OrthographicCameraInterface,
} from '../../../ts/interfaces/ClassInterfaces';
import Experience from '../Experience';
import Sizes from './Sizes';

/*
 *  Camera class for Three.JS camera. It updates accordingly with the sizes from the experience class
 *  @constructor
 *    | experience: Experience
 *    | sizes: Sizes
 *    | scene: Scene
 *    | canvas: HTMLCanvasElement
 *    | controls: OrbitControls
 *    | instance: PerspectiveCameraInterface | OrthographicCameraInterface | null
 */
export class Camera {
   private experience: Experience;
   private sizes: Sizes;
   private scene: THREE.Scene;
   private canvas: HTMLCanvasElement | undefined;
   private controls: OrbitControls;
   public instance:
      | PerspectiveCameraInterface
      | OrthographicCameraInterface
      | null;

   constructor() {
      this.experience = new Experience();
      this.sizes = this.experience.sizes;
      this.scene = this.experience.scene;
      this.canvas = this.experience.canvas;
      this.instance = null;

      this.setInstance();
      // this.setControls();
   }

   setInstance() {
      this.instance = new THREE.PerspectiveCamera(
         35,
         this.sizes.width / this.sizes.height,
         0.1,
         100,
      );
      this.instance.position.set(6, 4, 8);
      this.scene.add(this.instance);
   }

   resize() {
      this.instance.aspect = this.sizes.width / this.sizes.height;
      this.instance.updateProjectionMatrix();
   }

   setControls() {
      this.controls = new OrbitControls(this.instance, this.canvas);
      this.controls.enableDamping = true;
   }

   update() {
      // this.controls.update();
   }
}

export default Camera;
