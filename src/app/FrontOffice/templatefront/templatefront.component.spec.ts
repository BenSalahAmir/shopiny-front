import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatefrontComponent } from './templatefront.component';

describe('TemplatefrontComponent', () => {
  let component: TemplatefrontComponent;
  let fixture: ComponentFixture<TemplatefrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatefrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatefrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
