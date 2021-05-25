import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumcharacteristicListComponent } from './mediumcharacteristic-list.component';

describe('MediumcharacteristicListComponent', () => {
  let component: MediumcharacteristicListComponent;
  let fixture: ComponentFixture<MediumcharacteristicListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediumcharacteristicListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumcharacteristicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
