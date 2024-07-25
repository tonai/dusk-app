import { Euler, Vector3 } from "three";

import { IJoint } from "../../types";
import { useGameContext } from "../../contexts/game";

interface IJointsProps {
  joints: IJoint[];
  position?: Vector3;
  rotation?: Euler;
}

export default function Joints(props: IJointsProps) {
  const { joints, position, rotation } = props;
  const { onJoint, selectedPart } = useGameContext();

  return (
    <>
      {selectedPart &&
        joints.map((joint, i) => (
          <mesh
            key={i}
            position={joint.pos}
            onClick={() => onJoint(joint, selectedPart, position, rotation)}
          >
            <sphereGeometry args={[0.1]} />
            <meshStandardMaterial color="lightgreen" />
          </mesh>
        ))}
    </>
  );
}
