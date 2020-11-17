import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModuleServiceClientService {
  url = 'https://wbdv-generic-server.herokuapp.com/api/hjacobson/courses';

  findModulesForCourse = (courseId: any) =>
    fetch(`${this.url}/${courseId}/modules`)
      .then(response => response.json())
}
