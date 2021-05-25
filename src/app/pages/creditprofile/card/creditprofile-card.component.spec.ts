import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditprofileCardComponent } from './creditprofile-card.component';

describe('CreditprofileCardComponent', () => {
  let component: CreditprofileCardComponent;
  let fixture: ComponentFixture<CreditprofileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditprofileCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditprofileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
