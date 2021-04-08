import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { SingleProjectComponent } from './single-project/single-project.component';

const projectsRoutes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [{ path: 'kosmetyczka', component: SingleProjectComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(projectsRoutes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
