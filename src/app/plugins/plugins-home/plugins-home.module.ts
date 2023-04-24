import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluginsHomeComponent } from './plugins-home.component';
import { PluginsHomeRoutingModule } from './plugins-home-routing.module';
import { PluginConnectionsComponent } from '../plugin-connections/plugin-connections.component';




@NgModule({
  declarations: [
    PluginsHomeComponent,
    PluginConnectionsComponent
  ],
  imports: [
    CommonModule,
    PluginsHomeRoutingModule
  ]
})
export class PluginsHomeModule { }
