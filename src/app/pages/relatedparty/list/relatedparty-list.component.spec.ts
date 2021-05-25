import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedpartyListComponent } from './relatedparty-list.component';

describe('RelatedpartyListComponent', () => {
  let component: RelatedpartyListComponent;
  let fixture: ComponentFixture<RelatedpartyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatedpartyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedpartyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
