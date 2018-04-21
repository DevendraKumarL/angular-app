import { Injectable } from '@angular/core';

interface Option {
  value: any ;
  isCorrect : boolean ;
  isSelected? : boolean ;
}

interface Question {
  question: string ;
  options: Option[] ;
}

@Injectable()
export class Questions2Service {

  public Questions : Question[] = [
    {
      question: "Who are you?",
      options: [
        {
          value: "Mad",
          isCorrect: false
        },
        {
          value: "Noob",
          isCorrect: false
        }
      ]
    },
    {
      question: "Who the hell are you?",
      options: [
        {
          value: 0,
          isCorrect: false
        },
        {
          value: "Shit face",
          isCorrect: true
        }
      ]
    },
    {
      question: "Tell me who are you actually?",
      options: [ 
        {
          value: "Dev",
          isCorrect: true
        },
        {
          value: "Devendra",
          isCorrect: true
        },
        {
          value: "Chouhan",
          isCorrect: true
        }
      ]
    },
  ];

}
