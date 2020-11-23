import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  @Input()
  question = {_id: '', title: '', question: '', choices: [], answer: '', correct: ''};
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
