import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleProjectComponent } from './projects/single-project/single-project.component';

const routes: Routes = [
  {  path: '', redirectTo: 'projekty', pathMatch: 'full'},
  {path: 'projekty', loadChildren: () => import ('./projects/projects.module').then(m => m.ProjectsModule)},
  {path: 'o-mnie', loadChildren: () => import ('./about-me/about-me.module').then(m => m.AboutMeModule)},
  {path: 'kontakt', loadChildren: () => import ('./contact/contact.module').then(m => m.ContactModule)},
  {path: 'cv', loadChildren: () => import ('./cv/cv.module').then(m => m.CvModule)},
  {path: 'projekty/id', component: SingleProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
