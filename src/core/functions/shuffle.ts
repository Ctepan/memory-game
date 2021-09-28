export function shuffle<T>(array: T[]): T[] {
  const result: T[] = [...array];

  for (let i = 0; i < array.length; i++) {
    const newPlace = Math.floor(Math.random() * array.length);
    [result[i], result[newPlace]] = [result[newPlace], result[i]];
  }

  return result;
}
