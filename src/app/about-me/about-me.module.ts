import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me.component';
import { RouterModule } from '@angular/router';
import { AboutMeRoutingModule } from './about-me-routing-module';

@NgModule({
  declarations: [AboutMeComponent],
  imports: [
    CommonModule, 
    AboutMeRoutingModule,
    RouterModule
  ],
  exports: [AboutMeComponent]
})
export class AboutMeModule { }
