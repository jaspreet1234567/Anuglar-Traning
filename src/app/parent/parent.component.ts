import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {

  name = 'John Smith';

  value = 0;

  hasPermission = true;

  @ViewChild(ChildComponent) child: ChildComponent;

  @ViewChild('btn') button: ElementRef;

  peopleArr: any[] = [
    {
      name: "Douglas  Pace",
      age: 33,
      desi:'SE'
    },
    {
      name: "Mcleod  Mueller",
      age: 32,
      desi:'QA'
    },
    {
      name: "Day  Meyers",
      age: 30,
      desi:'SE'
    },
    {
      name: "Aguirre  Ellis",
      age: 34,
      desi:'BA'
    },
    {
      name: "Cook  Tyson",
      age: 31,
      desi:'AC'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // this.button.nativeElement.hidden=true;
  }

  onOutoutEvent(event: number): void {
    this.value = event;
  }

  onClick(): void {
    this.child.onIncrementClick();
  }
}
