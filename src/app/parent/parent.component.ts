import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { PeopleService } from '../services/people.service';

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

  peopleArr: any[] = [];

  isLoading = true;

  constructor(
    private peopleService: PeopleService
  ) {

  }

  ngOnInit(): void {
    debugger;
    this.peopleService.getPeopleList().subscribe(response => {
      debugger;
      this.peopleArr = response;
      this.isLoading = false;
    },
      (err => {
        console.log(err);
        debugger;
        this.isLoading = false;
      })
    );
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
