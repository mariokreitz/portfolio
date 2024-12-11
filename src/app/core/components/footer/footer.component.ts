import { Component } from '@angular/core';
import { NavLink } from '../../../types/link/link';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
/**
 * FooterComponent is responsible for rendering the footer section of the application.
 */
export class FooterComponent {
  /**
   * An array of links to be displayed in the footer.
   * Each link is an object containing a name, a URL, and an optional email flag.
   */
  links: NavLink[] = [
    {
      name: 'Github',
      url: 'https://github.com/mariokreitz',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mario-kreitz/',
    },
    {
      name: 'Email',
      url: 'contact@mario-kreitz.dev',
      email: true,
    },
    {
      name: 'Legal Notice',
      url: 'legal',
      sidemap: true,
    },
    {
      name: 'Imprint',
      url: 'imprint',
      sidemap: true,
    },
  ];
}
