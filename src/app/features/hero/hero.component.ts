import { Component } from '@angular/core';
import { TitleComponent } from './components/title/title.component';

@Component({
  selector: 'app-hero',
  imports: [TitleComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {}
