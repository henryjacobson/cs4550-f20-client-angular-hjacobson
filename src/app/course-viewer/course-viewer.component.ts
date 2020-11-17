import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseServiceClientService} from '../services/course-service-client.service';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {
  course: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseServiceClientService
  ) { }

  ngOnInit(): void {
    this.courseService.findCourseById(
      this.activatedRoute.params.subscribe(
        params => params.courseId))
      .then(course => this.course = course);
  }
}
