import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Project } from '../../../../../types/projects/project';
import { ButtonComponent } from '../../../../../shared/components/button/button.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu-modal',
  imports: [ButtonComponent, TranslateModule],
  templateUrl: './menu-modal.component.html',
  styleUrl: './menu-modal.component.scss',
})
export class MenuModalComponent {
  translate = inject(TranslateService);

  @Input('data') project: Project | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() next = new EventEmitter<number>();

  /**
   * Emits an event to signal that the modal should be closed.
   */
  closeModal() {
    this.close.emit();
  }

  /**
   * Emits an event with the id of the next project to be shown.
   * The id is only emitted if the component has a valid project.
   */
  nextProject() {
    if (this.project) this.next.emit(this.project.id);
  }

  /**
   * Opens the given URL in a new tab. Does nothing if `url` is `undefined`.
   * @param url The URL to open in a new tab.
   */
  openUrl(url: string | undefined) {
    if (url) window.open(url, '_blank');
  }
}
