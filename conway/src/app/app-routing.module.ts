import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {ConwayInputComponent} from "./conway-input/conway-input.component";
import { ConwayFieldComponent } from './conway-field/conway-field.component';


const routes: Routes = [
  { path: "", component: ConwayInputComponent },
  { path: "field/:size", component: ConwayFieldComponent }
]


@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
