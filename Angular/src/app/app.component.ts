import { NgFor, NgIf } from '@angular/common';
import { Component, signal, computed, Signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Step';
  
  dailyStepGoal = signal(0);
  step = signal(0);
  isUserRegistered = signal(false);
  showInitialMessage = signal(false);
  isGoalSet = signal(false);
  showCompletionMessage = signal(false);
  dailyTargets: number[] = [];
  
  increaseStep() {
    this.step.set(this.step() + 1);
    if(this.progress() === 100) {
      this.showCompletionMessage.set(true);
      
      setTimeout(() => {
        this.showCompletionMessage.set(false);
      }, 5000);
    }
  }
  
  resetStep() {
    this.step.set(0);
  }

  // computed do not modify but depend on signal.
  progress = computed(() => {
    return this.dailyStepGoal() > 0 ? (this.step() / this.dailyStepGoal()) * 100 : 0;
  });

  takeInput(event: any) {
    this.dailyStepGoal.set(event.value ?? 0);
  }

  registerUser() {
    this.isUserRegistered.set(true);
    this.showInitialMessage.set(true);

    setTimeout(() => {
      this.showInitialMessage.set(false);
    }, 5000);
  }

  setGoal() {
    if(this.dailyStepGoal() > 0) {
      this.isGoalSet.set(true);
      this.dailyTargets.push(this.dailyStepGoal());
    }
  }
}
