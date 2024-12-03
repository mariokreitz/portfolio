import { Component } from '@angular/core';
import { HeroComponent } from '../../features/hero/hero.component';
import { AboutComponent } from '../../features/about/about.component';
import { SkillsComponent } from '../../features/skills/skills.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, AboutComponent, SkillsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
