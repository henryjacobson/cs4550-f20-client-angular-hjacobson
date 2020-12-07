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
        });
  });
  }

}
