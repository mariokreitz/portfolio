import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../../core/services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-modal',
  imports: [TranslateModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  translate = inject(TranslationService);

  /**
   * Sets up event listeners for the modal toggler.
   *
   * We use the `document.getElementById` method to get the element, and then
   * cast it to an `HTMLImageElement` since we know it's an image.  If the element
   * doesn't exist, we return early.
   *
   * We then add event listeners for the `mouseenter`, `mouseleave`, and `click`
   * events.
   */
  constructor() {
    const modalToggler: HTMLImageElement | null = document.getElementById(
      'modalToggler'
    ) as HTMLImageElement;

    if (!modalToggler) return;

    modalToggler.addEventListener('mouseenter', this.handleMouseEnter);
    modalToggler.addEventListener('mouseleave', this.handleMouseLeave);
    modalToggler.addEventListener('click', this.handleClick);
  }

  /**
   * Handles the mouse enter event on modal toggler.
   * @param event - The mouse event object.
   */
  private handleMouseEnter(event: MouseEvent): void {
    const interestIn: HTMLElement | null =
      document.getElementById('interestIn');
    if (!interestIn) return;
    interestIn.classList.remove('d_none');
  }

  /**
   * Handles the mouse leave event on modal toggler.
   * @param event - The mouse event object.
   */
  private handleMouseLeave(event: MouseEvent): void {
    const interestIn: HTMLElement | null =
      document.getElementById('interestIn');
    if (!interestIn) return;
    interestIn.classList.add('d_none');
  }

  /**
   * Handles the click event on modal toggler.
   * @param event - The mouse event object.
   */
  private handleClick(event: MouseEvent): void {
    const interestIn: HTMLElement | null =
      document.getElementById('interestIn');
    if (!interestIn) return;
    interestIn.classList.toggle('d_none');
  }
}
