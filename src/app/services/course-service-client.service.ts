import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceClientService {
  url = 'https://wbdv-generic-server.herokuapp.com/api/hjacobson/courses';

  findAllCourses = () =>
    fetch(this.url)
      .then(response => response.json())

  findCourseById = (courseId: any) =>
  {
    console.log(`${this.url}/${courseId}`);
    return fetch(`${this.url}/${courseId}`)
      .then(response => response.json());
  }
}
