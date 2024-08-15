import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import modelPath from '../assets/models/oak.glb';

const TreeModel: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Initialize Three.js elements
    const { scene, camera, renderer } = initializeThree(currentMount);
    rendererRef.current = renderer;

    // Load the GLTF model and set up animations and interactions
    loadModel(scene, camera, renderer);

    // Handle window resize
    const handleResize = () => resizeRenderer(renderer, camera);
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      cleanup(renderer, currentMount);
    };
  }, []);

  return (
    <>
      <div className="section-title">
        <span>/about</span>
      </div>
      <div className="hero-content">
        <span>I'm a french dude who spent too much time looking for smooth, interactive and sick designs.</span>
      </div>
      <div ref={mountRef}></div>
    </>
  );
};

export default TreeModel;

// Initialize the scene, camera, and renderer
function initializeThree(container: HTMLDivElement) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.set(50, 20, 255);

  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0); // Default background color
  renderer.domElement.id = 'canvas';
  container.appendChild(renderer.domElement);

  return { scene, camera, renderer };
}

// Load the GLTF model, set up animations, and handle user interactions
function loadModel(scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer) {
  const loader = new GLTFLoader();
  loader.load(modelPath, (gltf: GLTF) => {
    const mesh = setupModel(gltf.scene);
    scene.add(mesh);

    const mixer = setupAnimation(gltf, mesh);
    setupMouseInteraction(mesh);
    setupAnimationLoop(mixer, scene, camera, renderer);
  });
}

// Set up the model by applying wireframe materials and hiding leaves
function setupModel(scene: THREE.Group) {
  scene.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const meshChild = child as THREE.Mesh;
      applyWireframeMaterial(meshChild);
    }
  });

  hideLeaves(scene, ['feuille1', 'feuille2', 'feuille3', 'feuille4', 'feuille5', 'feuille6']);
  scene.scale.setScalar(2.0);
  scene.position.set(100, 5, 150);

  return scene;
}

// Apply wireframe material to a mesh
function applyWireframeMaterial(mesh: THREE.Mesh) {
  if (Array.isArray(mesh.material)) {
    mesh.material.forEach((material) => {
      if ((material as THREE.MeshBasicMaterial).wireframe !== undefined) {
        (material as THREE.MeshBasicMaterial).wireframe = true;
      }
    });
  } else {
    if ((mesh.material as THREE.MeshBasicMaterial).wireframe !== undefined) {
      (mesh.material as THREE.MeshBasicMaterial).wireframe = true;
    }
  }
}

// Hide specified leaves in the scene
function hideLeaves(scene: THREE.Group, leafNames: string[]) {
  leafNames.forEach((leafName) => {
    const leaf = scene.getObjectByName(leafName);
    if (leaf) {
      leaf.visible = false;
    }
  });
}

// Set up animation for the model
function setupAnimation(gltf: GLTF, scene: THREE.Group) {
  const mixer = new THREE.AnimationMixer(scene);
  const clip = THREE.AnimationClip.findByName(gltf.animations, 'leafAnim1');
  if (clip) {
    const action = mixer.clipAction(clip);
    action.setLoop(THREE.LoopOnce, 1);
    action.clampWhenFinished = true;

    action.getMixer().addEventListener('finished', () => {
      const leaf = scene.getObjectByName('feuille1');
      if (leaf) {
        leaf.visible = false;
      }
    });

    document.addEventListener('click', () => {
      const tree = scene.getObjectByName('Tree');
      const leaf = scene.getObjectByName('feuille1');
      if (tree && leaf) {
        leaf.visible = true;
        action.reset();
        action.play();
      }
    });
  }

  return mixer;
}

// Handle mouse interaction to rotate the tree
function setupMouseInteraction(mesh: THREE.Object3D) {
  document.addEventListener('mousemove', (event) => {
    const tree = mesh.getObjectByName('Tree');
    if (tree) {
      const mouseX = window.innerWidth / 2.08 - event.clientX;
      tree.rotation.y = Math.PI * 1.5 * mouseX / window.innerWidth;
      mesh.updateMatrix();
    }
  });
}

// Set up the animation loop
function setupAnimationLoop(mixer: THREE.AnimationMixer, scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer) {
  const clock = new THREE.Clock();

  const animate = () => {
    requestAnimationFrame(animate);
    mixer.update(clock.getDelta());
    renderer.render(scene, camera);
  };

  animate();
}

// Handle window resize
function resizeRenderer(renderer: THREE.WebGLRenderer, camera: THREE.PerspectiveCamera) {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
}

// Cleanup renderer on component unmount
function cleanup(renderer: THREE.WebGLRenderer, container: HTMLDivElement) {
  if (renderer && container) {
    container.removeChild(renderer.domElement);
    renderer.dispose();
  }
}
