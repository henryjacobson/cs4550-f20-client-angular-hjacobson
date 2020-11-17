import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LessonServiceClientService {
  url = 'https://wbdv-generic-server.herokuapp.com/api/hjacobson/modules';

  findLessonsForModule = (moduleId: any) =>
    fetch(`${this.url}/${moduleId}/lessons`)
      .then(response => response.json())
}
