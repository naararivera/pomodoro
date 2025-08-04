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

  alarm = new Audio('assets/alarm.mp3');

  startCounting(): void {
    if (this.intervalId !== null) return;

    this.count = true;

    this.intervalId = setInterval(() => {
      const h = this.hours();
      const m = this.minutes();
      const s = this.seconds();

      // Si el contador ya llegó a 00:00:00, detenemos
      if (h === 0 && m === 0 && s === 0) {
        this.stopCounting();
        this.alarm.play().catch((err) => {
          console.warn('No se pudo reproducir el sonido:', err);
        });
        return;
      }

      if (s > 0) {
        this.seconds.update((n) => n - 1);
      } else {
        this.seconds.set(59);

        if (m > 0) {
          this.minutes.update((n) => n - 1);
        } else {
          if (h > 0) {
            this.minutes.set(59);
            this.hours.update((n) => n - 1);
          } else {
            this.seconds.set(0);
            this.minutes.set(0);
            this.hours.set(0);
          }
        }
      }
    }, 1000);
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

  formattedTime = computed(
    () =>
      `${this.pad(this.hours())} : ${this.pad(this.minutes())} : ${this.pad(
        this.seconds()
      )}`
  );
}
