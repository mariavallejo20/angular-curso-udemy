import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css'],
})
export class CounterPageComponent {
  counter = 10;
  counterSignal = signal(10);

  increaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update((current) => current + value);
  }

  decrement() {
    this.counter -= 1;
    this.counterSignal.update((current) => current - 1);
  }

  reset() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
