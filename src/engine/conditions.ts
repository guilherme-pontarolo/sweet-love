import type { GameState } from "./types"

export const hasFlag =
  (flag: string) =>
  (state: GameState) =>
    Boolean(state.flags[flag])

export const flagGreaterThan =
  (flag: string, value: number) =>
  (state: GameState) =>
    Number(state.flags[flag] ?? 0) > value
