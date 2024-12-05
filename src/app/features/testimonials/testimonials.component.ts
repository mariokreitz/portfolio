import { Component } from '@angular/core';
import { TitleComponent } from './components/title/title.component';
import { CarouselComponent } from './components/carousel/carousel.component';

@Component({
  selector: 'app-testimonials',
  imports: [TitleComponent, CarouselComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {}
