import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedpartyAddComponent } from './relatedparty-add.component';

describe('RelatedpartyAddComponent', () => {
  let component: RelatedpartyAddComponent;
  let fixture: ComponentFixture<RelatedpartyAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatedpartyAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedpartyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
