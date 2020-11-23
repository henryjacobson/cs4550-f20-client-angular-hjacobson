import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  url = 'http://localhost:3000/api';

  findQuestionsForQuizId = (quizId: any) =>
    fetch(`${this.url}/quizzes/${quizId}/questions`)
      .then(response => response.json())
}
