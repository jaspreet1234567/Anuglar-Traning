import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-demo';
  firstName = 'John';
  invalid = true;

  onSubmit(): void {
    console.log('Submit button clicked');
  }
}
