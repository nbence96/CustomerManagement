import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditprofileUpdateComponent } from './creditprofile-update.component';

describe('CreditprofileUpdateComponent', () => {
  let component: CreditprofileUpdateComponent;
  let fixture: ComponentFixture<CreditprofileUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditprofileUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditprofileUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
