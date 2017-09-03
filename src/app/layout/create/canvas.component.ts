import {
  Component, Input, ElementRef, AfterViewInit, ViewChild
} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-canvas',
  template: '<canvas #canvas></canvas>',
  styles: ['canvas { border: 1px solid #000; }']
})

export class CanvasComponent implements AfterViewInit {

  @ViewChild('canvas') public canvas: ElementRef;

  @Input() public width = 468;
  @Input() public height = 750;

  public cx: CanvasRenderingContext2D;
  public radius = 10;

  public ngAfterViewInit() {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx =  canvasEl.getContext('2d');

    canvasEl.width = this.width;
    canvasEl.height = this.height;

    this.cx.lineWidth = 3;
    this.cx.lineCap = 'round';
    this.cx.strokeStyle = '#000';
    this.drawBackground(canvasEl);
    this.captureEvents(canvasEl);
  }

  private captureEvents(canvasEl: HTMLCanvasElement) {
    Observable
      .fromEvent(canvasEl, 'click')
      .subscribe((res: MouseEvent) => {
        const rect = canvasEl.getBoundingClientRect();

        const pos = {
          x: res.clientX - rect.left,
          y: res.clientY - rect.top
        };

        this.drawWaypoint(pos);
      });
  }

  private drawWaypoint(pos: { x: number, y: number }) {
    if (!this.cx) { return; }
    this.cx.moveTo(pos.x, pos.y);
    this.cx.ellipse(pos.x, pos.y, this.radius, this.radius,  0, 0, 2 * Math.PI)
    this.cx.moveTo(pos.x - this.radius, pos.y);
    this.cx.lineTo(pos.x + this.radius, pos.y);
    this.cx.moveTo(pos.x, pos.y - this.radius);
    this.cx.lineTo(pos.x, pos.y + this.radius);
    this.cx.stroke();
  }

  private drawBackground(canvasEl: HTMLCanvasElement){
    var img = new Image();

    img.onload = function(){
       var cx =  canvasEl.getContext('2d');
       cx.drawImage(img,0,0);
    };
    img.src = 'assets/images/field.jpg';
  }

}
