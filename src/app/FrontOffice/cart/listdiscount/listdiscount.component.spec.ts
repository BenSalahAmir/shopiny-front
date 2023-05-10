import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdiscountComponent } from './listdiscount.component';

describe('ListdiscountComponent', () => {
  let component: ListdiscountComponent;
  let fixture: ComponentFixture<ListdiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListdiscountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListdiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
