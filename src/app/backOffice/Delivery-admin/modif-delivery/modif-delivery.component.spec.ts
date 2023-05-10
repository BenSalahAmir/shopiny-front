import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifDeliveryComponent } from './modif-delivery.component';

describe('ModifDeliveryComponent', () => {
  let component: ModifDeliveryComponent;
  let fixture: ComponentFixture<ModifDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifDeliveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
