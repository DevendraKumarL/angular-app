import { Component, OnInit } from '@angular/core';
import { Questions2Service } from '../../services/questions-service/questions2.service';

@Component({
  selector: 'questions2',
  templateUrl: './questions2.component.html',
  styleUrls: ['./questions2.component.css']
})
export class Questions2Component {

  constructor(public questions2Service : Questions2Service) {}

  public totalScore : number ;

  calculateScore() {
    this.totalScore = 0;
    this.questions2Service.Questions.forEach(question => {
      question.options.forEach(option => {
        if (option.isSelected === undefined && !option.isCorrect) {
          this.totalScore++;
        }
        else if (option.isSelected === option.isCorrect) {
          this.totalScore++;
        }
      });
    });
  }

}
