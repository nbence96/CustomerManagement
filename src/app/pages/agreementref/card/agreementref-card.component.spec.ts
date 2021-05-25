import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementrefCardComponent } from './agreementref-card.component';

describe('AgreementrefCardComponent', () => {
  let component: AgreementrefCardComponent;
  let fixture: ComponentFixture<AgreementrefCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgreementrefCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreementrefCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
