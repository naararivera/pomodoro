import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PomodoroPageComponent } from './pages/pomodoro-page/pomodoro-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    PomodoroPageComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'pomodoro';
}
