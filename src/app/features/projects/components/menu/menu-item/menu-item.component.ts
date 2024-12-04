import { Component, Input } from '@angular/core';
import { Project } from '../../../../../types/projects/project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-item',
  imports: [CommonModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
})
export class MenuItemComponent {
  @Input() project!: Project;
  @Input() isLast!: boolean;
}
