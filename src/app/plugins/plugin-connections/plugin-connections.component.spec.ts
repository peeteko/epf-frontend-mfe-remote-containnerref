import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginConnectionsComponent } from './plugin-connections.component';

describe('PluginConnectionsComponent', () => {
  let component: PluginConnectionsComponent;
  let fixture: ComponentFixture<PluginConnectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluginConnectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PluginConnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
