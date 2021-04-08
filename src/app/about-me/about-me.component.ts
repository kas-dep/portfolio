import { Component } from '@angular/core';
import { EnterHeader, EnterLeft } from '../animations';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations: [
  [EnterLeft],
  [EnterHeader]
  ]
})

export class AboutMeComponent { constructor() { } }
