import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseServiceClientService} from '../services/course-service-client.service';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {
  course: any = {title: ''};

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseServiceClientService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const courseId = params.courseId;
      if (typeof courseId !== 'undefined') {
        this.courseService.findCourseById(courseId)
          .then(course => this.course = course);
      }
    });
  }
}
