import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './cv.component';

const cvRoutes: Routes = [
  {
    path: '',
    component: CvComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(cvRoutes)],
  exports: [RouterModule],
})
export class CvRoutingModule {}
