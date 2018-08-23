import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conway-input',
  templateUrl: './conway-input.component.html',
  styleUrls: ['./conway-input.component.css']
})
export class ConwayInputComponent implements OnInit {

  fieldSize: number;
  constructor(private router: Router) {

   }

  ngOnInit() {
  }

  btnClick() : void {
    this.router.navigate(["/field/", this.fieldSize]);
  }

}
