import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent {

  @ViewChild("cnv")
  public canvas : ElementRef ; // instance data member

  @Input()
  public clockTimezone : any ; // intance data member

  private dateTimeInterval : any ;

  constructor() {
    
  }

  ngOnInit() {
    console.log("clockTimezone: ", this.clockTimezone['region']);
  }

  ngAfterViewInit() {
    let ctx = this.canvas.nativeElement.getContext("2d");
    let radius = this.canvas.nativeElement.height / 2;
    ctx.translate(radius, radius);
    radius = radius * 0.90;

    // call first once
    this.drawClock(ctx, radius);
    // now call every second
    this.dateTimeInterval = window.setInterval(
      this.drawClock.bind(this, ctx, radius),
      1000);
  }

  drawClock(ctx, radius) {
    this.drawFace(ctx, radius);
    this.drawNumbers(ctx, radius);
    this.drawTime(ctx, radius);
  }

  drawFace(ctx, radius) {
    let grad;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius *1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius * 0.1;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
  }

  drawNumbers(ctx, radius) {
    let ang;
    let num;
    ctx.font = radius * 0.15 + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    for(num = 1; num < 13; num++){
      ang = num * Math.PI / 6;
      ctx.rotate(ang);
      ctx.translate(0, -radius * 0.85);
      ctx.rotate(-ang);
      ctx.fillText(num.toString(), 0, 0);
      ctx.rotate(ang);
      ctx.translate(0, radius * 0.85);
      ctx.rotate(-ang);
    }
  }

  drawTime(ctx, radius){
    let now = new Date();

    // TODO: add conditions to check with hours and minutes
    // console.log("*** " + this.clockTimezone.region + " ***")
    let hour = now.getUTCHours() + this.clockTimezone.hours;
    let minute = now.getUTCMinutes() + this.clockTimezone.minutes;
    let second = now.getUTCSeconds();
    // console.log("*** End ***")

    //hour
    hour = hour % 12;
    hour = (hour * Math.PI/6) + (minute * Math.PI/(6 * 60)) + (second * Math.PI/(360 * 60));
    this.drawHand(ctx, hour, radius * 0.5, radius * 0.07);
    // minute
    minute = (minute * Math.PI/30) + (second * Math.PI/(30 * 60));
    this.drawHand(ctx, minute, radius * 0.8, radius * 0.07);
    // second
    second = (second * Math.PI/30);
    this.drawHand(ctx, second, radius * 0.9, radius * 0.02);
  }

  drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
  }

  ngOnDestroy() {
    clearInterval(this.dateTimeInterval);
  }
}
