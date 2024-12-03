import { Component } from '@angular/core';
import { ImageComponent } from './components/image/image.component';
import { WhoAmIComponent } from './components/who-am-i/who-am-i.component';

@Component({
  selector: 'app-about',
  imports: [ImageComponent, WhoAmIComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
