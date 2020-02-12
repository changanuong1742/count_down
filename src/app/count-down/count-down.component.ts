import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {
  startTimer: any;
  isStart = true;
  @Input()
  second = 10;
  secondDefaut = 10;

  constructor() {
  }

  ngOnInit(): void {
  }

  clearTimer() {
    clearInterval(this.second);
    this.second = this.secondDefaut;
  }

  start() {
    this.isStart = false;
    this.startTimer = setInterval(() => {
      if (this.second > 0) {
        this.second--;
      }
    }, 1000);
  }

  stop() {
    clearInterval(this.startTimer);
  }

  reset() {
    this.clearTimer();
  }

  onChange(value) {
    this.second = value;
  }
}
