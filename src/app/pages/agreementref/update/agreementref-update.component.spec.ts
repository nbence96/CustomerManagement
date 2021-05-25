import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementrefUpdateComponent } from './agreementref-update.component';

describe('AgreementrefUpdateComponent', () => {
  let component: AgreementrefUpdateComponent;
  let fixture: ComponentFixture<AgreementrefUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgreementrefUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreementrefUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
