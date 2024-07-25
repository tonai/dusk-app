import { createContext, useContext } from "react";
import { IGameContext } from "../types";

export const gameContext = createContext<IGameContext>({
  onJoint: () => null,
});

export function useGameContext() {
  return useContext(gameContext);
}
