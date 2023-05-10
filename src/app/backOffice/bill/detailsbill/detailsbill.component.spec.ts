import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsbillComponent } from './detailsbill.component';

describe('DetailsbillComponent', () => {
  let component: DetailsbillComponent;
  let fixture: ComponentFixture<DetailsbillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsbillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
