import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { RouterModule } from '@angular/router';
import { ContactRoutingModule } from './contact-routing-module';

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, ContactRoutingModule, RouterModule],
  exports: [ContactComponent],
})
export class ContactModule {}
