import { Suspense, memo } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";

import { blocks } from "../../blocks/index.tsx";
import Block from "../../blocks/Block/index.tsx";
import { ILevel } from "../../types/index.ts";
import { IModel } from "../../helpers/collection.ts";

import FreeBall from "../Ball/FreeBall/index.tsx";
import { OrbitControls } from "@react-three/drei";
import { useGame } from "../../store/game.ts";
import { ballModel } from "../../constants/blocks.ts";

interface ISceneProps {
  level: ILevel;
  models: Record<string, IModel>;
}

function Scene(props: ISceneProps) {
  const { level, models } = props;
  const ghosts = useGame((state) => state.ghosts);

  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <directionalLight args={[0xffffff, Math.PI]} position={[10, 10, 5]} />
      <OrbitControls />
      <Suspense>
        <Physics debug={false} colliders={false}>
          {level.map(({ id, position, rotation }, i) => {
            const { joints } = blocks[id];
            const Component = blocks[id].Component || Block;
            return (
              <Component
                key={i}
                id={id}
                joints={joints}
                models={models}
                position={position}
                rotation={rotation}
              />
            );
          })}
          {ghosts &&
            Object.values(ghosts).map((ghost, i) => (
              <FreeBall key={i} model={models[ballModel]} ghost={ghost} />
            ))}
        </Physics>
      </Suspense>
    </Canvas>
  );
}

const MemoScene = memo(Scene);
export default MemoScene;
