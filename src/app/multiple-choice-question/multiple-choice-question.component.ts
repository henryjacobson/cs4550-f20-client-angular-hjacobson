import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  @Input()
  question = {_id: '', title: '', question: '', choices: [], answer: '', correct: ''};
  @Input()
  answer = '';
  @Output()
  answerChange = new EventEmitter<string>();
  @Input()
  grading = false;

  select = (event: any) => {
    if (!this.grading) {
      this.answer = event.target.value;
      this.answerChange.emit(this.answer);
    }
  }

  grade = () => {
    this.grading = true;
  }

  ngOnInit(): void {}
}
