import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-infinite-scroller',
  imports: [],
  templateUrl: './infinite-scroller.component.html',
})

/**
 * A component that displays an infinite scroller of a given content.
 *
 * The scroller is animated if the user does not prefer reduced motion.
 *
 * @example
 * <app-infinite-scroller [content]="['tag1', 'tag2', 'tag3']"></app-infinite-scroller>
 *
 * @export
 * @class InfiniteScrollerComponent
 */
export class InfiniteScrollerComponent {
  @Input('content') scrollContent: string[] = [];

  /**
   * Lifecycle hook that is called after the view's initialization.
   * It sets up the infinite scroller by creating and appending the scroller inner element
   * based on the component's input content. If the user does not prefer reduced motion,
   * it adds animation to the scroller elements.
   */
  ngAfterViewInit() {
    const scrollerElement = document.getElementById(
      'scroller'
    ) as HTMLDivElement;
    if (!scrollerElement) return;

    const scrollerInnerElement = this.createScrollerInnerElement(
      this.scrollContent
    );
    scrollerElement.appendChild(scrollerInnerElement);

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches)
      this.addAnimation(scrollerElement, scrollerInnerElement);
  }

  /**
   * Creates an HTML element representing the scroller content from the given list of strings.
   * @param data a list of strings to be used as the content of the scroller
   * @returns an HTML element representing the scroller content
   */
  private createScrollerInnerElement(data: string[]): HTMLElement {
    const scrollerInnerElement = document.createElement('ul');
    scrollerInnerElement.id = 'scroller-inner';
    scrollerInnerElement.classList.add('tag-list', 'scroller-inner');

    data.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.textContent = item;
      scrollerInnerElement.appendChild(listItem);
    });

    return scrollerInnerElement;
  }

  /**
   * Adds the animation class to the scroller and clones the list items to create the infinite scroller effect.
   * @param scrollerElement the scroller element to modify
   * @param scrollerInnerElement the inner element of the scroller to modify
   */
  private addAnimation(
    scrollerElement: HTMLElement,
    scrollerInnerElement: HTMLElement
  ): void {
    scrollerElement.setAttribute('data-animated', 'true');

    Array.from(scrollerInnerElement.children).forEach((child) => {
      const clone = child.cloneNode(true) as HTMLLIElement;
      clone.setAttribute('aria-hidden', 'true');
      scrollerInnerElement.appendChild(clone);
    });
  }
}
