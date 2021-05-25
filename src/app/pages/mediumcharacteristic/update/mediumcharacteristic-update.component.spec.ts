import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumcharacteristicUpdateComponent } from './mediumcharacteristic-update.component';

describe('MediumcharacteristicUpdateComponent', () => {
  let component: MediumcharacteristicUpdateComponent;
  let fixture: ComponentFixture<MediumcharacteristicUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediumcharacteristicUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumcharacteristicUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
