import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  aString = "Ich bin ein string.";
  aNumber = 100;
  attachClass = false;
  userName: string = "jbond";

  constructor() {
    setTimeout(
      () => {
        this.setProperty(300, true);
      }, 3000
    );
  }

  setProperty(num: number, attachClass: boolean) {
    this.aNumber = num;
    this.attachClass = attachClass;
  }

  ngOnInit(): void {
  }

}
