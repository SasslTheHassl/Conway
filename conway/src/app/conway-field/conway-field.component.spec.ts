import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConwayFieldComponent } from './conway-field.component';

describe('ConwayFieldComponent', () => {
  let component: ConwayFieldComponent;
  let fixture: ComponentFixture<ConwayFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConwayFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConwayFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
