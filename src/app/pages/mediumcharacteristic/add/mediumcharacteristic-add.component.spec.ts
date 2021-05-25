import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumcharacteristicAddComponent } from './mediumcharacteristic-add.component';

describe('MediumcharacteristicAddComponent', () => {
  let component: MediumcharacteristicAddComponent;
  let fixture: ComponentFixture<MediumcharacteristicAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediumcharacteristicAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumcharacteristicAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
