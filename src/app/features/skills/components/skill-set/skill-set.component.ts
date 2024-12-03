import { Component } from '@angular/core';
import { SingleSkillComponent } from '../single-skill/single-skill.component';
import { Skill } from '../../../../types/skill/skill';

@Component({
  selector: 'app-skill-set',
  imports: [SingleSkillComponent],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss',
})
export class SkillSetComponent {
  skills: Skill[] = [
    {
      name: 'HTML',
      svg: 'HTML.svg',
      effectClass: 'bounce',
      openModal: false,
    },
    {
      name: 'CSS',
      svg: 'CSS.svg',
      effectClass: 'bounce',
      openModal: false,
    },
    {
      name: 'JavaScript',
      svg: 'JavaScript.svg',
      effectClass: 'bounce',
      openModal: false,
    },
    {
      name: 'Material Design',
      svg: 'Material Design.svg',
      effectClass: 'bounce',
      openModal: false,
    },
    {
      name: 'TypeScript',
      svg: 'TypeScript.svg',
      effectClass: 'bounce',
      openModal: false,
    },
    {
      name: 'Angular',
      svg: 'Angular.svg',
      effectClass: 'bounce',
      openModal: false,
    },
    {
      name: 'Firebase',
      svg: 'Firebase.svg',
      effectClass: 'bounce',
      openModal: false,
    },
    {
      name: 'Git',
      svg: 'Git.svg',
      effectClass: 'bounce',
      openModal: false,
    },
    {
      name: 'Rest-Api',
      svg: 'Rest-Api.svg',
      effectClass: 'bounce',
      openModal: false,
    },
    {
      name: 'Scrum',
      svg: 'Scrum.svg',
      effectClass: 'bounce',
      openModal: false,
    },
    {
      name: 'Growth mindset',
      svg: 'GrowthMindset.svg',
      effectClass: 'scale',
      openModal: true,
    },
  ];
}
