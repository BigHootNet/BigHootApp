declare module 'three/examples/jsm/loaders/GLTFLoader' {
    import * as THREE from 'three';
  
    export class GLTFLoader extends THREE.Loader {
      load(
        url: string,
        onLoad: (gltf: GLTF) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void
      ): void;
    }
  
    export interface GLTF {
      animations: THREE.AnimationClip[];
      scene: THREE.Group;
      scenes: THREE.Group[];
      cameras: THREE.Camera[];
      asset: object;
    }
  }
  
  declare module 'three/examples/jsm/controls/OrbitControls' {
    import * as THREE from 'three';
  
    export class OrbitControls extends THREE.EventDispatcher {
      constructor(object: THREE.Camera, domElement?: HTMLElement);
  
      target: THREE.Vector3;
  
      update(): void;
  
    }
  }