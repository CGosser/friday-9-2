import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigFeaturedComponent } from './big-featured.component';

describe('BigFeaturedComponent', () => {
  let component: BigFeaturedComponent;
  let fixture: ComponentFixture<BigFeaturedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigFeaturedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
