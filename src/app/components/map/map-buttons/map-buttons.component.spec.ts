import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapButtonsComponent } from './map-buttons.component';

describe('MapButtonsComponent', () => {
  let component: MapButtonsComponent;
  let fixture: ComponentFixture<MapButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
