import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c1',
  template: '<p>text from C1</p><hr><ng-content></ng-content><hr>',
  styles: ['p{color:red;}']
})
export class C1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
