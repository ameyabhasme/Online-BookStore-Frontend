import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSignupRequestComponent } from './login-signup-request.component';

describe('LoginSignupRequestComponent', () => {
  let component: LoginSignupRequestComponent;
  let fixture: ComponentFixture<LoginSignupRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSignupRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSignupRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
