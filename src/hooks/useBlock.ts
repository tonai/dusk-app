import { Euler, Vector3 } from "three";
import { useMemo } from "react";

import { Vector } from "../types";

export function useBlock(pos?: Vector3 | Vector, rot?: Euler | Vector) {
  const position = useMemo(
    () =>
      pos?.x !== undefined && pos?.y !== undefined && pos?.z !== undefined
        ? new Vector3(pos.x, pos.y, pos.z)
        : undefined,
    [pos?.x, pos?.y, pos?.z],
  );
  const rotation = useMemo(
    () =>
      rot?.x !== undefined && rot?.y !== undefined && rot?.z !== undefined
        ? new Euler(rot.x, rot.y, rot.z)
        : undefined,
    [rot?.x, rot?.y, rot?.z],
  );
  return { position, rotation };
}