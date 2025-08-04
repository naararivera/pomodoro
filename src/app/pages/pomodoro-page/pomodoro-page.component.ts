import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';

interface Contador {
  hours: number;
  minutes: number;
  seconds: number;
}

@Component({
  selector: 'pomodoro-page',
  imports: [],
  templateUrl: './pomodoro-page.component.html',
  styleUrl: './pomodoro-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PomodoroPageComponent {
  hours = signal(0);
  minutes = signal(0);
  seconds = signal(0);

  private intervalId: ReturnType<typeof setInterval> | null = null;

  count = false;

  startCounting(): void {
    if (this.intervalId !== null) return;

    this.count = true;

    this.intervalId = setInterval(() => {
      this.seconds.update((n) => n + 1); //Sumamos 1 cada segundo

      if (this.seconds() >= 60) {
        this.seconds.set(0);
        this.minutes.update((n) => n + 1);
      }

      if (this.minutes() >= 60) {
        this.minutes.set(0);
        this.hours.update((n) => n + 1);
      }
    }, 1000); //cada 1 segundo se actualizan los valores
  }

  stopCounting(): void {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.count = false;
  }

  restart(): void {
    this.hours.set(0);
    this.minutes.set(0);
    this.seconds.set(0);
  }

  pad(value: number): string {
    return value.toString().padStart(2, '0');
  }

  formattedTime = computed(() =>
      `${this.pad(this.hours())} : ${this.pad(this.minutes())} : ${this.pad(
        this.seconds()
      )}`
  );
}
