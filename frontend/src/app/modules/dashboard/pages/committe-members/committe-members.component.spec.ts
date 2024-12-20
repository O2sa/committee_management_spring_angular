import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitteMembersComponent } from './committe-members.component';

describe('CommitteMembersComponent', () => {
  let component: CommitteMembersComponent;
  let fixture: ComponentFixture<CommitteMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommitteMembersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommitteMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
