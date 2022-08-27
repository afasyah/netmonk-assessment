import * as THREE from 'three';

import Experience from '../Experience';
import Camera from '../utils/Camera';

export class Overlay {
   private experience: Experience;
   private scene: THREE.Scene;
   private model: THREE.Mesh;
   private camera: Camera;
   public shaderMaterial: THREE.ShaderMaterial;

   constructor() {
      this.experience = new Experience();
      this.scene = this.experience.scene;
      this.camera = this.experience.camera;
      this.shaderMaterial = new THREE.ShaderMaterial({
         uniforms: {
            uAlpha: { value: 1 },
         },
         transparent: true,
         vertexShader: `
            void main()
            {
               gl_Position = vec4(position, 1.0);
            }
         `,
         fragmentShader: `
            uniform float uAlpha;

            void main()
            {
               gl_FragColor = vec4(0.996, 0.675, 0.235, uAlpha);
            }
         `,
      });

      this.setModel();
   }

   setModel() {
      this.model = new THREE.Mesh(
         new THREE.PlaneBufferGeometry(2, 2, 1, 1),
         this.shaderMaterial,
      );
      this.scene.add(this.model);
   }

   update() {
      //
   }
}

export default Overlay;
