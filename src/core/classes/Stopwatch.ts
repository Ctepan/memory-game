export class Stopwatch {
  private timerID: number | undefined

  value = 0

  start() {
    this.value = 0;
    this.timerID = setInterval(() => this.value++, 1000);
  }

  stop() {
    clearInterval(this.timerID);
    this.timerID = undefined;
  }

  clear() {
    this.value = 0;
  }
}
