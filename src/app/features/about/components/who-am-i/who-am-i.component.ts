import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../../core/services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-who-am-i',
  imports: [TranslateModule],
  templateUrl: './who-am-i.component.html',
  styleUrl: './who-am-i.component.scss',
})
export class WhoAmIComponent {
  translate = inject(TranslationService);
}
