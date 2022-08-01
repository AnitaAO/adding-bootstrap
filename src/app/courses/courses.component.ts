import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <h1>{{ title }}</h1>
    <button class="btn btn-primary" [class.active]="isActive">Save</button>
  `,
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  title = "Class Binding & Bootstrap";
  isActive = true

  constructor() { }

  ngOnInit() {
  }

}
