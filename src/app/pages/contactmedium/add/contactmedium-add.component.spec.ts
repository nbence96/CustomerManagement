import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactmediumAddComponent } from './contactmedium-add.component';

describe('ContactmediumAddComponent', () => {
  let component: ContactmediumAddComponent;
  let fixture: ComponentFixture<ContactmediumAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactmediumAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactmediumAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
