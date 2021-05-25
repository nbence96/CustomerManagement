import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementrefListComponent } from './agreementref-list.component';

describe('AgreementrefListComponent', () => {
  let component: AgreementrefListComponent;
  let fixture: ComponentFixture<AgreementrefListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgreementrefListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreementrefListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
