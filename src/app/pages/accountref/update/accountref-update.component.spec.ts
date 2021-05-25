import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountrefUpdateComponent } from './accountref-update.component';

describe('AccountrefUpdateComponent', () => {
  let component: AccountrefUpdateComponent;
  let fixture: ComponentFixture<AccountrefUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountrefUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountrefUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
