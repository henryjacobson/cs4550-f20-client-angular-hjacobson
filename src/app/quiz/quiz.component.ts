import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../services/question.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(
    private service: QuestionService,
    private route: ActivatedRoute
  ) { }

  questions: any = [];
  quizId: any;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizId = params.quizId;
      this.service.findQuestionsForQuizId(this.quizId)
        .then(questions => this.questions = questions);
    });
  }

}
