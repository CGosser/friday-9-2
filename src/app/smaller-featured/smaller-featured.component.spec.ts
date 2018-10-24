import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallerFeaturedComponent } from './smaller-featured.component';

describe('SmallerFeaturedComponent', () => {
  let component: SmallerFeaturedComponent;
  let fixture: ComponentFixture<SmallerFeaturedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallerFeaturedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallerFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
