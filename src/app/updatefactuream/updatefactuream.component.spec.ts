import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatefactureamComponent } from './updatefactuream.component';

describe('UpdatefactureamComponent', () => {
  let component: UpdatefactureamComponent;
  let fixture: ComponentFixture<UpdatefactureamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatefactureamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatefactureamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
