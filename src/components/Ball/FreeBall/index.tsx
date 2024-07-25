import { RigidBody } from "@react-three/rapier";
import { Vector3 } from "three";

import { IModel } from "../../../helpers/collection";
import GLTFModel, { IModelProps } from "../../GLTFModel";
import { memo, useRef } from "react";
import { IGhost } from "../../../types";

interface IFreeBallProps extends IModelProps {
  model: IModel;
  ghost: IGhost;
}

function FreeBall(props: IFreeBallProps) {
  const { model, ghost,  ...modelProps } = props;
  const startPosition = useRef(
    new Vector3(
      ghost.position.x,
      ghost.position.y,
      ghost.position.z,
    ),
  );

  return (
    <RigidBody
      colliders="ball"
      position={startPosition.current}
      restitution={0.5}
      scale={0.3}
    >
      <GLTFModel {...modelProps} model={model} />
    </RigidBody>
  );
}

const MemoFreeBall = memo(FreeBall);
export default MemoFreeBall;
