import { Component, Input } from '@angular/core';
import { Skill } from '../../../../types/skill/skill';
import { ModalComponent } from '../modal/modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-skill',
  imports: [ModalComponent, CommonModule],
  templateUrl: './single-skill.component.html',
  styleUrl: './single-skill.component.scss',
})
export class SingleSkillComponent {
  @Input({ required: true }) skill!: Skill;
}
