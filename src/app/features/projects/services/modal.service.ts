import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Project } from '../../../types/projects/project';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalDataSubject = new BehaviorSubject<Project | null>(null);
  modalData$ = this.modalDataSubject.asObservable();

  openModal(project: Project) {
    this.modalDataSubject.next(project);
  }

  closeModal() {
    this.modalDataSubject.next(null);
  }
}
