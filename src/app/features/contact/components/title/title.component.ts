import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../../core/services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-title',
  imports: [TranslateModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
})
export class TitleComponent {
  translate = inject(TranslationService);
}
