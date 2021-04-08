import { Component, OnInit } from '@angular/core';
import { projects } from '../projects-data';
import { Project } from '../projects-data-model';
import { ActivatedRoute, Router } from '@angular/router';
import { EnterHeader, EnterLeft, EnterRight } from '../../animations';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss'],
  animations: [[EnterHeader], [EnterLeft], [EnterRight]],
})
export class SingleProjectComponent implements OnInit {
  title = '';
  description = '';
  imgSrc = '';
  url = '';
  githubLink? = '';
  areLinks = true;
  toOut = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(({ id }) => this.getProjectData(id));
  }

  getProjectData = (projectId: string) => {
    const project: Project = projects.find((item) => item.id === projectId)!;
    this.title = project.name;
    this.description = project.description;
    this.imgSrc = project.picture;
    this.url = project.url;
    this.githubLink = project.githubLink;
    this.areLinks = project.areLinks;
  };

  out() {
    this.toOut = true;
    setTimeout(() => {
      this.router.navigate(['/projekty']);
    }, 400);
  }
}
