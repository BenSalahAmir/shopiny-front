import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListebillComponent } from './listebill.component';

describe('ListebillComponent', () => {
  let component: ListebillComponent;
  let fixture: ComponentFixture<ListebillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListebillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListebillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
