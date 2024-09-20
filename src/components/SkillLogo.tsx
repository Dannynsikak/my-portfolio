import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface SkillLogoProps {
  image: string;
}

const SkillLogo: React.FC<SkillLogoProps> = ({ image }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentMount = mountRef.current; // Store the current value of mountRef

    // Create the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(150, 150);

    if (currentMount) {
      currentMount.appendChild(renderer.domElement);
    }

    // Load the image as a texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(image);

    // Create a plane geometry and apply the texture
    const geometry = new THREE.PlaneGeometry(2, 2, 2);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      plane.rotation.y += 0.02; // Rotate the plane and increase speed
      if (plane.rotation.y >= Math.PI * 2) {
        plane.rotation.y = 0; // Reset rotation to smooth out the animation
      }
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, [image]);

  return <div ref={mountRef} className="w-[200px] h-[200px]" />;
};

export default SkillLogo;
