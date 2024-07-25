import { PrimitiveProps } from "@react-three/fiber";
import { IModel } from "../../helpers/collection";

export interface IModelProps extends Omit<PrimitiveProps, 'object'> {
  center?: boolean;
  model?: IModel;
  x?: number;
  y?: number;
  z?: number;
}

export default function GLTFModel(props: IModelProps) {
  const { center, model, x = 0, y = 0, z = 0, ...primitiveProps } = props;

  if (!model || !model.gltf || !model.gltf.scene) {
    return null;
  }

  const position = [x, y, z];
  if (center) {
    position[0] += Math.ceil(model.vector.x) / 2;
    position[2] += Math.ceil(model.vector.z) / 2;
  }

  return (
    <primitive
      {...primitiveProps}
      object={model.gltf.scene.clone()}
      position={position}
    />
  );
}
