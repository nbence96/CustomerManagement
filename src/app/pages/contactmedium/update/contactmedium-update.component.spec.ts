import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactmediumUpdateComponent } from './contactmedium-update.component';

describe('ContactmediumUpdateComponent', () => {
  let component: ContactmediumUpdateComponent;
  let fixture: ComponentFixture<ContactmediumUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactmediumUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactmediumUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
