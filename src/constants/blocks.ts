import { Euler, Vector3 } from "three";
import { ILevel } from "../types";

export const partMenu: Record<string, string[]> = {
  Bends: ["bend", "bend-medium", "bend-large"],
  Bumps: ["bump-a", "bump-b", "bump-c", "bump-d"],
  Curves: [
    "corner",
    "curve",
    "curve-large",
    "s-curve-left",
    "s-curve-right",
    "s-curve-left-large",
    "s-curve-right-large",
    "wave-a",
    "wave-b",
    "wave-c",
  ],
  Helixes: [
    "helix-quarter-left",
    "helix-quarter-right",
    "helix-large-quarter-left",
    "helix-large-quarter-right",
    "helix-half-left",
    "helix-half-right",
    "helix-large-half-left",
    "helix-large-half-right",
    "helix-left",
    "helix-right",
    "helix-large-left",
    "helix-large-right",
  ],
  Ramps: [
    "ramp-long-a",
    "ramp-long-b",
    "ramp-long-c",
    "ramp-long-d",
    "ramp-end-a",
    "ramp-end-b",
    "ramp-end-c",
    "ramp-end-d",
    "slant-a",
    "slant-b",
    "slant-c",
    "slant-d",
    // "slant-long-a",
    // "slant-long-b",
    // "slant-long-c",
    // "slant-long-d",
    "ramp-start-a",
    "ramp-start-b",
    "ramp-start-c",
    "ramp-start-d",
  ],
  Splits: [
    "cross",
    "split-double",
    "split-double-sides",
    "split-large-left",
    "split-large-right",
    "split-left",
    "split-right",
  ],
  Straights: ["straight", "straight-hole", "end"],
};
export const ballModel = "marble-low";

export const defaultParts: Record<string, number> = Object.fromEntries(
  Object.values(partMenu)
    .flat()
    .map((id) => [id, Infinity]),
);

export const defaultLevel: ILevel = [
  { id: "start" },
  {
    id: "helix-left",
    position: new Vector3(-1.5000000513428144, -2, 0.5000000513428144),
    rotation: new Euler(0, Math.PI / 2, 0)
  },
  {
    id: "end",
    position: new Vector3(-1.0268562711246432e-7, -2, 1.0000001026856271),
    rotation: new Euler(-0, 0, -0)
  },
];
