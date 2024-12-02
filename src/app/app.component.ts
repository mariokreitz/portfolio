import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslationService } from './service/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';

  translate = inject(TranslationService);
}
