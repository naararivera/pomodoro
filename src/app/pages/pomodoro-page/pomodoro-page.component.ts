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


startCounting(): void{
  
}
}
