import { Component, OnInit } from '@angular/core';
import {QuizServiceService} from '../services/quiz-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  constructor(
    private service: QuizServiceService,
    private route: ActivatedRoute
  ) { }

  courseId = '';
  quizzes: any = [];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.courseId;
      this.service.findAllQuizzes()
        .then(quizzes => {
          this.quizzes = quizzes;
          this.quizzes.map((quiz: { _id: any; attempts: any; }) =>
            fetch(`http://localhost:3000/api/quizzes/${quiz._id}/attempts`)
              .then(response => response.json())
              .then(attempts => {
                quiz.attempts = attempts;
              })
          );
        });
  });
  }

}
