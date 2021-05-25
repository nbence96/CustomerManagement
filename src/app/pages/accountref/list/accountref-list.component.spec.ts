import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountrefListComponent } from './accountref-list.component';

describe('AccountrefListComponent', () => {
  let component: AccountrefListComponent;
  let fixture: ComponentFixture<AccountrefListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountrefListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountrefListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
