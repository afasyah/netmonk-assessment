import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import {
   PerspectiveCameraInterface,
   OrthographicCameraInterface,
} from '@/core/ts/interfaces/ClassInterfaces';
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
   public orthographicCamera: OrthographicCameraInterface;
   public perspectiveCamera: PerspectiveCameraInterface;

   constructor() {
      this.experience = new Experience();
      this.sizes = this.experience.sizes;
      this.scene = this.experience.scene;
      this.canvas = this.experience.canvas;

      // this.setInstance();
      this.createOrthographicCamera();
      this.createPerspectiveCamera();
      this.setOrbitControl();
   }

   // setInstance() {
   //    this.instance = this.createPerspectiveCamera();
   //    this.scene.add(this.instance);
   // }

   createOrthographicCamera() {
      this.orthographicCamera = new THREE.OrthographicCamera(
         (-this.sizes.aspect * this.sizes.frustum) / 2,
         (this.sizes.aspect * this.sizes.frustum) / 2,
         this.sizes.frustum / 2,
         -this.sizes.frustum / 2,
         -100,
         100,
      );
      this.scene.add(this.orthographicCamera);

      const size = 10;
      const divisions = 10;

      const gridHelper = new THREE.GridHelper(size, divisions);
      this.scene.add(gridHelper);

      const axesHelper = new THREE.AxesHelper(5);
      this.scene.add(axesHelper);
   }

   createPerspectiveCamera() {
      this.perspectiveCamera = new THREE.PerspectiveCamera(
         35,
         this.sizes.width / this.sizes.height,
         0.1,
         100,
      );
      this.perspectiveCamera.position.set(6, 4, 8);
      this.scene.add(this.perspectiveCamera);
   }

   resize() {
      this.perspectiveCamera.aspect = this.sizes.width / this.sizes.height;
      this.perspectiveCamera.updateProjectionMatrix();

      this.orthographicCamera.left =
         (-this.sizes.aspect * this.sizes.frustum) / 2;
      this.orthographicCamera.right =
         (this.sizes.aspect * this.sizes.frustum) / 2;
      this.orthographicCamera.top = this.sizes.frustum / 2;
      this.orthographicCamera.bottom = -this.sizes.frustum / 2;
      this.orthographicCamera.updateProjectionMatrix();
   }

   setOrbitControl() {
      this.controls = new OrbitControls(this.perspectiveCamera, this.canvas);
      this.controls.enableDamping = true;
   }

   update() {
      this.controls.update();
   }
}

export default Camera;
