import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PluginsHomeComponent } from './plugins-home.component';

const routes: Routes = [{ path: '', component: PluginsHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PluginsHomeRoutingModule { }
