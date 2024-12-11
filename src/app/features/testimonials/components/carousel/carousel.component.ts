import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { Terstimonial } from '../../../../types/testimonials/testimonials';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  imports: [CardComponent, CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  /**
   * Index of the currently displayed testimonial
   */
  currentIndex: number = 0;

  /**
   * The list of testimonials
   *
   * @description The testimonials list is an array of objects
   * that contain the testimonial data.
   * The testimonial data object must contain the following properties:
   * - id: The unique identifier of the testimonial
   * - name: The name of the person who gave the testimonial
   * - contentEN: The testimonial text in English
   * - contentDE: The testimonial text in German
   */
  testimonials: Terstimonial[] = [
    {
      id: 1,
      name: 'Christian Zela',
      contentEN:
        'Mario Kreitz demonstrated excellent leadership skills as the project manager in our team project. His structured planning and careful preparation significantly eased teamwork, and he was always ready to offer support when needed. During stressful phases, he remained focused and motivated the team, allowing us to complete the project on time. His reliability and commitment had a lasting positive impact on the project.',
      contentDE:
        'Mario Kreitz hat im Rahmen unseres Teamprojekts als Projektleiter hervorragende Führungskompetenz bewiesen. Durch seine strukturierte Planung und sorgfältige Vorbereitung hat er die Teamarbeit deutlich erleichtert und war stets bereit, bei Bedarf zu unterstützen. In stressigen Phasen blieb er fokussiert und motivierte das Team, sodass wir das Projekt pünktlich abschließen konnten. Seine Zuverlässigkeit und sein Engagement haben das Projekt nachhaltig positiv beeinflusst.',
    },
    {
      id: 2,
      name: 'Marcel Schmidt',
      contentEN:
        'The collaboration with Mario Kreitz on the frontend project "Kochwelt" was consistently excellent. Mario not only demonstrated his technical skills and deep understanding of modern frontend technologies but also impressed with his dedication and professional work ethic. His clear and open communication was especially noteworthy and played a key role in the success of the project. Mario consistently offered proactive solutions to challenges and adapted flexibly to new requirements. His clean and efficient code structure reflects his high level of expertise and strong sense of quality. Furthermore, Mario was always reliable and punctual in meeting project milestones. The collaboration was smooth and conducted on an equal footing, which made the project work very enjoyable. Overall, working with Mario was a consistently positive experience, and I would recommend him without hesitation for future projects.',
      contentDE:
        'Die Zusammenarbeit mit Mario Kreitz im Rahmen des Frontend-Projekts „Kochwelt“ war durchweg hervorragend. Mario hat nicht nur seine technischen Fähigkeiten und sein tiefes Verständnis für moderne Frontend-Technologien unter Beweis gestellt, sondern auch durch sein Engagement und seine professionelle Arbeitsweise überzeugt.Besonders hervorzuheben ist seine klare und offene Kommunikation, die maßgeblich zum Erfolg des Projekts beigetragen hat. Mario hat stets proaktiv Lösungen für Herausforderungen angeboten und sich flexibel auf neue Anforderungen eingestellt. Seine saubere und effiziente Code-Struktur zeugt von hoher Fachkompetenz und einem ausgeprägten Sinn für Qualität.Darüber hinaus war Mario jederzeit zuverlässig und pünktlich in der Erfüllung der Projektmeilensteine. Die Zusammenarbeit verlief reibungslos und auf Augenhöhe, was die Projektarbeit sehr angenehm gemacht hat.Insgesamt war die Kooperation mit Mario eine durchweg positive Erfahrung, und ich würde ihn ohne Zögern für zukünftige Projekte weiterempfehlen.',
    },
    {
      id: 2,
      name: '',
      contentEN: '',
      contentDE: '',
    },
  ];

  /**
   * Switches to the previous testimonial in the list of testimonials.
   *
   * The index is calculated using the modulo operator to ensure that the
   * index wraps around to the end of the list when it reaches the start.
   */
  prevTestimonial() {
    this.currentIndex =
      (this.currentIndex - 1 + this.testimonials.length) %
      this.testimonials.length;
  }

  /**
   * Switches to the next testimonial in the list of testimonials.
   *
   * The index is calculated using the modulo operator to ensure that the
   * index wraps around to 0 when it reaches the end of the list.
   */
  nextTestimonial() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }
}
