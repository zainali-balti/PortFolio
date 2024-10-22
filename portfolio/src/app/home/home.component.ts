import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  currentIndex = 0;
  slides!: NodeListOf<Element>;
  dots!: NodeListOf<Element>;

  constructor(private titleService: Title) {
    this.titleService.setTitle('Zain Ali - Home');
  }

  ngOnInit(): void {
    // Wait for the view to initialize and then query the DOM elements
    this.slides = document.querySelectorAll('.carousel-item');
    this.dots = document.querySelectorAll('.dot');

    // Show the first slide by default
    this.showSlide(0);

    // Automatically move to next slide every 5 seconds
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  showSlide(index: number): void {
    if (index >= this.slides.length) {
      this.currentIndex = 0;
    } else if (index < 0) {
      this.currentIndex = this.slides.length - 1;
    } else {
      this.currentIndex = index;
    }

    // Hide all slides
    this.slides.forEach(slide => {
      (slide as HTMLElement).style.opacity = '0';
      slide.classList.remove('active');
    });

    // Remove active class from dots
    this.dots.forEach(dot => dot.classList.remove('active'));

    // Show current slide
    (this.slides[this.currentIndex] as HTMLElement).style.opacity = '1';
    this.slides[this.currentIndex].classList.add('active');

    // Highlight the current dot
    this.dots[this.currentIndex].classList.add('active');
  }

  nextSlide(): void {
    this.showSlide(this.currentIndex + 1);
  }

  prevSlide(): void {
    this.showSlide(this.currentIndex - 1);
  }

  currentSlide(index: number): void {
    this.showSlide(index - 1);
  }

}
