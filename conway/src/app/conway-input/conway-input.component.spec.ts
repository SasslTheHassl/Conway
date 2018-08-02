import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConwayInputComponent } from './conway-input.component';

describe('ConwayInputComponent', () => {
  let component: ConwayInputComponent;
  let fixture: ComponentFixture<ConwayInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConwayInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConwayInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
