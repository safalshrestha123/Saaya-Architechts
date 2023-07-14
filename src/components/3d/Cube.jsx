import React, { useRef } from "react";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";

import { useFrame } from "@react-three/fiber";
import styled from "styled-components";

const Cube = () => {
  const textRef = useRef();
  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 13)
  );
  return (
    <mesh>
    <boxGeometry />
    <meshStandardMaterial>
      <RenderTexture attach="map">
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <color attach="background" args={['Skyblue']} />
        <Text ref={textRef} fontSize={3} color="black">
          SAAYA
        </Text>
      </RenderTexture>
    </meshStandardMaterial>
  </mesh>
  );
};

export default Cube;
