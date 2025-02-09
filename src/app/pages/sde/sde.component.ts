import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-sde',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sde.component.html',
  styleUrl: './sde.component.css'
})
export class SdeComponent {
  constructor() {
    document.body.classList.remove('light-theme'); //dark mode
  }

  projects = [
    {
      title: "Manga Review Platform",
      techStack: "JavaScript, unit testing, React, RESTful APIs, CI/CD, GitHub Actions, Node.js",
      githubLink: "https://github.com/your-manga-review-repo",
      images: [
        "assets/projects/manga1.png",
        "assets/projects/manga2.png",
        "assets/projects/manga3.png"
      ],
      goal: "Developed a full-stack web application for manga reviews, with responsive UI components using JavaScript and React, and supporting CRUD operations.",
      description: `
        <ul>
          <li>Designed and integrated a <span class="highlight">responsive UI/UX</span> with <span class="highlight">Bootstrap</span>, ensuring accessibility across devices.</li>
          <li>Enabled test automation with <span class="highlight">Cypress</span>, automated CI/CD pipelines with <span class="highlight">GitHub Actions</span>.</li>
          <li>Deployed on <span class="highlight">GitHub Pages</span> and <span class="highlight">AWS Amplify</span>, ensuring seamless updates and custom 404 handling.</li>
        </ul>
    `,
      currentIndex: 0,
      category:"website"
    },
    {
      title: "Portfolio Website",
      techStack: "Angular, TypeScript, Bootstrap, GitHub Pages, GitHub Actions (CI/CD), test automation, AWS Amplify",
      githubLink: "https://github.com/Tianyu-Fang/tianyu-fang.github.io",
      images: [
        "assets/projects/portfolio1.png",
        "assets/projects/portfolio2.png",
        "assets/projects/portfolio3.png"
      ],
      goal: "Developed a responsive, scalable single-page portfolio website using Angular, and TypeScript, implementing modular components, dynamic routing, and theming to showcase software development projects.",
      description: `
      <ul>
        <li>Designed and integrated a <span class="highlight">responsive UI/UX</span> with <span class="highlight">Bootstrap</span>, ensuring accessibility across devices.</li>
        <li>Enabled test automation with <span class="highlight">Cypress</span>, automated CI/CD pipelines with <span class="highlight">GitHub Actions</span>.</li>
        <li>Deployed on <span class="highlight">GitHub Pages</span> and <span class="highlight">AWS Amplify</span>, ensuring seamless updates and custom 404 handling.</li>
      </ul>
    `,   
      
      currentIndex: 0,
      category:"website"
    }
  ];

  prevImage(index: number) {
    this.projects[index].currentIndex =
      (this.projects[index].currentIndex - 1 + this.projects[index].images.length) % this.projects[index].images.length;
  }

  nextImage(index: number) {
    this.projects[index].currentIndex =
      (this.projects[index].currentIndex + 1) % this.projects[index].images.length;
  }

  scrollTo(categoryId: string) {
    const element = document.getElementById(categoryId);
    if (element) {
      const yOffset = -100; // Adjust the offset value as needed
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }
  

}
