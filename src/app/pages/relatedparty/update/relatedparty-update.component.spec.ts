import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedpartyUpdateComponent } from './relatedparty-update.component';

describe('RelatedpartyUpdateComponent', () => {
  let component: RelatedpartyUpdateComponent;
  let fixture: ComponentFixture<RelatedpartyUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatedpartyUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedpartyUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
