import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerInfoComponent } from './beer-info.component';

describe('BeerInfoComponent', () => {
  let component: BeerInfoComponent;
  let fixture: ComponentFixture<BeerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
