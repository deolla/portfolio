

import { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { AnimationMixer } from 'three';
import { useFrame } from '@react-three/fiber';

const City = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('models/mafer_city.glb')
  
  const mixer = useRef();

  useEffect(() => {
    if (group.current && animations.length > 0) {
      mixer.current = new AnimationMixer(group.current);

      const action = mixer.current.clipAction(animations[0]);
      action.play();
    } else {
      console.error('No animations found or group is not ready.');
    }

    return () => {
      if (mixer.current) {
        mixer.current.stopAllAction();
      }
    };
  }, [animations]);

  useFrame((state, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

  

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="4d883a084ad14d53bf3cc44f237f8a86fbx"
            position={[0, -2, -5.8]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.000179, 0.000169, 0.000119]}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Blimp"
                  position={[8184.433, 31244.307, -26948.424]}
                  rotation={[0, 1.484, 0]}>
                  <mesh
                    name="Blimp_Window_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Blimp_Window_0.geometry}
                    material={materials.Window}
                  />
                  <mesh
                    name="Blimp_Blue_building_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Blimp_Blue_building_0.geometry}
                    material={materials.Blue_building}
                  />
                  <mesh
                    name="Blimp_Pink_buildings_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Blimp_Pink_buildings_0.geometry}
                    material={materials.Pink_buildings}
                  />
                </group>
                <group
                  name="Boat"
                  position={[-12231.135, 3183.008, 27908.572]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <mesh
                    name="Boat_White_material2_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Boat_White_material2_0.geometry}
                    material={materials.White_material2}
                  />
                  <mesh
                    name="Boat_Blue_building_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Boat_Blue_building_0.geometry}
                    material={materials.Blue_building}
                  />
                  <mesh
                    name="Boat_Pink_buildings_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Boat_Pink_buildings_0.geometry}
                    material={materials.Pink_buildings}
                  />
                  <mesh
                    name="Boat_Grey_material2_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Boat_Grey_material2_0.geometry}
                    material={materials.Grey_material2}
                  />
                  <group name="Boat_box" position={[-2.949, 2057.867, 1714.856]}>
                    <mesh
                      name="Boat_box__0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Boat_box__0.geometry}
                      material={materials.Boat_box__0}
                    />
                  </group>
                  <group name="Boat_box2" position={[-2.949, 4397.57, 1714.856]}>
                    <mesh
                      name="Boat_box2_White_material2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Boat_box2_White_material2_0.geometry}
                      material={materials.White_material2}
                    />
                  </group>
                </group>
                <group
                  name="Buildings"
                  position={[8731.206, 7669.078, 213.53]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="Object_18" position={[-4635.323, 4603.437, -2118.757]}>
                    <mesh
                      name="Buildings_Material_#552_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Buildings_Material_#552_0'].geometry}
                      material={materials.Material_552}
                    />
                    <mesh
                      name="Buildings_Cyan_building_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Buildings_Cyan_building_0.geometry}
                      material={materials.Cyan_building}
                    />
                    <mesh
                      name="Buildings_Window_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Buildings_Window_0.geometry}
                      material={materials.Window}
                    />
                    <mesh
                      name="Buildings_Blue_building2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Buildings_Blue_building2_0.geometry}
                      material={materials.Blue_building2}
                    />
                    <mesh
                      name="Buildings_Blue_building_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Buildings_Blue_building_0.geometry}
                      material={materials.Blue_building}
                    />
                    <mesh
                      name="Buildings_Pink_material_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Buildings_Pink_material_0.geometry}
                      material={materials.Pink_material}
                    />
                    <mesh
                      name="Buildings_Blue_building3_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Buildings_Blue_building3_0.geometry}
                      material={materials.Blue_building3}
                    />
                    <mesh
                      name="Buildings_White_material2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Buildings_White_material2_0.geometry}
                      material={materials.White_material2}
                    />
                    <mesh
                      name="Buildings_Highway_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Buildings_Highway_0.geometry}
                      material={materials.Highway}
                    />
                    <mesh
                      name="Buildings_Pink_buildings_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Buildings_Pink_buildings_0.geometry}
                      material={materials.Pink_buildings}
                    />
                    <mesh
                      name="Buildings_Grey_material2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Buildings_Grey_material2_0.geometry}
                      material={materials.Grey_material2}
                    />
                    <mesh
                      name="Buildings_Material_#553_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Buildings_Material_#553_0'].geometry}
                      material={materials.Material_553}
                    />
                    <mesh
                      name="Buildings_Tree_color3_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Buildings_Tree_color3_0.geometry}
                      material={materials.Tree_color3}
                    />
                    <mesh
                      name="Buildings_Roof_pink_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Buildings_Roof_pink_0.geometry}
                      material={materials.Roof_pink}
                    />
                    <mesh
                      name="Buildings_White_material_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Buildings_White_material_0.geometry}
                      material={materials.White_material}
                    />
                    <mesh
                      name="Buildings_Material_#3_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Buildings_Material_#3_0'].geometry}
                      material={materials.Material_3}
                    />
                    <mesh
                      name="Buildings_Sand_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Buildings_Sand_0.geometry}
                      material={materials.Sand}
                    />
                    <mesh
                      name="Buildings_Grey_material1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Buildings_Grey_material1_0.geometry}
                      material={materials.Grey_material1}
                    />
                    <mesh
                      name="Buildings_Material_#1192_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Buildings_Material_#1192_0'].geometry}
                      material={materials.Material_1192}
                    />
                  </group>
                </group>
                <group
                  name="Car_Blue"
                  position={[10878.602, 5249.237, 3013.11]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <group
                    name="Object_39"
                    position={[-38137.965, -4707.782, -1733.075]}
                    rotation={[Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Car_Blue_Wheels_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Car_Blue_Wheels_0.geometry}
                      material={materials.Wheels}
                    />
                    <mesh
                      name="Car_Blue_Window_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Car_Blue_Window_0.geometry}
                      material={materials.Window}
                    />
                    <mesh
                      name="Car_Blue_Grey_material2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Car_Blue_Grey_material2_0.geometry}
                      material={materials.Grey_material2}
                    />
                    <mesh
                      name="Car_Blue_Car_yellow_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Car_Blue_Car_yellow_0.geometry}
                      material={materials.Car_yellow}
                    />
                    <mesh
                      name="Car_Blue_White_material2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Car_Blue_White_material2_0.geometry}
                      material={materials.White_material2}
                    />
                  </group>
                </group>
                <group
                  name="Car_Green"
                  position={[37275.281, 5251.068, -3251.509]}
                  rotation={[-Math.PI / 2, 0, 0.004]}>
                  <group
                    name="Object_46"
                    position={[7448.795, -38155.301, -1731.908]}
                    rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                    <mesh
                      name="Car_Green_Wheels_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Car_Green_Wheels_0.geometry}
                      material={materials.Wheels}
                    />
                    <mesh
                      name="Car_Green_Tree_color3_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Car_Green_Tree_color3_0.geometry}
                      material={materials.Tree_color3}
                    />
                    <mesh
                      name="Car_Green_Grey_material2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Car_Green_Grey_material2_0.geometry}
                      material={materials.Grey_material2}
                    />
                    <mesh
                      name="Car_Green_Car_yellow_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Car_Green_Car_yellow_0.geometry}
                      material={materials.Car_yellow}
                    />
                    <mesh
                      name="Car_Green_White_material2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Car_Green_White_material2_0.geometry}
                      material={materials.White_material2}
                    />
                  </group>
                </group>
                <group
                  name="Car_Yellow"
                  position={[982.417, 5203.481, -6254.487]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <group
                    name="Object_53"
                    position={[-38156.66, -2120.14, -1682.673]}
                    rotation={[Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Car_Yellow_Wheels_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Car_Yellow_Wheels_0.geometry}
                      material={materials.Wheels}
                    />
                    <mesh
                      name="Car_Yellow_Grey_material2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Car_Yellow_Grey_material2_0.geometry}
                      material={materials.Grey_material2}
                    />
                    <mesh
                      name="Car_Yellow_Car_yellow_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Car_Yellow_Car_yellow_0.geometry}
                      material={materials.Car_yellow}
                    />
                    <mesh
                      name="Car_Yellow_White_material2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Car_Yellow_White_material2_0.geometry}
                      material={materials.White_material2}
                    />
                  </group>
                </group>
                <group
                  name="Cars"
                  position={[-19715.092, 5251.605, -21219.07]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <group
                    name="Object_59"
                    position={[38194.305, -579.422, -1729.805]}
                    rotation={[-Math.PI / 2, 0, -Math.PI]}>
                    <mesh
                      name="Cars_Wheels_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cars_Wheels_0.geometry}
                      material={materials.Wheels}
                    />
                    <mesh
                      name="Cars_Grey_material2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cars_Grey_material2_0.geometry}
                      material={materials.Grey_material2}
                    />
                    <mesh
                      name="Cars_Car_red_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cars_Car_red_0.geometry}
                      material={materials.Car_red}
                    />
                    <mesh
                      name="Cars_White_material2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cars_White_material2_0.geometry}
                      material={materials.White_material2}
                    />
                    <mesh
                      name="Cars_Window_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cars_Window_0.geometry}
                      material={materials.Window}
                    />
                    <mesh
                      name="Cars_Car_yellow_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cars_Car_yellow_0.geometry}
                      material={materials.Car_yellow}
                    />
                    <mesh
                      name="Cars_Tree_color3_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cars_Tree_color3_0.geometry}
                      material={materials.Tree_color3}
                    />
                    <mesh
                      name="Cars_Blue_building3_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cars_Blue_building3_0.geometry}
                      material={materials.Blue_building3}
                    />
                  </group>
                </group>
                <group
                  name="Floor"
                  position={[15628.68, 4790.77, 6184.267]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="Object_69" position={[-27298.215, 1255.007, 0]}>
                    <mesh
                      name="Floor_Highway_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Floor_Highway_0.geometry}
                      material={materials.Highway}
                    />
                    <mesh
                      name="Floor_White_material2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Floor_White_material2_0.geometry}
                      material={materials.White_material2}
                    />
                    <mesh
                      name="Floor_Grass_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Floor_Grass_0.geometry}
                      material={materials.Grass}
                    />
                    <mesh
                      name="Floor_Grey_material2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Floor_Grey_material2_0.geometry}
                      material={materials.Grey_material2}
                    />
                  </group>
                </group>
                <group
                  name="Hot_air_balloon"
                  position={[-7176.889, 11696.895, -23828.648]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <mesh
                    name="Hot_air_balloon_Orange_Basket_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Hot_air_balloon_Orange_Basket_0.geometry}
                    material={materials.Orange_Basket}
                  />
                  <mesh
                    name="Hot_air_balloon_Pink_material_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Hot_air_balloon_Pink_material_0.geometry}
                    material={materials.Pink_material}
                  />
                  <mesh
                    name="Hot_air_balloon_White_material_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Hot_air_balloon_White_material_0.geometry}
                    material={materials.White_material}
                  />
                </group>
                <group
                  name="Other"
                  position={[-5787.896, 7418.403, 380.531]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="Object_79" rotation={[Math.PI / 2, -Math.PI / 6, 0]}>
                    <mesh
                      name="Other_White_material2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Other_White_material2_0.geometry}
                      material={materials.White_material2}
                    />
                    <mesh
                      name="Other_Material_#1419_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Other_Material_#1419_0'].geometry}
                      material={materials.Material_1419}
                    />
                    <mesh
                      name="Other_Material_#1417_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Other_Material_#1417_0'].geometry}
                      material={materials.Material_1417}
                    />
                    <mesh
                      name="Other_Blue_building_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Other_Blue_building_0.geometry}
                      material={materials.Blue_building}
                    />
                    <mesh
                      name="Other_Window_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Other_Window_0.geometry}
                      material={materials.Window}
                    />
                    <mesh
                      name="Other_Grey_material2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Other_Grey_material2_0.geometry}
                      material={materials.Grey_material2}
                    />
                    <mesh
                      name="Other_Grey_material1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Other_Grey_material1_0.geometry}
                      material={materials.Grey_material1}
                    />
                    <mesh
                      name="Other_Pink_buildings_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Other_Pink_buildings_0.geometry}
                      material={materials.Pink_buildings}
                    />
                    <mesh
                      name="Other_Cyan_building_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Other_Cyan_building_0.geometry}
                      material={materials.Cyan_building}
                    />
                    <mesh
                      name="Other_Sand_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Other_Sand_0.geometry}
                      material={materials.Sand}
                    />
                    <mesh
                      name="Other_Pink_material_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Other_Pink_material_0.geometry}
                      material={materials.Pink_material}
                    />
                    <mesh
                      name="Other_Orange_Basket_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Other_Orange_Basket_0.geometry}
                      material={materials.Orange_Basket}
                    />
                  </group>
                </group>
                <group
                  name="Water"
                  position={[-2265.106, 368.08, 715.572]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <mesh
                    name="Water_Water_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Water_Water_0.geometry}
                    material={materials.Water}
                  />
                </group>
                <group
                  name="Wheel_base"
                  position={[28070.945, 11420.535, 10677.096]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="Object_95" rotation={[Math.PI / 2, 0, 0]} scale={1.194}>
                    <mesh
                      name="Wheel_base_Blue_building_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Wheel_base_Blue_building_0.geometry}
                      material={materials.Blue_building}
                    />
                  </group>
                </group>
                <group
                  name="Wheel_of_fortune"
                  position={[28070.945, 10103.538, 10031.881]}
                  rotation={[-Math.PI / 2, -0.385, 0]}>
                  <group
                    name="Object_98"
                    position={[494.878, -645.215, 1220.478]}
                    rotation={[Math.PI / 2, 0, -0.385]}
                    scale={1.194}>
                    <mesh
                      name="Wheel_of_fortune_Grey_material2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Wheel_of_fortune_Grey_material2_0.geometry}
                      material={materials.Grey_material2}
                    />
                    <mesh
                      name="Wheel_of_fortune_Window_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Wheel_of_fortune_Window_0.geometry}
                      material={materials.Window}
                    />
                  </group>
                </group>
                <group
                  name="Grass"
                  position={[15628.68, 4790.77, 6184.267]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="Object_102" position={[-27298.215, 1255.007, 0]}>
                    <mesh
                      name="Grass_Grass_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Grass_Grass_0.geometry}
                      material={materials.Grass}
                    />
                    <mesh
                      name="Grass_Sand_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Grass_Sand_0.geometry}
                      material={materials.Sand}
                    />
                  </group>
                </group>
                <group
                  name="Trees"
                  position={[30694.031, 8240.211, 20383.404]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <group
                    name="Object_106"
                    position={[-34936.109, -5218.209, 2246.468]}
                    scale={[1, 1, 0.606]}>
                    <mesh
                      name="Trees_Tree_color1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Trees_Tree_color1_0.geometry}
                      material={materials.Tree_color1}
                    />
                    <mesh
                      name="Trees_Wood_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Trees_Wood_0.geometry}
                      material={materials.Wood}
                    />
                    <mesh
                      name="Trees_Tree_color3_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Trees_Tree_color3_0.geometry}
                      material={materials.Tree_color3}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models/mafer_city.glb')
export default City;