import * as THREE from 'three';
import Experience from '../Experience';
import Resources from '../utils/Resources';
import Camera from '../utils/Camera';

export class Sushi {
   private experience: Experience;
   private scene: THREE.Scene;
   private resources: Resources;
   private resource: any;
   private model: THREE.Scene;
   private camera: Camera;

   constructor() {
      this.experience = new Experience();
      this.scene = this.experience.scene;
      this.camera = this.experience.camera;
      this.resources = this.experience.resources;
      this.resource = this.resources.items.Sushi;

      this.setModel();
   }

   setModel() {
      this.model = this.resource.scene;
      this.model.scale.set(0.5, 0.5, 0.5);
      this.model.rotation.y = Math.PI * 0.5;
      this.scene.add(this.model);

      this.model.traverse((child) => {
         if (child instanceof THREE.Mesh) {
            child.castShadow = true;
            child.receiveShadow = true;
         }
      });
   }
}

export default Sushi;
