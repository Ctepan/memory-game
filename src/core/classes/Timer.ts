export class Timer {
  private timerID: number | undefined
  private cancelTimerResolver: null | { (value: unknown): void } = null
  isStarted = false

  // Seconds if number
  start(time: number | { s?: number, ms?: number }) {
    if (this.isStarted) {
      this.stop();
    }

    let timeout: number;

    if (typeof time === 'number') {
      timeout = time * 1000;
    } else {
      timeout = (time.s ?? 0) * 1000 + (time.ms ?? 0);
    }

    return new Promise((resolve) => {
      this.cancelTimerResolver = resolve;
      this.isStarted = true;
      this.timerID = setTimeout(() => {
        this.stop();
      }, timeout);
    });
  }

  stop() {
    clearInterval(this.timerID);
    if (this.cancelTimerResolver) {
      this.cancelTimerResolver(null);
      this.cancelTimerResolver = null;
    }

    this.timerID = undefined;
    this.isStarted = false;
  }
}
