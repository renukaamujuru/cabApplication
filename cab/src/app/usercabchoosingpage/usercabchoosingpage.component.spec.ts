import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UspgbodyComponent } from './uspgbody.component';

describe('UspgbodyComponent', () => {
  let component: UspgbodyComponent;
  let fixture: ComponentFixture<UspgbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UspgbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UspgbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
