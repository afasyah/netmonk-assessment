import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import EventEmitter from '../../EventEmitter';
import {
   ResourceSources,
   ResourceLoader,
} from '@/core/ts/interfaces/ClassInterfaces';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

/*
 *  Resources class for maintaining Three.JS resources. models and textures are here.
 *  @constructor
 *    | sources: ResourceSources[]
 */
export class Resources extends EventEmitter {
   public items: any;
   public toLoad: number | undefined;
   public loaded: number;
   public loaders: ResourceLoader;

   constructor(private sources?: ResourceSources[]) {
      super();

      this.sources = sources;
      this.items = {};
      this.toLoad = this.sources.length;
      this.loaded = 0;

      this.setLoaders();
      this.startLoading();
   }

   setLoaders() {
      this.loaders = {
         gltfLoader: null,
         dracoLoader: null,
         textureLoader: null,
         cubeTextureLoader: null,
      };
      this.loaders.gltfLoader = new GLTFLoader();
      this.loaders.dracoLoader = new DRACOLoader();
      this.loaders.dracoLoader.setDecoderPath('/draco/');
      this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader);
      this.loaders.textureLoader = new THREE.TextureLoader();
      this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader();
   }

   startLoading() {
      // Load each source
      for (const source of this.sources) {
         if (source.type === 'gltfModel') {
            this.loaders.gltfLoader.load(source.path as string, (file) => {
               this.sourceLoaded(source, file);
            });
         } else if (source.type === 'texture') {
            this.loaders.textureLoader.load(source.path as string, (file) => {
               this.sourceLoaded(source, file);
            });
         } else if (source.type === 'cubeTexture') {
            this.loaders.cubeTextureLoader.load(
               source.path as string[],
               (file) => {
                  this.sourceLoaded(source, file);
               },
            );
         }
      }
   }

   sourceLoaded(source: ResourceSources, file: any) {
      this.items[source.name] = file;

      this.loaded++;

      if (this.loaded === this.toLoad) {
         this.trigger('ready');
      }
   }
}

export default Resources;
