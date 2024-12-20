import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommittesComponent } from './committes.component';

describe('CommittesComponent', () => {
  let component: CommittesComponent;
  let fixture: ComponentFixture<CommittesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommittesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommittesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
