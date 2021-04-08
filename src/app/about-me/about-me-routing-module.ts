import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me.component';

const aboutMeRoutes: Routes = [
  {
    path: '',
    component: AboutMeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(aboutMeRoutes)],
  exports: [RouterModule],
})
export class AboutMeRoutingModule {}