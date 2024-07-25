import { ILevel, ISerializedLevel } from "../types";

export function serializeLevel(level: ILevel): ISerializedLevel {
  return level.map((block) => ({
    ...block,
    position: block.position && {
      x: block.position.x,
      y: block.position.y,
      z: block.position.z,
    },
    rotation: block.rotation && {
      x: block.rotation.x,
      y: block.rotation.y,
      z: block.rotation.z,
    },
  }));
}
