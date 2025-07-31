import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

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

  secondsPlusOne = signal(0);
  count = false;

  startCounting(): void {
    // this.hours.update((value) => value + 1);
    // this.minutes.update((value) => value + 1);
    // this.seconds.update((value) => value + 1);
    //this.secondsPlusOne.update(value=>value+1);
    // this.lastValue = setInterval(() => {
    //   this.count = true;
    //   this.secondsPlusOne.update((n) => n + 1); // actualiza 1 vez por segundo
    // }, 1000);

  }
  stopCounting(): void {
    // this.count = false;
    // this.secondsPlusOne.update((value)=> this.lastValue);
  }
}
