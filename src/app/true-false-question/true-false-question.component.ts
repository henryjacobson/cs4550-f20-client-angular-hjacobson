import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  @Input()
  question = {_id: '', title: '', question: '', answer: '', correct: ''};
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

