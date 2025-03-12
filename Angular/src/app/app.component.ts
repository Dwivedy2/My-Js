import { Component, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Step';
  
  dailyStepGoal = signal(0);
  step = signal(0);
  
  increaseStep() {
    this.step.set(this.step() + 1);
  }
  
  resetStep() {
    this.step.set(0);
  }

  // computed do not modify but depend on signal.
  progress = computed(() => {
    return this.dailyStepGoal() > 0 ? (this.step() / this.dailyStepGoal()) * 100 : 0;
  });

  takeInput(event: any) {
    this.dailyStepGoal.set(event.value);
  }
}
