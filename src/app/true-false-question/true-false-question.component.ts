import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  @Input()
  question = {_id: '', title: '', question: '', answer: '', correct: ''};
  grading = false;

  select = (event: any) => {
    if (!this.grading) {
      this.question.answer = event.target.value;
    }
  }

  grade = () => {
    this.grading = true;
  }

  ngOnInit(): void {}
}

