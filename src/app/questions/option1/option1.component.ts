import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'option1',
  templateUrl: './option1.component.html',
  styleUrls: ['./option1.component.css']
})
export class Option1Component {

  @Input()
  public question : any ;

  @Input()
  public optionValue : any ;

}
