import {ElementRef, Injectable} from '@angular/core';
import * as Konva from "konva";
import {Point} from "./point";

@Injectable()
export class DrawingService {

  private _stage: Konva.Stage;
  private _layer: Konva.Layer;

  private _color: string = '#aaa';

  private _tweens: Konva.Tween[] = [];

  constructor() {
  }

  init(elementRef: ElementRef) {
    this._stage = new Konva.Stage({
      container: elementRef.nativeElement.id,
      width: elementRef.nativeElement.offsetWidth,
      height: elementRef.nativeElement.offsetHeight
    });
    this._layer = new Konva.Layer();
    this._stage.add(this._layer);
  }

  draw() {
    const padding: number = 7;
    const R: number = 50;
    const r: number = R * Math.sqrt(3) / 2;

    for (let i = 0; i < 22; i++) {
      for (let j = 0; j < 22; j++) {
        const offsetX: number = j % 2 == 0 ? r + padding : 0;
        const center: Point = new Point(
          offsetX + i * (r + padding) * 2,
          j * (R - padding) * 2
        );

        const molly: Konva.Line = this.buildHexagon(center, R);
        this._layer.add(molly);
        const tween: Konva.Tween = this.buildTween(molly);

        this._tweens.push(tween);

        molly.on('mouseenter', (e) => {
          tween.play();
          setTimeout(() => {
            tween.reset();
          }, 1000);
        });
      }
    }

    this._stage.draw();
  }

  buildHexagon(center: Point, R: number): Konva.Line {
    const r: number = R * Math.sqrt(3) / 2;
    const points: number[] = [];

    points.push(0, -R);
    points.push(r, -R / 2);
    points.push(r, R / 2);
    points.push(0, R);
    points.push(-r, R / 2);
    points.push(-r, -R / 2);

    return new Konva.Line({
      x: center.x,
      y: center.y,
      points: points,
      fill: this._color,
      closed: true
    });
  }

  buildTween(polygon: Konva.Line): Konva.Tween {
    return new Konva.Tween({
      node: polygon,
      easing: Konva.Easings.Linear,
      duration: 2,
      rotation: 360
    });
  }


}
