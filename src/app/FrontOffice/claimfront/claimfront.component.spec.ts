import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimfrontComponent } from './claimfront.component';

describe('ClaimfrontComponent', () => {
  let component: ClaimfrontComponent;
  let fixture: ComponentFixture<ClaimfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimfrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
