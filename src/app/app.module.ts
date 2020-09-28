import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CarouselComponent } from './carousel/carousel.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LifeComponent } from './life/life.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    LifeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
