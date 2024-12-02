import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-cursor',
  imports: [CommonModule],
  templateUrl: './cursor.component.html',
  styleUrl: './cursor.component.scss',
})
export class CursorComponent {
  mouseX: number = 0;
  mouseY: number = 0;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }
}
