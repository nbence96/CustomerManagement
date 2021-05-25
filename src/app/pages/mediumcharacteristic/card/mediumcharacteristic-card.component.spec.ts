import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumcharacteristicCardComponent } from './mediumcharacteristic-card.component';

describe('MediumcharacteristicCardComponent', () => {
  let component: MediumcharacteristicCardComponent;
  let fixture: ComponentFixture<MediumcharacteristicCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediumcharacteristicCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumcharacteristicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
