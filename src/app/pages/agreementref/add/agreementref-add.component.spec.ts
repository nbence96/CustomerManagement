import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementrefAddComponent } from './agreementref-add.component';

describe('AgreementrefAddComponent', () => {
  let component: AgreementrefAddComponent;
  let fixture: ComponentFixture<AgreementrefAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgreementrefAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreementrefAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
