import { RigidBody } from "@react-three/rapier";

import GLTFModel from "../../components/GLTFModel";
import { IBlockProps } from "../../types";
import Joints from "../Joints";
import { useBlock } from "../../hooks/useBlock";
import { memo } from "react";

function Start(props: IBlockProps) {
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
      <GLTFModel model={models["end-rounded"]} rotation={[0, -Math.PI, 0]} />
      {/* <GLTFModel model={models['ramp-long-b']} rotation={[0, -Math.PI, 0]} z={1} y={-0.5} /> */}
      <Joints joints={joints} position={position} rotation={rotation}/>
    </RigidBody>
  );
}

const MemoStart = memo(Start);
export default MemoStart;
