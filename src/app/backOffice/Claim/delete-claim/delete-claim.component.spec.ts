import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteClaimComponent } from './delete-claim.component';

describe('DeleteClaimComponent', () => {
  let component: DeleteClaimComponent;
  let fixture: ComponentFixture<DeleteClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteClaimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
