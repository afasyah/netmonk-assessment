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
   public orthographicCameraHelper: THREE.CameraHelper;
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
         -8,
         8,
      );
      this.orthographicCamera.rotation.x = -Math.PI / 6;
      this.scene.add(this.orthographicCamera);

      this.orthographicCameraHelper = new THREE.CameraHelper(
         this.orthographicCamera,
      );
      this.scene.add(this.orthographicCameraHelper);

      const size = 20;
      const divisions = 20;

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

      this.orthographicCameraHelper.matrixWorldNeedsUpdate = true;
      this.orthographicCameraHelper.update();
      this.orthographicCameraHelper.position.copy(
         this.orthographicCamera.position,
      );
      this.orthographicCameraHelper.rotation.copy(
         new THREE.Euler(
            this.orthographicCamera.position.x,
            this.orthographicCamera.position.y,
            this.orthographicCamera.position.z,
         ),
      );
   }
}

export default Camera;
