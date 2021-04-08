import { Component } from '@angular/core';
import { EnterHeader, EnterLeft, EnterRight } from '../animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    [EnterHeader],
    [EnterLeft],
    [EnterRight],
]
})
export class ContactComponent { constructor() { } }
