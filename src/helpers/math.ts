export function randomRange(max: number, min = 0) {
  return Math.random() * (max - min) + min;
}

export function randomInt(max: number, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
