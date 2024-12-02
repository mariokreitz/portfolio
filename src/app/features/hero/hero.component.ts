import { Component } from '@angular/core';
import { TitleComponent } from './components/title/title.component';
import { InfiniteScrollerComponent } from './components/infinite-scroller/infinite-scroller.component';
import { LeftLateralComponent } from './components/left-lateral/left-lateral.component';
import { RightLateralComponent } from './components/right-lateral/right-lateral.component';

@Component({
  selector: 'app-hero',
  imports: [
    TitleComponent,
    InfiniteScrollerComponent,
    LeftLateralComponent,
    RightLateralComponent,
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  scrollerContent = [
    'Open to Work',
    '•',
    'Available for remote Work',
    '•',
    'Frontend Developer',
    '•',
    'Based in Stuttgart',
    '•',
    'Experienced with',
    '•',
    'HTML, CSS, JavaScript, Angular',
    '•',
  ];
}
