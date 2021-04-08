import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { SingleProjectComponent } from './single-project/single-project.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProjectsComponent, SingleProjectComponent],
  imports: [CommonModule, RouterModule, ProjectsRoutingModule],
  exports: [ProjectsComponent, SingleProjectComponent],
})
export class ProjectsModule {}
