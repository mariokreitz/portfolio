import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-title',
  imports: [ButtonComponent],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
})
export class TitleComponent {
  onNavigateToProjects() {
    window.location.href = '#projects';
  }
}
