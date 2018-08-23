import { Injectable } from '@angular/core';
import { Field } from './field';

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  field: Field;
  constructor() { }

  // Das Feld wird in der angegebenen Größe instanziiert und mit "false" befüllt
  createField(size: number): void {

    ////////////////// Initialize with NEW ////////////////////////
    // this.field = new Field ();
    // this.field.size = size;
    // this.field.cells = [];
    ///////////////////////////////////////////////////////////////


    // Initialisierung 
    this.field = {
      size: size,
      cells: []
    }

    for (let x = 0; x < size; x++) {
      this.field.cells.push([true]);
      for (let y = 0; y < size; y++) {
        this.field.cells[x].push(false);
      }
    }
  }



}
