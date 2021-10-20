import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c2',
  template: `
    <p>
      text from c2
    </p>
  `,
  styles: [
    'p{color:blue;}'
  ]
})
export class C2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
