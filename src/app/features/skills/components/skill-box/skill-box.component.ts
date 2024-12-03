import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../../core/services/translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-skill-box',
  imports: [TranslateModule, ButtonComponent],
  templateUrl: './skill-box.component.html',
  styleUrl: './skill-box.component.scss',
})
export class SkillBoxComponent {
  translate = inject(TranslationService);
}
