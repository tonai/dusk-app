import { CuboidCollider, RigidBody } from "@react-three/rapier";

import { IBlockProps } from "../../types";
import GLTFModel from "../../components/GLTFModel";
import Joints from "../Joints";
import { useBlock } from "../../hooks/useBlock";
import { memo } from "react";

function End(props: IBlockProps) {
  const { id, joints, models, position: pos, rotation: rot, ...groupProps } = props;
  const { position, rotation } = useBlock(pos, rot);
  
  return (
    <RigidBody
      {...groupProps}
      colliders="trimesh"
      // friction={10}
      // frictionCombineRule={CoefficientCombineRule.Max}
      position={position}
      rotation={rotation}
      type="fixed"
    >
      <GLTFModel model={models["end-rounded"]} />
      <GLTFModel model={models["banner-high"]} y={0.2} z={-0.4} />
      <CuboidCollider
        args={[0.4, 0.4, 0.4]}
        sensor
        // solverGroups={interactionGroups(1, [0])}
        position={[0, 0.6, 0]}
        // onCollisionEnter={(payload) => console.log(payload)}
        onIntersectionEnter={(payload) => console.log("Goal!", payload)}
      />
      <Joints joints={joints} position={position} rotation={rotation} />
    </RigidBody>
  );
}

const MemoEnd = memo(End);
export default MemoEnd;
