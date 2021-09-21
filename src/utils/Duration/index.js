export const secondsToMinutes = (givenSecs) => {
    // const minutes = Math.floor ((givenSecs % 3600) / 60)
    const minutes = Math.floor (givenSecs / 60)
        .toString()
        .padStart(2, "0")
    const seconds = Math.round (givenSecs % 60)
        .toString()
        .padStart(2, "0");
  return `${minutes}:${seconds}`;
}

export function minutesToDuration(givenMinutes) {
    const minutes = Math.floor(givenMinutes).toString().padStart(2, "0");
    return `${minutes}:00`;
  }