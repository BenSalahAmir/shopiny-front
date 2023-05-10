import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcartpendingComponent } from './listcartpending.component';

describe('ListcartpendingComponent', () => {
  let component: ListcartpendingComponent;
  let fixture: ComponentFixture<ListcartpendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcartpendingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcartpendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
