import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditprofileAddComponent } from './creditprofile-add.component';

describe('CreditprofileAddComponent', () => {
  let component: CreditprofileAddComponent;
  let fixture: ComponentFixture<CreditprofileAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditprofileAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditprofileAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
