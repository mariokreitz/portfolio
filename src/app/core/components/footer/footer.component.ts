import { Component } from '@angular/core';
import { NavLink } from '../../../types/link/link';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
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
