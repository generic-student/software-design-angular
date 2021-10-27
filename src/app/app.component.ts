import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  template: '<h1>inline stuff</h1><app-c1>saftpresse</app-c1><app-c2></app-c2><app-c3></app-c3>',
  styles: ['h1{color:green;}']
})
export class AppComponent {
  title = 'pool-u01';
  binding_one = "Binding 1";
  binding_two = "Binding 2";
  binding_three = "Binding 3";
}
