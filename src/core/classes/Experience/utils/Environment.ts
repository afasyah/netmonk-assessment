import * as THREE from 'three';
import Experience from '../Experience';
import Resources from './Resources';

export default class Environment {
   private experience: Experience;
   private scene: THREE.Scene;
   private resources: Resources;
   public sunLight: THREE.DirectionalLight | null;
   public ambientLight: THREE.AmbientLight | null;
   public environmentMap: any;

   constructor() {
      this.experience = new Experience();
      this.scene = this.experience.scene;
      this.resources = this.experience.resources;

      // Setup
      this.setSunLight();
      this.setAmbientLight();
      // this.setEnvironmentMap();
   }

   setEnvironmentMap() {
      this.environmentMap = {};
      this.environmentMap.intensity = 0.4;
      this.environmentMap.texture = this.resources.items.environmentMapTexture;
      this.environmentMap.texture.encoding = THREE.sRGBEncoding;

      this.scene.environment = this.environmentMap.texture;

      this.environmentMap.updateMaterials = () => {
         this.scene.traverse((child) => {
            if (
               child instanceof THREE.Mesh &&
               child.material instanceof THREE.MeshStandardMaterial
            ) {
               child.material.envMap = this.environmentMap.texture;
               child.material.envMapIntensity = this.environmentMap.intensity;
               child.material.needsUpdate = true;
            }
         });
      };
      this.environmentMap.updateMaterials();
   }

   setSunLight() {
      this.sunLight = new THREE.DirectionalLight('#FFF', 1);
      this.sunLight.position.y = 6;
      this.sunLight.position.x = -Math.PI * 2;
      this.sunLight.position.z = Math.PI * 1;
      this.sunLight.castShadow = true;
      this.sunLight.shadow.mapSize.set(2048, 2048);
      this.sunLight.shadow.normalBias = 0.05;
      this.scene.add(this.sunLight);

      const helper = new THREE.DirectionalLightHelper(this.sunLight, 2);
      this.scene.add(helper);
   }

   setAmbientLight() {
      this.ambientLight = new THREE.AmbientLight('#FFF', 0.5);
      this.scene.add(this.ambientLight);
   }
}
