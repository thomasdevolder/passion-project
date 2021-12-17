/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import zaalModel from '../assets/models/zaalRealOne.gltf'
import { STATE } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'

export default function Model({ ...props }) {
  const scroll = useScroll()
  useFrame((state, delta) => {
    const offset = 1 - scroll.offset; 
    //console.log(offset); 
    state.camera.position.set(offset * -5000, 200 , offset * -2000)
    if(offset < .500) {
      state.camera.lookAt(2000, 400, 3000)
    } else { 
      state.camera.lookAt(2000, 400, -3000)
    }
    
  })
  const group = useRef()

  useEffect(() => {
    console.log(group)
  },[])

  const { nodes, materials } = useGLTF(zaalModel)
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-896.13, 154.92, -30.97]}>
        <group position={[896.13, -154.92, 30.97]}>
          <group position={[234.23, 193.33, -246.37]} rotation={[0, -1.57, 0]}>
            <mesh geometry={nodes.Cube13_1.geometry} material={nodes.Cube13_1.material} position={[0, 6.67, 2918.54]} />
            <mesh geometry={nodes.Cube2_3.geometry} material={nodes.Cube2_3.material} position={[0, -3.33, -1927.1]} />
            <mesh
              geometry={nodes.Cube11_1.geometry}
              material={nodes.Cube11_1.material}
              position={[0, -3.33, -991.43]}
            />
          </group>
          <mesh
            geometry={nodes.Cube5.geometry}
            material={nodes.Cube5.material}
            position={[0, 251.01, -300]}
            rotation={[0, 1.57, 0]}
          />
        </group>
        <group position={[891, -146.26, 32.7]} rotation={[0, -0.46, 0]}>
          <group position={[-2.37, -5.01, -4.03]} rotation={[0, -0.01, 0]}>
            <mesh
              geometry={nodes['Tube_3_2-Glossy-Black'].geometry}
              material={nodes['Tube_3_2-Glossy-Black'].material}
            />
            <mesh
              geometry={nodes['Tube_3_2-Glossy-White'].geometry}
              material={nodes['Tube_3_2-Glossy-White'].material}
            />
          </group>
          <mesh geometry={nodes.Tube_7.geometry} material={nodes.Tube_7.material} position={[-9.68, -2.74, -6.35]} />
          <mesh geometry={nodes.Tube_6.geometry} material={nodes.Tube_6.material} position={[3.89, -2.77, 0.59]} />
          <mesh geometry={nodes.Tube_5.geometry} material={nodes.Tube_5.material} position={[3.89, -2.77, 0.59]} />
          <mesh geometry={nodes.Tube_4.geometry} material={nodes.Tube_4.material} position={[3.89, 4.2, 0.59]} />
          <mesh
            geometry={nodes.Cylinder_1.geometry}
            material={nodes.Cylinder_1.material}
            position={[-9.68, 0.53, -6.35]}
          />
          <mesh geometry={nodes.Tube_6_2.geometry} material={nodes.Tube_6_2.material} position={[-9.68, 4.18, -6.35]} />
          <mesh geometry={nodes.Tube_2.geometry} material={nodes.Tube_2.material} position={[3.89, -1.02, 0.59]} />
          <mesh geometry={nodes.Tube_1.geometry} material={nodes.Tube_1.material} position={[3.89, 2.11, 0.59]} />
          <mesh geometry={nodes.Tube_1_2.geometry} material={nodes.Tube_1_2.material} position={[3.89, 0.52, 0.59]} />
          <mesh geometry={nodes.Cylinder.geometry} material={nodes.Cylinder.material} position={[3.89, 0.53, 0.59]} />
          <mesh geometry={nodes.Tube_3.geometry} material={nodes.Tube_3.material} position={[3.89, 2.11, 2.69]} />
          <mesh geometry={nodes.Tube_2_2.geometry} material={nodes.Tube_2_2.material} position={[3.89, 0.51, 2.69]} />
          <mesh geometry={nodes.Tube_1_3.geometry} material={nodes.Tube_1_3.material} position={[3.89, -1.02, 2.69]} />
          <mesh geometry={nodes.Loft_2.geometry} material={nodes.Loft_2.material} position={[4.16, -0.03, 5.15]} />
          <mesh geometry={nodes.Tube.geometry} material={nodes.Tube.material} position={[-5.84, 4.34, 2.87]} />
          <mesh geometry={nodes.Tube_2_3.geometry} material={nodes.Tube_2_3.material} position={[-5.84, -3.66, 2.87]} />
        </group>
        <group position={[1093.85, 158.24, -1051.14]} rotation={[-3.09, -1.45, -3.07]}>
          <group position={[-104.31, -208.76, -481.57]} rotation={[0, -0.01, 0]}>
            <mesh
              geometry={nodes['Tube_3_2-Glossy-Black_1'].geometry}
              material={nodes['Tube_3_2-Glossy-Black_1'].material}
            />
            <mesh
              geometry={nodes['Tube_3_2-Glossy-White_1'].geometry}
              material={nodes['Tube_3_2-Glossy-White_1'].material}
            />
          </group>
          <mesh
            geometry={nodes.Tube_7_1.geometry}
            material={nodes.Tube_7_1.material}
            position={[-426.13, -114.09, -759.15]}
          />
          <mesh
            geometry={nodes.Tube_6_1.geometry}
            material={nodes.Tube_6_1.material}
            position={[171.32, -115.28, 70.39]}
          />
          <mesh
            geometry={nodes.Tube_5_1.geometry}
            material={nodes.Tube_5_1.material}
            position={[171.32, -115.28, 70.39]}
          />
          <mesh
            geometry={nodes.Tube_4_1.geometry}
            material={nodes.Tube_4_1.material}
            position={[171.32, 174.91, 70.39]}
          />
          <mesh
            geometry={nodes.Cylinder_1_1.geometry}
            material={nodes.Cylinder_1_1.material}
            position={[-426.13, 22.22, -759.15]}
          />
          <mesh
            geometry={nodes.Tube_6_2_1.geometry}
            material={nodes.Tube_6_2_1.material}
            position={[-426.13, 174.07, -759.15]}
          />
          <mesh
            geometry={nodes.Tube_2_1.geometry}
            material={nodes.Tube_2_1.material}
            position={[171.32, -42.66, 70.39]}
          />
          <mesh
            geometry={nodes.Tube_1_1.geometry}
            material={nodes.Tube_1_1.material}
            position={[171.32, 87.75, 70.39]}
          />
          <mesh
            geometry={nodes.Tube_1_2_1.geometry}
            material={nodes.Tube_1_2_1.material}
            position={[171.32, 21.61, 70.39]}
          />
          <mesh
            geometry={nodes.Cylinder_2.geometry}
            material={nodes.Cylinder_2.material}
            position={[171.32, 22.22, 70.39]}
          />
          <mesh
            geometry={nodes.Tube_3_1.geometry}
            material={nodes.Tube_3_1.material}
            position={[171.32, 87.84, 321.67]}
          />
          <mesh
            geometry={nodes.Tube_2_2_1.geometry}
            material={nodes.Tube_2_2_1.material}
            position={[171.32, 21.38, 321.67]}
          />
          <mesh
            geometry={nodes.Tube_1_3_1.geometry}
            material={nodes.Tube_1_3_1.material}
            position={[171.32, -42.58, 321.67]}
          />
          <mesh
            geometry={nodes.Loft_2_1.geometry}
            material={nodes.Loft_2_1.material}
            position={[183.26, -1.34, 615.79]}
          />
          <mesh
            geometry={nodes.Tube_8.geometry}
            material={nodes.Tube_8.material}
            position={[-256.85, 180.71, 342.73]}
          />
          <mesh
            geometry={nodes.Tube_2_3_1.geometry}
            material={nodes.Tube_2_3_1.material}
            position={[-256.85, -152.74, 342.73]}
          />
        </group>
        <group position={[896.13, -154.92, 30.97]}>
          <mesh
            geometry={nodes.Cube13.geometry}
            material={nodes.Cube13.material}
            position={[-2313.06, 251.01, 592.73]}
          />
          <mesh geometry={nodes.Cube2.geometry} material={nodes.Cube2.material} position={[-2319.75, 200, 129.12]} />
        </group>
        <group position={[-1288.66, 35.54, -228.1]} rotation={[0, -1.57, 0]}>
          <group position={[36.89, -117.64, 0.41]} rotation={[0, -0.01, 0]}>
            <mesh geometry={nodes.Piano.geometry} material={nodes.Piano.material} position={[-39.95, 184.76, 10.51]} />
          </group>
          <mesh
            geometry={nodes.Loft_NURBS.geometry}
            material={nodes.Loft_NURBS.material}
            position={[228.7, -146.03, -337.13]}
          />
          <mesh
            geometry={nodes.Cylin.geometry}
            material={nodes.Cylin.material}
            position={[-1.96, 90.08, 0.16]}
            rotation={[0, -0.01, 0]}
          />
          <mesh
            geometry={nodes.Cylinder_3.geometry}
            material={nodes.Cylinder_3.material}
            position={[-1.96, 116.19, 0.16]}
            rotation={[0, -0.01, 0]}
          />
          <mesh
            geometry={nodes.Rotazione_.geometry}
            material={nodes.Rotazione_.material}
            position={[-2.24, 163.38, 0.16]}
            rotation={[0, -0.01, 0]}>
            <mesh geometry={nodes.Cylin1.geometry} material={nodes.Cylin1.material} position={[0, 17.58, -7.11]}>
              <mesh
                geometry={nodes.Extrude_NU.geometry}
                material={nodes.Extrude_NU.material}
                position={[0, -350.73, 6.05]}>
                <group position={[0, 338.85, -6.75]}>
                  <mesh geometry={nodes.Cap_2.geometry} material={nodes.Cap_2.material} />
                </group>
                <mesh
                  geometry={nodes.Rounding_1.geometry}
                  material={nodes.Rounding_1.material}
                  position={[0, 338.85, -6.75]}>
                  <mesh geometry={nodes.Cap_1.geometry} material={nodes.Cap_1.material} />
                </mesh>
              </mesh>
            </mesh>
          </mesh>
        </group>
        <group position={[-1157.35, 35.54, -228.1]} rotation={[0, -1.57, 0]}>
          <group position={[36.89, -117.64, 0.41]} rotation={[0, -0.01, 0]}>
            <mesh
              geometry={nodes.Piano_1.geometry}
              material={nodes.Piano_1.material}
              position={[-39.95, 184.76, 10.51]}
            />
          </group>
          <mesh
            geometry={nodes.Loft_NURBS_1.geometry}
            material={nodes.Loft_NURBS_1.material}
            position={[228.7, -146.03, -337.13]}
          />
          <mesh
            geometry={nodes.Cylin_1.geometry}
            material={nodes.Cylin_1.material}
            position={[-1.96, 90.08, 0.16]}
            rotation={[0, -0.01, 0]}
          />
          <mesh
            geometry={nodes.Cylinder_4.geometry}
            material={nodes.Cylinder_4.material}
            position={[-1.96, 116.19, 0.16]}
            rotation={[0, -0.01, 0]}
          />
          <mesh
            geometry={nodes.Rotazione__1.geometry}
            material={nodes.Rotazione__1.material}
            position={[-2.24, 163.38, 0.16]}
            rotation={[0, -0.01, 0]}>
            <mesh geometry={nodes.Cylin1_1.geometry} material={nodes.Cylin1_1.material} position={[0, 17.58, -7.11]}>
              <mesh
                geometry={nodes.Extrude_NU_1.geometry}
                material={nodes.Extrude_NU_1.material}
                position={[0, -350.73, 6.05]}>
                <group position={[0, 338.85, -6.75]}>
                  <mesh geometry={nodes.Cap_2_1.geometry} material={nodes.Cap_2_1.material} />
                </group>
                <mesh
                  geometry={nodes.Rounding_1_1.geometry}
                  material={nodes.Rounding_1_1.material}
                  position={[0, 338.85, -6.75]}>
                  <mesh geometry={nodes.Cap_1_1.geometry} material={nodes.Cap_1_1.material} />
                </mesh>
              </mesh>
            </mesh>
          </mesh>
        </group>
        <group position={[896.13, -154.92, 30.97]}>
          <mesh geometry={nodes.Cube15.geometry} material={nodes.Cube15.material} position={[-1255.52, 251.01, 0]} />
          <mesh
            geometry={nodes.Cube2_1.geometry}
            material={nodes.Cube2_1.material}
            position={[-1257.51, 200, -121.81]}
          />
        </group>
        <group position={[896.13, -154.92, 30.97]}>
          <mesh geometry={nodes.Cube2_2.geometry} material={nodes.Cube2_2.material} position={[2975, 251.01, 0]} />
          <mesh geometry={nodes.Cube11.geometry} material={nodes.Cube11.material} position={[2947.27, 190, 0]} />
        </group>
        <group position={[-673.71, 2.92, -183.97]} rotation={[-Math.PI / 2, 0, 0]}>
          <group position={[-32.1, -24.29, -32.28]}>
            <mesh
              geometry={nodes.ChamferBox03.geometry}
              material={nodes.ChamferBox03.material}
              position={[0, -2.1, 3.04]}
              rotation={[-Math.PI, 0, 0]}
              scale={[2.96, 1, 1.05]}
            />
            <mesh
              geometry={nodes.ChamferBox04.geometry}
              material={nodes.ChamferBox04.material}
              position={[0, 3.2, 2.27]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[2.96, 1.05, 1]}
            />
          </group>
          <group position={[31.4, -24.29, -32.28]}>
            <mesh
              geometry={nodes.ChamferBox005.geometry}
              material={nodes.ChamferBox005.material}
              position={[0, -2.1, 3.04]}
              rotation={[-Math.PI, 0, 0]}
              scale={[2.96, 1, 1.05]}
            />
            <mesh
              geometry={nodes.ChamferBox006.geometry}
              material={nodes.ChamferBox006.material}
              position={[0, 3.2, 2.27]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[2.96, 1.05, 1]}
            />
          </group>
          <group position={[-0.14, 26.05, 83.64]}>
            <mesh
              geometry={nodes.Object01.geometry}
              material={nodes.Object01.material}
              position={[0.3, -34.31, -85.53]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.15}
            />
            <mesh
              geometry={nodes.Line01.geometry}
              material={nodes.Line01.material}
              position={[0, 5.26, 16]}
              rotation={[Math.PI / 2, -1.57, 0]}
              scale={1.46}
            />
          </group>
          <mesh
            geometry={nodes.Cylinder28.geometry}
            material={nodes.Cylinder28.material}
            position={[-0.59, 9.93, 0.24]}
            rotation={[-1.88, 0, Math.PI / 2]}
            scale={[0.7, 1.16, 0.84]}
          />
          <mesh
            geometry={nodes.Cylinder33.geometry}
            material={nodes.Cylinder33.material}
            position={[-0.59, 19.76, -4.12]}
            rotation={[1.26, 0, -Math.PI / 2]}
            scale={[0.7, 1.16, 0.84]}
          />
          <mesh
            geometry={nodes.Cylinder32.geometry}
            material={nodes.Cylinder32.material}
            position={[-0.59, 49.48, -11.24]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={[0.7, 1.16, 0.84]}
          />
          <mesh
            geometry={nodes.Cylinder31.geometry}
            material={nodes.Cylinder31.material}
            position={[-0.59, 51.47, -11.24]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={[0.7, 1.16, 0.84]}
          />
          <mesh
            geometry={nodes.Cone01.geometry}
            material={nodes.Cone01.material}
            position={[-0.76, 9.66, 4.64]}
            scale={[1.16, 0.84, 0.7]}
          />
          <mesh
            geometry={nodes.Cone02.geometry}
            material={nodes.Cone02.material}
            position={[-0.76, 9.66, 3.01]}
            rotation={[Math.PI, 0, 0]}
            scale={[1.16, 0.84, 0.7]}
          />
          <mesh
            geometry={nodes.Cylinder34.geometry}
            material={nodes.Cylinder34.material}
            position={[-0.59, 17.83, -3.68]}
            rotation={[1.26, 0, -Math.PI / 2]}
            scale={[0.7, 1.16, 0.84]}
          />
          <mesh
            geometry={nodes.Cylinder29.geometry}
            material={nodes.Cylinder29.material}
            position={[-0.76, 9.67, 17.46]}
            scale={[1.16, 0.84, 0.7]}
          />
          <mesh
            geometry={nodes.Cylinder30.geometry}
            material={nodes.Cylinder30.material}
            position={[-0.76, 9.67, 3.07]}
            scale={[1.16, 0.84, 0.7]}
          />
          <mesh
            geometry={nodes.Cylinder01.geometry}
            material={nodes.Cylinder01.material}
            position={[-0.76, 9.67, 19.01]}
            scale={[1.16, 0.84, 0.7]}
          />
          <mesh
            geometry={nodes.Cylinder36.geometry}
            material={nodes.Cylinder36.material}
            position={[-0.76, 9.67, 33.1]}
            scale={[1.16, 0.84, 0.7]}
          />
          <mesh
            geometry={nodes.Cylinder35.geometry}
            material={nodes.Cylinder35.material}
            position={[-0.76, 9.67, 34.71]}
            scale={[1.16, 0.84, 0.7]}
          />
          <mesh
            geometry={nodes.LAYER1.geometry}
            material={materials.taochi}
            position={[-73.26, -44.51, 36.35]}
            scale={[0.06, 0.04, 0.04]}
          />
          <mesh
            geometry={nodes.Shape7.geometry}
            material={nodes.Shape7.material}
            position={[-26.21, -2832.18, -81.35]}
            scale={[1.16, 1, 0.86]}
          />
          <mesh
            geometry={nodes.Shape25.geometry}
            material={nodes.Shape25.material}
            position={[-28, -16.21, -2674.82]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[1.16, 0.89, 1]}
          />
          <mesh
            geometry={nodes.Shape20.geometry}
            material={nodes.Shape20.material}
            position={[-26.21, -2832.18, -118.65]}
            scale={[1.16, 1, 1.05]}
          />
          <mesh
            geometry={nodes.Shape4.geometry}
            material={nodes.Shape4.material}
            position={[-26.21, -2832.18, -118.65]}
            scale={[1.16, 1, 1.05]}
          />
          <mesh
            geometry={nodes.Shape18.geometry}
            material={nodes.Shape18.material}
            position={[-26.21, -2832.18, -118.65]}
            scale={[1.16, 1, 1.05]}
          />
          <mesh
            geometry={nodes.Shape57.geometry}
            material={nodes.Shape57.material}
            position={[88.72, -2832.18, 37.89]}
            scale={[0.5, 1, 1.05]}
          />
          <mesh
            geometry={nodes.Shape6.geometry}
            material={nodes.Shape6.material}
            position={[-26.21, -2832.18, -82.51]}
            scale={[1.16, 1, 0.86]}
          />
          <mesh
            geometry={nodes.Shape9.geometry}
            material={nodes.Shape9.material}
            position={[-26.21, -2832.18, -118.65]}
            scale={[1.16, 1, 1.05]}
          />
          <mesh
            geometry={nodes.Shape56.geometry}
            material={nodes.Shape56.material}
            position={[-52.85, -2832.18, 37.89]}
            scale={[0.5, 1, 1.05]}
          />
          <mesh
            geometry={nodes.Shape19.geometry}
            material={nodes.Shape19.material}
            position={[-26.21, -2832.18, -118.65]}
            scale={[1.16, 1, 1.05]}
          />
          <mesh
            geometry={nodes.Shape17.geometry}
            material={nodes.Shape17.material}
            position={[-26.21, -2832.18, -118.65]}
            scale={[1.16, 1, 1.05]}
          />
          <mesh
            geometry={nodes.Sphere01.geometry}
            material={nodes.Sphere01.material}
            position={[-0.07, 20.96, 59.35]}
            rotation={[Math.PI / 2, -1.57, 0]}
            scale={[1.87, 6.25, 6.25]}
          />
        </group>
        <group position={[-548.53, 42.53, 188.64]} rotation={[-Math.PI / 2, 0, -3.13]} scale={2.54}>
          <mesh
            geometry={nodes.Bowl.geometry}
            material={nodes.Bowl.material}
            position={[0.07, 2.65, -58.66]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[4.51, 2.21, 3.24]}
          />
          <mesh
            geometry={nodes.Water_Tube.geometry}
            material={nodes.Water_Tube.material}
            position={[-8.74, 37.25, -22.94]}
            rotation={[Math.PI / 2, -1.57, 0]}
          />
          <mesh
            geometry={nodes.Seat.geometry}
            material={nodes.Seat.material}
            position={[-0.3, 126.96, -57.4]}
            rotation={[0.01, 0, Math.PI / 2]}
            scale={[4.51, 2.21, 3.24]}
          />
          <mesh
            geometry={nodes.Flush_Button.geometry}
            material={nodes.Flush_Button.material}
            position={[-0.43, 31.3, 32.24]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[1.93, 2.66, 5.02]}
          />
          <mesh
            geometry={nodes.Tank_cover.geometry}
            material={nodes.Tank_cover.material}
            position={[-0.43, 31.3, 32.24]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[1.93, 2.66, 5.02]}
          />
          <mesh
            geometry={nodes.Lid.geometry}
            material={nodes.Lid.material}
            position={[-0.35, -85.18, -109.66]}
            rotation={[-1.62, 0, Math.PI / 2]}
            scale={[4.56, 2.23, 5.24]}
          />
          <mesh
            geometry={nodes.Hinges.geometry}
            material={nodes.Hinges.material}
            position={[0.07, 2.65, -58.66]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[4.51, 2.21, 3.24]}
          />
          <mesh
            geometry={nodes.Tank.geometry}
            material={nodes.Tank.material}
            position={[-0.21, -4.59, -1.73]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[1.88, 2.64, 2.67]}
          />
          <group position={[0.07, 2.65, -58.62]} rotation={[0, 0, Math.PI / 2]} scale={[4.51, 2.21, 3.24]}>
            <mesh
              geometry={nodes['Drainage_Tube-Plastic_Grey'].geometry}
              material={nodes['Drainage_Tube-Plastic_Grey'].material}
            />
            <mesh
              geometry={nodes['Drainage_Tube-Ceramic'].geometry}
              material={nodes['Drainage_Tube-Ceramic'].material}
            />
          </group>
          <mesh
            geometry={nodes.Bolt_Caps.geometry}
            material={nodes.Bolt_Caps.material}
            position={[0.07, 2.65, -58.62]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[4.51, 2.21, 3.24]}
          />
          <mesh
            geometry={nodes.Water.geometry}
            material={nodes.Water.material}
            position={[0.06, -4.89, -36.11]}
            scale={[0.67, 0.67, 0.67]}
          />
          <mesh
            geometry={nodes.Valve.geometry}
            material={nodes.Valve.material}
            position={[-27.13, -55.85, -38.28]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={1.43}
          />
        </group>
        <group position={[-880.33, 42.53, 188.64]} rotation={[-Math.PI / 2, 0, -3.13]} scale={2.54}>
          <mesh
            geometry={nodes.Bowl_1.geometry}
            material={nodes.Bowl_1.material}
            position={[0.07, 2.65, -58.66]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[4.51, 2.21, 3.24]}
          />
          <mesh
            geometry={nodes.Water_Tube_1.geometry}
            material={nodes.Water_Tube_1.material}
            position={[-8.74, 37.25, -22.94]}
            rotation={[Math.PI / 2, -1.57, 0]}
          />
          <mesh
            geometry={nodes.Seat_1.geometry}
            material={nodes.Seat_1.material}
            position={[-0.3, 126.96, -57.4]}
            rotation={[0.01, 0, Math.PI / 2]}
            scale={[4.51, 2.21, 3.24]}
          />
          <mesh
            geometry={nodes.Flush_Button_1.geometry}
            material={nodes.Flush_Button_1.material}
            position={[-0.43, 31.3, 32.24]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[1.93, 2.66, 5.02]}
          />
          <mesh
            geometry={nodes.Tank_cover_1.geometry}
            material={nodes.Tank_cover_1.material}
            position={[-0.43, 31.3, 32.24]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[1.93, 2.66, 5.02]}
          />
          <mesh
            geometry={nodes.Lid_1.geometry}
            material={nodes.Lid_1.material}
            position={[-0.35, -85.18, -109.66]}
            rotation={[-1.62, 0, Math.PI / 2]}
            scale={[4.56, 2.23, 5.24]}
          />
          <mesh
            geometry={nodes.Hinges_1.geometry}
            material={nodes.Hinges_1.material}
            position={[0.07, 2.65, -58.66]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[4.51, 2.21, 3.24]}
          />
          <mesh
            geometry={nodes.Tank_1.geometry}
            material={nodes.Tank_1.material}
            position={[-0.21, -4.59, -1.73]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[1.88, 2.64, 2.67]}
          />
          <group position={[0.07, 2.65, -58.62]} rotation={[0, 0, Math.PI / 2]} scale={[4.51, 2.21, 3.24]}>
            <mesh
              geometry={nodes['Drainage_Tube-Plastic_Grey_1'].geometry}
              material={nodes['Drainage_Tube-Plastic_Grey_1'].material}
            />
            <mesh
              geometry={nodes['Drainage_Tube-Ceramic_1'].geometry}
              material={nodes['Drainage_Tube-Ceramic_1'].material}
            />
          </group>
          <mesh
            geometry={nodes.Bolt_Caps_1.geometry}
            material={nodes.Bolt_Caps_1.material}
            position={[0.07, 2.65, -58.62]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[4.51, 2.21, 3.24]}
          />
          <mesh
            geometry={nodes.Water_1.geometry}
            material={nodes.Water_1.material}
            position={[0.06, -4.89, -36.11]}
            scale={[0.67, 0.67, 0.67]}
          />
          <mesh
            geometry={nodes.Valve_1.geometry}
            material={nodes.Valve_1.material}
            position={[-27.13, -55.85, -38.28]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={1.43}
          />
        </group>
        <group position={[-1127.93, 42.53, 169.44]} rotation={[-Math.PI / 2, 0, -1.56]} scale={2.54}>
          <mesh
            geometry={nodes.Bowl_2.geometry}
            material={nodes.Bowl_2.material}
            position={[0.07, 2.65, -58.66]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[4.51, 2.21, 3.24]}
          />
          <mesh
            geometry={nodes.Water_Tube_2.geometry}
            material={nodes.Water_Tube_2.material}
            position={[-8.74, 37.25, -22.94]}
            rotation={[Math.PI / 2, -1.57, 0]}
          />
          <mesh
            geometry={nodes.Seat_2.geometry}
            material={nodes.Seat_2.material}
            position={[-0.3, 126.96, -57.4]}
            rotation={[0.01, 0, Math.PI / 2]}
            scale={[4.51, 2.21, 3.24]}
          />
          <mesh
            geometry={nodes.Flush_Button_2.geometry}
            material={nodes.Flush_Button_2.material}
            position={[-0.43, 31.3, 32.24]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[1.93, 2.66, 5.02]}
          />
          <mesh
            geometry={nodes.Tank_cover_2.geometry}
            material={nodes.Tank_cover_2.material}
            position={[-0.43, 31.3, 32.24]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[1.93, 2.66, 5.02]}
          />
          <mesh
            geometry={nodes.Lid_2.geometry}
            material={nodes.Lid_2.material}
            position={[-0.35, -85.18, -109.66]}
            rotation={[-1.62, 0, Math.PI / 2]}
            scale={[4.56, 2.23, 5.24]}
          />
          <mesh
            geometry={nodes.Hinges_2.geometry}
            material={nodes.Hinges_2.material}
            position={[0.07, 2.65, -58.66]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[4.51, 2.21, 3.24]}
          />
          <mesh
            geometry={nodes.Tank_2.geometry}
            material={nodes.Tank_2.material}
            position={[-0.21, -4.59, -1.73]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[1.88, 2.64, 2.67]}
          />
          <group position={[0.07, 2.65, -58.62]} rotation={[0, 0, Math.PI / 2]} scale={[4.51, 2.21, 3.24]}>
            <mesh
              geometry={nodes['Drainage_Tube-Plastic_Grey_2'].geometry}
              material={nodes['Drainage_Tube-Plastic_Grey_2'].material}
            />
            <mesh
              geometry={nodes['Drainage_Tube-Ceramic_2'].geometry}
              material={nodes['Drainage_Tube-Ceramic_2'].material}
            />
          </group>
          <mesh
            geometry={nodes.Bolt_Caps_2.geometry}
            material={nodes.Bolt_Caps_2.material}
            position={[0.07, 2.65, -58.62]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[4.51, 2.21, 3.24]}
          />
          <mesh
            geometry={nodes.Water_2.geometry}
            material={nodes.Water_2.material}
            position={[0.06, -4.89, -36.11]}
            scale={[0.67, 0.67, 0.67]}
          />
          <mesh
            geometry={nodes.Valve_2.geometry}
            material={nodes.Valve_2.material}
            position={[-27.13, -55.85, -38.28]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={1.43}
          />
        </group>
        <mesh
          geometry={nodes.Cube18.geometry}
          material={nodes.Cube18.material}
          position={[-1202.5, 96.08, 10.83]}
          rotation={[0, 1.57, 0]}
        />
        <mesh geometry={nodes.Cube17.geometry} material={nodes.Cube17.material} position={[-1004.4, 96.08, 168.26]} />
        <mesh geometry={nodes.Cube16.geometry} material={nodes.Cube16.material} position={[-726.11, 96.08, 168.26]} />
        <mesh geometry={nodes.Cube14.geometry} material={nodes.Cube14.material} position={[-2078.87, 96.08, 30.97]} />
        <mesh geometry={nodes.Cube12.geometry} material={nodes.Cube12.material} position={[-1721.14, -129.92, 30.97]} />
        <mesh geometry={nodes.Cube10.geometry} material={nodes.Cube10.material} position={[-553.87, -129.92, 30.97]} />
        <mesh geometry={nodes.Cube9.geometry} material={nodes.Cube9.material} position={[896.13, -139.92, 30.97]} />
        <mesh geometry={nodes.Cube8.geometry} material={nodes.Cube8.material} position={[2496.13, 96.08, 930.97]} />
        <mesh geometry={nodes.Cube7.geometry} material={nodes.Cube7.material} position={[2496.13, 96.08, -869.03]} />
        <mesh
          geometry={nodes.Cube6.geometry}
          material={nodes.Cube6.material}
          position={[896.13, 96.08, 330.97]}
          rotation={[0, 1.57, 0]}
        />
        <mesh
          geometry={nodes.Cube4.geometry}
          material={nodes.Cube4.material}
          position={[896.13, 96.08, 1505.97]}
          rotation={[0, 1.57, 0]}
        />
        <mesh
          geometry={nodes.Cube3.geometry}
          material={nodes.Cube3.material}
          position={[896.13, 96.08, -1444.03]}
          rotation={[0, 1.57, 0]}
        />
        <mesh geometry={nodes.Cube1.geometry} material={nodes.Cube1.material} position={[-2078.87, 96.08, 30.97]} />
        <mesh geometry={nodes.Cube.geometry} material={nodes.Cube.material} position={[896.13, -154.92, 30.97]} />
      </group>
    </group>
  )
}

useGLTF.preload('/zaalRealOne.gltf')
