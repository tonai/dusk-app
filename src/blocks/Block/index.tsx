import { RigidBody } from "@react-three/rapier";

import GLTFModel from "../../components/GLTFModel";
import { IBlockProps } from "../../types";
import Joints from "../Joints";
import { useBlock } from "../../hooks/useBlock";
import { memo } from "react";

function Block(props: IBlockProps) {
  const { id, joints, models, position: pos, rotation: rot, ...groupProps } = props;
  const { position, rotation } = useBlock(pos, rot);
  
  return (
    <RigidBody
      {...groupProps}
      colliders="trimesh"
      position={position}
      rotation={rotation}
      type="fixed"
    >
      <GLTFModel model={models[id]} />
      <Joints joints={joints} position={position} rotation={rotation} />
    </RigidBody>
  );
}

const MemoBlock = memo(Block);
export default MemoBlock;
