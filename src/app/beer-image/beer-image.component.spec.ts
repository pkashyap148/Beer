import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerImageComponent } from './beer-image.component';

describe('BeerImageComponent', () => {
  let component: BeerImageComponent;
  let fixture: ComponentFixture<BeerImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeerImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
