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
  /**
   * List of skills
   * @property {Skill[]} skills - Array of Skill objects
   * @property {string} skills.name - Name of the skill
   * @property {string} skills.img - Path to the image of the skill
   * @property {string} skills.effectClass - Class name of the animation effect
   */
  skills: Skill[] = [
    {
      name: 'HTML',
      img: 'HTML.svg',
      effectClass: 'bounce',
    },
    {
      name: 'CSS',
      img: 'CSS.svg',
      effectClass: 'bounce',
    },
    {
      name: 'JavaScript',
      img: 'JavaScript.svg',
      effectClass: 'bounce',
    },
    {
      name: 'Material Design',
      img: 'Material Design.svg',
      effectClass: 'bounce',
    },
    {
      name: 'TypeScript',
      img: 'TypeScript.svg',
      effectClass: 'bounce',
    },
    {
      name: 'Angular',
      img: 'Angular.svg',
      effectClass: 'bounce',
    },
    {
      name: 'Firebase',
      img: 'Firebase.svg',
      effectClass: 'bounce',
    },
    {
      name: 'Git',
      img: 'Git.svg',
      effectClass: 'bounce',
    },
    {
      name: 'Rest-Api',
      img: 'Rest-Api.svg',
      effectClass: 'bounce',
    },
    {
      name: 'Scrum',
      img: 'Scrum.svg',
      effectClass: 'bounce',
    },
    {
      name: 'Growth mindset',
      img: 'GrowthMindset.svg',
      effectClass: 'scale',
      openModal: true,
    },
  ];
}
