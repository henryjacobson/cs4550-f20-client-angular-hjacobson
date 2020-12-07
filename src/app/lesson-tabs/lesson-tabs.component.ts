import { Component, OnInit } from '@angular/core';
import {ModuleServiceClientService} from '../services/module-service-client.service';
import {ActivatedRoute} from '@angular/router';
import {LessonServiceClientService} from '../services/lesson-service-client.service';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {
  lessons: any = [];
  courseId: any;
  moduleId: any;
  lessonId: any;

  constructor(
    private lessonService: LessonServiceClientService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.courseId = params.courseId;
      this.moduleId = params.moduleId;
      this.lessonId = params.lessonId;
      if (typeof this.moduleId !== 'undefined') {
        this.lessonService.findLessonsForModule(this.moduleId)
          .then(lessons => this.lessons = lessons);
      }
    });
  }
}
