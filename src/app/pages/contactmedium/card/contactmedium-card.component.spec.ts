import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactmediumCardComponent } from './contactmedium-card.component';

describe('ContactmediumCardComponent', () => {
  let component: ContactmediumCardComponent;
  let fixture: ComponentFixture<ContactmediumCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactmediumCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactmediumCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
