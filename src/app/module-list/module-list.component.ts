import { Component, OnInit } from '@angular/core';
import {ModuleServiceClientService} from '../services/module-service-client.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {
  modules: any = [];
  courseId: any;
  moduleId: any;

  constructor(
    private moduleService: ModuleServiceClientService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.courseId = params.courseId;
      this.moduleId = params.moduleId;
      if (typeof this.courseId !== 'undefined') {
        this.moduleService.findModulesForCourse(this.courseId)
          .then(modules => this.modules = modules);
      }
    });
  }

}
