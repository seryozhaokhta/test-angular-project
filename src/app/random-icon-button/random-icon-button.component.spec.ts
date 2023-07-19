import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomIconButtonComponent } from './random-icon-button.component';

describe('RandomIconButtonComponent', () => {
  let component: RandomIconButtonComponent;
  let fixture: ComponentFixture<RandomIconButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomIconButtonComponent]
    });
    fixture = TestBed.createComponent(RandomIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
