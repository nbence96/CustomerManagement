import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountrefAddComponent } from './accountref-add.component';

describe('AccountrefAddComponent', () => {
  let component: AccountrefAddComponent;
  let fixture: ComponentFixture<AccountrefAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountrefAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountrefAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
