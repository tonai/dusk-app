import { create } from "zustand";
import { MutableRefObject } from "react";
import { RapierRigidBody } from "@react-three/rapier";
import { GameState, IGameStore } from "../types";

export const useGame = create<IGameStore>((set) => ({
  ballRef: { current: null },
  ghosts: {},
  level: [],
  playerId: "",
  playerIds: [],
  start: false,
  setBallRef: (ballRef: MutableRefObject<RapierRigidBody | null>) => set({ ballRef }),
  setGameState: (game: GameState) => set(game,),
  setPlayerId: (playerId: string) => set({ playerId }),
}));
