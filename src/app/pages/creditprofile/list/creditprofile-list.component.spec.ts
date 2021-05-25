import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditprofileListComponent } from './creditprofile-list.component';

describe('CreditprofileListComponent', () => {
  let component: CreditprofileListComponent;
  let fixture: ComponentFixture<CreditprofileListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditprofileListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditprofileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
