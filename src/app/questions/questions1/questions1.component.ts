import { Component, OnInit } from '@angular/core';

interface Options {
  [index : number] : any
}

interface Question {
  question : string;
  options : Options;
  answer : any;
  questionId : number;
  selectedOption? : any;
}

@Component({
  selector: 'questions1',
  templateUrl: './questions1.component.html',
  styleUrls: ['./questions1.component.css']
})
export class Questions1Component {

  constructor() {}

  public Questions : Question[] = [
    {
      question: "Who are you?",
      options: ["Male", "Female", "Other", "Mad"],
      answer: "Mad",
      questionId: 1,
    },
    {
      question: "What is your name?",
      options: ["Dev", "Mad", "None", "Noob"],
      answer: "Dev",
      questionId: 2,
    },
    {
      question: "What is your age?",
      options: [109, 22, -1, 45],
      answer: 22,
      questionId: 3,
    },
    {
      question: "Where are you from?",
      options: ["Jupiter", "Saturn", "Bangalore", "China"],
      answer: "Bangalore",
      questionId: 4,
    },
    {
      question: "Are you mad?",
      options: ["Yes", "No", "May be", "You are"],
      answer: "No",
      questionId: 5,
    }
  ];

  public totalScore : number = 0 ;

  calculateScore() {
    this.totalScore = 0;
    this.Questions.forEach(question => {
      if (question.selectedOption && (question.answer === question.selectedOption)) {
        this.totalScore++;
      }
    });
  }

}
