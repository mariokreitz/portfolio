import { Component } from '@angular/core';
import { TitleComponent } from './components/title/title.component';
import { MenuComponent } from './components/menu/menu.component';

@Component({
  selector: 'app-projects',
  imports: [TitleComponent, MenuComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {}
