import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <h1>{{ title }}</h1>
    <button class="btn btn-primary"></button>
  `,
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  title = "Bible";

  constructor() { }

  ngOnInit() {
  }

}
