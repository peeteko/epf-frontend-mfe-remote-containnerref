import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginsHomeComponent } from './plugins-home.component';

describe('PluginsHomeComponent', () => {
  let component: PluginsHomeComponent;
  let fixture: ComponentFixture<PluginsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluginsHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PluginsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
