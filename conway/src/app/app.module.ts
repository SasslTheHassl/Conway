import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ConwayInputComponent } from './conway-input/conway-input.component';
import { ConwayFieldComponent } from './conway-field/conway-field.component';
import { AppRoutingModule } from './app-routing.module';
import { FieldService } from './field.service';

@NgModule({
  declarations: [
    AppComponent,
    ConwayInputComponent,
    ConwayFieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [FieldService],
  bootstrap: [AppComponent]

})
export class AppModule { }
