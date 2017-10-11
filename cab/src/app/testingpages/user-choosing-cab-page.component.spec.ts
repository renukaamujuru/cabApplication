import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChoosingCabPageComponent } from './user-choosing-cab-page.component';

describe('UserChoosingCabPageComponent', () => {
  let component: UserChoosingCabPageComponent;
  let fixture: ComponentFixture<UserChoosingCabPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserChoosingCabPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChoosingCabPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
