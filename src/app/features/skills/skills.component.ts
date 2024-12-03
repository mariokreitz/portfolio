import { Component } from '@angular/core';
import { SkillBoxComponent } from './components/skill-box/skill-box.component';
import { SkillSetComponent } from './components/skill-set/skill-set.component';

@Component({
  selector: 'app-skills',
  imports: [SkillBoxComponent, SkillSetComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {}
