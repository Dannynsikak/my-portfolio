import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const ThreeLogo: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentMount = mountRef.current; // Store the current value of mountRef

    // Scene setup
    const scene = new THREE.Scene();

    // Adjust camera aspect ratio based on container size, not the entire window
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 3;

    // Renderer setup to fit the container
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(100, 100); // Fixed size for navbar logo
    if (currentMount) {
      currentMount.appendChild(renderer.domElement);
    }

    // Create cube
    const geometry = new THREE.BoxGeometry(2, 2, 2); // Increased size of the cube
    const material = new THREE.MeshPhongMaterial({
      color: 0xc0c0c0, // Silver color
      specular: 0xffffff, // Add some reflection to make it shiny
      shininess: 100,
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Lighting
    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Handle resizing
    const handleResize = () => {
      if (currentMount) {
        const width = currentMount.clientWidth;
        const height = currentMount.clientHeight;

        renderer.setSize(width, height); // Resize to the container size
        camera.aspect = width / height; // Adjust camera aspect ratio
        camera.updateProjectionMatrix(); // Update camera matrix
      }
    };
    window.addEventListener("resize", handleResize);

    // Clean up on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Fixed container size for navbar logo
  return <div ref={mountRef} className="w-[100%] h-[100%]" />;
};

export default ThreeLogo;
