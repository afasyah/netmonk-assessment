import * as THREE from 'three';

import Experience from '../Experience';
import Camera from '../utils/Camera';

export class Floor {
   private experience: Experience;
   private scene: THREE.Scene;
   private model: THREE.Mesh;
   private camera: Camera;

   constructor() {
      this.experience = new Experience();
      this.scene = this.experience.scene;
      this.camera = this.experience.camera;

      this.setModel();
   }

   setModel() {
      this.model = new THREE.Mesh(
         new THREE.PlaneBufferGeometry(8, 8),
         new THREE.ShadowMaterial({ opacity: 0.2 }),
      );
      this.model.rotation.x = -Math.PI * 0.5;
      this.model.receiveShadow = true;
      this.scene.add(this.model);
   }

   update() {
      //
   }
}

export default Floor;
