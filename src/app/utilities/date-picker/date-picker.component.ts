import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

declare var $ : any ;

@Component({
  selector: 'date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent {

  @Input()
  public date : string ;

  @Output()
  public dateChange = new EventEmitter<string>();

  @ViewChild("datepicker")
  public datePickerElement : ElementRef ;

  ngAfterViewInit() {
    $(this.datePickerElement.nativeElement).datepicker({
      onSelect: (dateValue) => {
        this.dateChange.emit(dateValue);
      }
    });
  }

}
