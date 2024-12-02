import { Component, inject, Input } from '@angular/core';
import { TranslationService } from '../../service/translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [CommonModule, TranslateModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  translate = inject(TranslationService);

  @Input() buttonContent = 'default';
  @Input() buttonType: 'button' | 'submit' | 'reset' = 'button';
  @Input() buttonStyle: 'primary' | 'secondary' = 'primary';
}
