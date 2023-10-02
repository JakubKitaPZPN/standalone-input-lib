import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyledInputComponent } from './styled-input.component';

describe('StyledInputComponent', () => {
  let component: StyledInputComponent;
  let fixture: ComponentFixture<StyledInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StyledInputComponent]
    });
    fixture = TestBed.createComponent(StyledInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
