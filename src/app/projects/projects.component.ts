import { Component } from '@angular/core';
import { FalllDown } from '../animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [[FalllDown]]
})
export class ProjectsComponent { constructor() {} }
