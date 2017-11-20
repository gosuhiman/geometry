import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DrawingModule} from "./drawing/drawing.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DrawingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
