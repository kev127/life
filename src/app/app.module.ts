import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LifeComponent } from './life/life.component';
import { LifeDetailsComponent } from './life-details/life-details.component';
import { LifeFormComponent } from './life-form/life-form.component';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    LifeComponent,
    LifeDetailsComponent,
    LifeFormComponent,
    DateCountPipe
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
