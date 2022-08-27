import * as THREE from 'three';

import Experience from '../Experience';
import Resources from './Resources';
import Time from './Time';

export class Controls {
   private experience: Experience;
   private scene: THREE.Scene;
   private resources: Resources;
   private time: Time;
   private curve: THREE.CatmullRomCurve3;

   constructor() {
      this.experience = new Experience();
      this.scene = this.experience.scene;
      this.resources = this.experience.resources;
      this.time = this.experience.time;

      this.setPath();
   }

   setPath() {
      //Create a closed wavey loop
      this.curve = new THREE.CatmullRomCurve3([
         new THREE.Vector3(-10, 0, 10),
         new THREE.Vector3(-5, 5, 5),
         new THREE.Vector3(0, 0, 0),
         new THREE.Vector3(5, -5, 5),
         new THREE.Vector3(10, 0, 10),
      ]);

      const points = this.curve.getPoints(50);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);

      const material = new THREE.LineBasicMaterial({ color: 0xff0000 });

      // Create the final object to add to the scene
      const curveObject = new THREE.Line(geometry, material);
      this.scene.add(curveObject);
   }

   update() {
      //
   }
}

export default Controls;
