import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input('name1') empName: string = '';

  value: number = 0;

  @Output() parentEmitter = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onIncrementClick(): void {
    this.value += 1;
    this.parentEmitter.emit(this.value);
  }
}
