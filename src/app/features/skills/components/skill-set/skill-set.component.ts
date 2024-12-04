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
      img: 'HTML.svg',
      effectClass: 'bounce',
      openModal: false,
    },
    {
      name: 'CSS',
      img: 'CSS.svg',
      effectClass: 'bounce',
      openModal: false,
    },
    {
      name: 'JavaScript',
      img: 'JavaScript.svg',
      effectClass: 'bounce',
      openModal: false,
    },
    {
      name: 'Material Design',
      img: 'Material Design.svg',
      effectClass: 'bounce',
      openModal: false,
    },
    {
      name: 'TypeScript',
      img: 'TypeScript.svg',
      effectClass: 'bounce',
      openModal: false,
    },
    {
      name: 'Angular',
      img: 'Angular.svg',
      effectClass: 'bounce',
      openModal: false,
    },
    {
      name: 'Firebase',
      img: 'Firebase.svg',
      effectClass: 'bounce',
      openModal: false,
    },
    {
      name: 'Git',
      img: 'Git.svg',
      effectClass: 'bounce',
      openModal: false,
    },
    {
      name: 'Rest-Api',
      img: 'Rest-Api.svg',
      effectClass: 'bounce',
      openModal: false,
    },
    {
      name: 'Scrum',
      img: 'Scrum.svg',
      effectClass: 'bounce',
      openModal: false,
    },
    {
      name: 'Growth mindset',
      img: 'GrowthMindset.svg',
      effectClass: 'scale',
      openModal: true,
    },
  ];
}
