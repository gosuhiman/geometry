import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HexagonsComponent} from './hexagons/hexagons.component';
import {DrawingService} from "./drawing.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HexagonsComponent
  ],
  exports: [
    HexagonsComponent
  ],
  providers: [
    DrawingService
  ]
})
export class DrawingModule {
}
