import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedpartyCardComponent } from './relatedparty-card.component';

describe('RelatedpartyCardComponent', () => {
  let component: RelatedpartyCardComponent;
  let fixture: ComponentFixture<RelatedpartyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatedpartyCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedpartyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
