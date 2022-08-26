import EventEmitter from '../../classes/EventEmitter';

export interface PerspectiveCameraInterface extends THREE.PerspectiveCamera {
   aspect: number | null;
}

export interface OrthographicCameraInterface extends THREE.OrthographicCamera {
   aspect: number | null;
}

export interface eventNameIdentification {
   original: string;
   value: string;
   namespace: string;
}

export interface eventEmitterMethods {
   on(_names: string, callback: () => void): boolean | EventEmitter;
   off(_names: string): boolean | EventEmitter;
   trigger(_name: string, _args: any): any;
   resolveNames(_names: string): string[] | string;
   resolveName(name: string): eventNameIdentification;
}
