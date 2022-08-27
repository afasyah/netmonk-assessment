import EventEmitter from '../../classes/EventEmitter';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

export interface ResourceLoader {
   gltfLoader: GLTFLoader;
   dracoLoader: DRACOLoader;
   textureLoader: THREE.TextureLoader;
   cubeTextureLoader: THREE.CubeTextureLoader;
}

export interface ResourceSources {
   name: string;
   type: string;
   path: string | string[];
}

export interface PerspectiveCameraInterface extends THREE.PerspectiveCamera {
   aspect: number | null;
}

export interface OrthographicCameraInterface extends THREE.OrthographicCamera {
   aspect?: number | null;
   frustum?: number | null;
}

export interface EventNameIdentification {
   original: string;
   value: string;
   namespace: string;
}

export interface EventEmitterMethods {
   on(_names: string, callback: () => void): boolean | EventEmitter;
   off(_names: string): boolean | EventEmitter;
   trigger(_name: string, _args: any): any;
   resolveNames(_names: string): string[] | string;
   resolveName(name: string): EventNameIdentification;
}
