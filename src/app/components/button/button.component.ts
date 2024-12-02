import { Component, inject, Input } from '@angular/core';
import { TranslationService } from '../../service/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-button',
  imports: [TranslateModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  translate = inject(TranslationService);

  @Input() buttonContent = 'default';
}
