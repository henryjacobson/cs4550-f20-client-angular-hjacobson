import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {
  url = 'http://localhost:3000/api';

  findAllQuizzes = () =>
    fetch(`${this.url}/quizzes`)
      .then(response => response.json())
}
