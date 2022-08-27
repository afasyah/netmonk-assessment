import * as THREE from 'three';
import GSAP from 'gsap';

import Experience from '../Experience';
import Resources from '../utils/Resources';
import Camera from '../utils/Camera';

import { LerpInterface } from '@/core/ts/interfaces/ClassInterfaces';

export class Sushi {
   private experience: Experience;
   private scene: THREE.Scene;
   private resources: Resources;
   private resource: any;
   private model: THREE.Scene;
   private camera: Camera;
   private rotation: number;
   public lerp: LerpInterface;

   constructor() {
      this.experience = new Experience();
      this.scene = this.experience.scene;
      this.camera = this.experience.camera;
      this.resources = this.experience.resources;
      this.resource = this.resources.items.Sushi;

      this.lerp = {
         current: Math.PI * 0.5,
         target: Math.PI * 0.25,
         ease: 0.1,
      };

      this.setModel();
      this.onMouseMove();
   }

   setModel() {
      this.model = this.resource.scene;
      this.model.scale.set(0.5, 0.5, 0.5);
      // this.model.rotation.y = Math.PI * 0.25;
      this.scene.add(this.model);

      this.model.traverse((child) => {
         if (child instanceof THREE.Mesh) {
            child.castShadow = true;
            child.receiveShadow = true;
         }
      });
   }

   onMouseMove() {
      window.addEventListener('mousemove', (e) => {
         this.rotation =
            ((e.clientX - window.innerWidth / 2) * 0.5) / window.innerWidth +
            Math.PI * 0.25;

         this.lerp.target = this.rotation;
      });
   }

   update() {
      this.lerp.current = GSAP.utils.interpolate(
         this.lerp.current,
         this.lerp.target,
         this.lerp.ease,
      );

      this.model.rotation.y = this.lerp.current;
   }
}

export default Sushi;
