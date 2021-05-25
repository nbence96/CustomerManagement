import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountrefCardComponent } from './accountref-card.component';

describe('AccountrefCardComponent', () => {
  let component: AccountrefCardComponent;
  let fixture: ComponentFixture<AccountrefCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountrefCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountrefCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
