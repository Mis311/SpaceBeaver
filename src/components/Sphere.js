import React from "react";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useSpring, animated, config } from "@react-spring/three";

function Sphere(props) {
  
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const { scale } = useSpring({
    scale: hovered ? 1.5 : 1,
    config: config.wobbly,
  });
  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <>
      <animated.mesh
        ref={ref}
        onClick={() => {
          setClicked(!clicked);
          props.handleSphereClick && props.handleSphereClick();
        }}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={scale}
      >
        <sphereGeometry args={[3, 32, 32]} />
        <meshStandardMaterial color={clicked ? "blue" : "purple"} />
      </animated.mesh>
    </>
  );
}

export default Sphere;
