import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrornotfontComponent } from './errornotfont.component';

describe('ErrornotfontComponent', () => {
  let component: ErrornotfontComponent;
  let fixture: ComponentFixture<ErrornotfontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrornotfontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrornotfontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
