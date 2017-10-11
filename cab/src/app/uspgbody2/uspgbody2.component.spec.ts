import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Uspgbody2Component } from './uspgbody2.component';

describe('Uspgbody2Component', () => {
  let component: Uspgbody2Component;
  let fixture: ComponentFixture<Uspgbody2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Uspgbody2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Uspgbody2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
