/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import {  useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('../../tinkerhub_logo.glb')
  // rotation={[Math.PI /2, 0,0]}
  const onHandleopn = ()=>{
    console.log("clicked");
  }

 


  useFrame(() => (group.current.rotation.y = group.current.rotation.y += 0.01));
  return (
    <group   ref={group} {...props} dispose={null} onClick={onHandleopn} >
      <mesh 
        
        geometry={nodes.Cube001.geometry}
        material={materials['Material.001']}
        position={[0, 2.05, -0.03]}
        scale={0.37}
      />
      <mesh
        geometry={nodes.Cube002.geometry}
        material={materials['Material.002']}
        position={[0, 2.05, -1.21]}
        scale={[0.37, 0.37, 0.19]}
      />
      <mesh
        geometry={nodes.Cube003.geometry}
        material={materials['Material.003']}
        position={[0, 1.24, -0.72]}
        scale={[0.37, 0.37, 0.56]}
      />
      <mesh
        geometry={nodes.Cube004.geometry}
        material={materials['Material.004']}
        position={[0, 0.41, 0.46]}
        scale={[0.37, 0.37, 0.23]}
      />
      <mesh
        geometry={nodes.Cube005.geometry}
        material={materials['Material.005']}
        position={[0, 0.41, -0.42]}
        scale={[0.37, 0.37, 0.15]}
      />
      <mesh
        geometry={nodes.Cube006.geometry}
        material={materials['Material.006']}
        position={[0, 0.41, -1.2]}
        scale={[0.37, 0.37, 0.15]}
      />
    </group>
  )
}

useGLTF.preload('../../tinkerhub_logo.glb')
