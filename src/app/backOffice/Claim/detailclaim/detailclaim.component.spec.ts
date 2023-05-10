import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailclaimComponent } from './detailclaim.component';

describe('DetailclaimComponent', () => {
  let component: DetailclaimComponent;
  let fixture: ComponentFixture<DetailclaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailclaimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
