import { Component, OnInit } from '@angular/core';
import {CourseServiceClientService} from '../services/course-service-client.service';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent implements OnInit {
  courses: any = [];

  constructor(
    private courseService: CourseServiceClientService
  ) { }

  ngOnInit(): void {
    this.courseService.findAllCourses()
      .then(courses => {
        console.log(courses);
        this.courses = courses;
      });
  }
}
