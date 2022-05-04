import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetContainerComponent } from './widget-container.component';

describe('WidgetComponent', () => {
  let component: WidgetContainerComponent;
  let fixture: ComponentFixture<WidgetContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
