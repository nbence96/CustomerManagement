import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactmediumListComponent } from './contactmedium-list.component';

describe('ContactmediumListComponent', () => {
  let component: ContactmediumListComponent;
  let fixture: ComponentFixture<ContactmediumListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactmediumListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactmediumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
