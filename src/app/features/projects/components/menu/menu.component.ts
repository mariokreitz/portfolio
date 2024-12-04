import { Component, Input } from '@angular/core';
import { Project } from '../../../../types/projects/project';
import { MenuItemComponent } from './menu-item/menu-item.component';

@Component({
  selector: 'app-menu',
  imports: [MenuItemComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  @Input() projects: Project[] = [];

  constructor() {
    this.projects = [
      {
        id: 0,
        name: 'Join',
        description:
          'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
        screenshotUrl:
          'https://raw.githubusercontent.com/mariokreitz/JOIN/refs/heads/main/screenshot.png',
        tech: [
          {
            imgSrc: 'HTML Small.svg',
            name: 'HTML',
          },
          {
            imgSrc: 'CSS Small.svg',
            name: 'CSS',
          },
          {
            imgSrc: 'Javascript Small.svg',
            name: 'Javascript',
          },
          {
            imgSrc: 'Firebase Small.svg',
            name: 'Firebase',
          },
        ],
        repoUrl: 'https://github.com/mariokreitz/JOIN',
        demoUrl: 'https://join.mario-kreitz.dev/',
      },
      {
        id: 1,
        name: 'Shadowhound',
        description:
          'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
        screenshotUrl:
          'https://raw.githubusercontent.com/mariokreitz/Shadowhound/refs/heads/main/screenshot_menu.png',
        tech: [
          {
            imgSrc: 'HTML Small.svg',
            name: 'HTML',
          },
          {
            imgSrc: 'CSS Small.svg',
            name: 'CSS',
          },
          {
            imgSrc: 'TypeScript Small.svg',
            name: 'TypeScript',
          },
        ],
        repoUrl: 'https://github.com/mariokreitz/Shadowhound',
        demoUrl: 'https://shadowhound.mario-kreitz.dev/',
      },
      {
        id: 2,
        name: 'Pokédex',
        description:
          'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
        screenshotUrl:
          'https://raw.githubusercontent.com/mariokreitz/Shadowhound/refs/heads/main/screenshot_menu.png',
        tech: [
          {
            imgSrc: 'Angular Small.svg',
            name: 'Angular',
          },
          {
            imgSrc: 'Rest-Api Small.svg',
            name: 'REST-Api',
          },
        ],
        repoUrl: 'https://github.com/mariokreitz/pokedex-v2',
        demoUrl: 'https://pokedex.mario-kreitz.dev/',
      },
    ];
  }
}
