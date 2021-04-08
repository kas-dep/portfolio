import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvComponent } from './cv.component';
import { CvRoutingModule } from './cv-routing-module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CvComponent],
  imports: [CommonModule, CvRoutingModule, RouterModule],
  exports: [CvComponent],
})
export class CvModule {}
