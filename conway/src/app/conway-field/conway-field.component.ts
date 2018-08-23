import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FieldService } from '../field.service';

@Component({
  selector: 'app-conway-field',
  templateUrl: './conway-field.component.html',
  styleUrls: ['./conway-field.component.css']
})
export class ConwayFieldComponent implements OnInit {

  fieldSize: number;

  constructor(
    private route: ActivatedRoute,
    public fieldService: FieldService
  ) {
    this.fieldSize = +this.route.snapshot.paramMap.get("size");
    fieldService.createField(this.fieldSize);
  }

  ngOnInit() {
  }




}
