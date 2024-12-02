import { Component, inject, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../core/services/translation.service';
import { ButtonStyle, ButtonType } from '../../../types/button/button';

@Component({
  selector: 'app-button',
  imports: [CommonModule, TranslateModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  translate = inject(TranslationService);

  @Input('content') buttonContent: string = 'default';
  @Input('type') buttonType: ButtonType = 'button';
  @Input('className') buttonStyle: ButtonStyle = 'primary';
  @Input('animated') buttonScroll: boolean = true;
}
