import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'option2',
  templateUrl: './option2.component.html',
  styleUrls: ['./option2.component.css']
})
export class Option2Component {

  @Input()
  public option : any ;

}
