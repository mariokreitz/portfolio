import { Component, Input } from '@angular/core';
import { Project } from '../../../../types/projects/project';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuModalComponent } from './menu-modal/menu-modal.component';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-menu',
  imports: [MenuItemComponent, MenuModalComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  @Input() projects: Project[] = [];

  modalData: Project | null = null;

  constructor(private modalService: ModalService) {
    this.modalService.modalData$.subscribe((data) => {
      this.modalData = data;
    });

    this.projects = [
      {
        id: 1,
        name: 'Join',
        descriptionEN:
          'JOIN is a task manager inspired by the Kanban system, designed to track your teams tasks, responsibilities, and progress. With its intuitive interface, JOIN makes collaboration and task management simple.',
        descriptionDE:
          'Aufgabenmanager inspiriert vom Kanban-System. JOIN ist ein benutzerfreundliches und leistungsstarkes Tool, das dir hilft, die Aufgaben, Verantwortlichkeiten und den Fortschritt deines Teams zu verfolgen.',
        screenshotUrl:
          'https://raw.githubusercontent.com/mariokreitz/JOIN/refs/heads/main/screenshot.png',
        tech: [
          {
            imgSrc: 'HTML Small.svg',
            name: 'HTML',
          },
          {
            imgSrc: 'CSS Small.svg',
            name: 'CSS',
          },
          {
            imgSrc: 'Javascript Small.svg',
            name: 'Javascript',
          },
          {
            imgSrc: 'Firebase Small.svg',
            name: 'Firebase',
          },
        ],
        repoUrl: 'https://github.com/mariokreitz/JOIN',
        demoUrl: 'https://join.mario-kreitz.dev/',
      },
      {
        id: 2,
        name: 'Shadowhound',
        descriptionEN:
          'A side-scrolling jump-and-run game where players guide Shadowhound, a small black dog, through a shadowy forest, defeating monsters, earning points, and navigating a dark, minimalist world in black, gray, and white. ',
        descriptionDE:
          'Ein Side-Scrolling-Spiel, bei dem die Spieler einen schwarzen Hund, durch einen Wald steuern, Monster besiegen, Punkte sammeln und eine minimalistische Welt in Schwarz, Grau und Weiß erkunden.',
        screenshotUrl:
          'https://raw.githubusercontent.com/mariokreitz/Shadowhound/refs/heads/main/screenshot_menu.png',
        tech: [
          {
            imgSrc: 'HTML Small.svg',
            name: 'HTML',
          },
          {
            imgSrc: 'CSS Small.svg',
            name: 'CSS',
          },
          {
            imgSrc: 'TypeScript Small.svg',
            name: 'TypeScript',
          },
        ],
        repoUrl: 'https://github.com/mariokreitz/Shadowhound',
        demoUrl: 'https://shadowhound.mario-kreitz.dev/',
      },
      {
        id: 3,
        name: 'Pokédex',
        descriptionEN:
          'A digital encyclopedia of Pokémon, providing detailed information on each species, including their abilities, types, items, and sounds. Explore and discover the world of Pokémon with ease! ',
        descriptionDE:
          'Ein digitales Pokémon-Enzyklopädie, die detaillierte Informationen zu jeder Spezies bietet, einschließlich ihrer Fähigkeiten, Typen, Items und Geräusche. Entdecke die Welt der Pokémon mit Leichtigkeit!',
        screenshotUrl:
          'https://raw.githubusercontent.com/mariokreitz/pokedex-v2/refs/heads/main/src/assets/screenshot.png',
        tech: [
          {
            imgSrc: 'Angular Small.svg',
            name: 'Angular',
          },
          {
            imgSrc: 'Rest-Api Small.svg',
            name: 'REST-Api',
          },
        ],
        repoUrl: 'https://github.com/mariokreitz/pokedex-v2',
        demoUrl: 'https://pokedex.mario-kreitz.dev/',
      },
      {
        id: 4,
        name: 'Blog mit CMS (WIP)',
        descriptionEN:
          'A modern blog platform powered by a flexible CMS. Easily create, manage, and publish content with a user-friendly interface. Perfect for writers, teams, and content creators looking to stay organized and efficient.',
        descriptionDE:
          'Eine moderne Blog-Plattform mit einem flexiblen CMS. Erstelle, verwalte und veröffentliche Inhalte ganz einfach über eine benutzerfreundliche Oberfläche. Ideal für Autoren, Teams und Content-Ersteller, die organisiert und effizient arbeiten möchten.',
        screenshotUrl:
          'https://raw.githubusercontent.com/mariokreitz/blog-with-simple-cms/refs/heads/main/public/preview.png',
        tech: [
          {
            imgSrc: 'nextjs Small.svg',
            name: 'NextJS',
          },
          {
            imgSrc: 'mongodb Small.svg',
            name: 'MongoDB',
          },
        ],
        repoUrl: 'https://github.com/mariokreitz/blog-with-simple-cms',
        demoUrl: 'https://lipptattoos.vercel.app/',
      },
    ];
  }

  /**
   * Opens the modal with the given project as content.
   * Utilizes the ModalService to update the modal state.
   * @param project The project to be displayed in the modal.
   */
  openModal(project: Project) {
    this.modalService.openModal(project);
    document.body.style.overflowY = 'hidden';
  }

  /**
   * Closes the currently open modal by setting the modal data to null.
   * Utilizes the ModalService to update the modal state.
   */
  closeModal() {
    this.modalService.closeModal();
    document.body.style.overflowY = 'auto';
  }

  /**
   * Updates the modal data to the project with the given id.
   * If the id is equal to the number of projects, it wraps around to the first project.
   * @param id The id of the project to be displayed next.
   */
  nextProject(id: number) {
    const index = id === this.projects.length ? 0 : id;
    this.modalData = this.projects[index];
  }
}
