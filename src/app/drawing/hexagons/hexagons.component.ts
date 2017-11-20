import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DrawingService} from "../drawing.service";

@Component({
  selector: 'app-hexagons',
  templateUrl: './hexagons.component.html',
  styleUrls: ['./hexagons.component.scss']
})
export class HexagonsComponent implements OnInit {

  @ViewChild('scene') scene: ElementRef;

  constructor(private _drawingService: DrawingService) {
  }

  ngOnInit() {
    this._drawingService.init(this.scene);
    this._drawingService.draw();
  }

}
