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
      techStack: [
        "JavaScript", "React", "HTML", "CSS", "Axios",
        "RESTful APIs", "CI/CD", "GitHub Actions",
        "Node.js", "Express.js", "Unit Testing",
        "PostgreSQL", "Prisma ORM", "Auth0",
        "Render", "Vercel"
      ],
      githubLink: "https://github.com/Tianyu-Fang/MangaReviewPlatform",
      images: [
        "assets/projects/manga1.png",
        "assets/projects/manga2.png",
        "assets/projects/manga3.png"
      ],
      goal: "A full-stack web application designed for manga enthusiasts to create, read, update, and delete (CRUD) manga reviews. The platform includes robust user authentication and authorization, ensuring a secure and user-friendly experience.",
      description: `
        <ul>
          <li>Developed a <span class="highlight">full-stack</span> web application for manga reviews, with responsive UI components using <span class="highlight">JavaScript</span> and <span class="highlight">React</span>, and supporting <span class="highlight">CRUD operations</span>. 
          Conduct <span class="highlight">unit testing</span> to ensure code quality and reliability.</li>
          <li>Created <span class="highlight">RESTful APIs</span> using <span class="highlight">Node.js</span> and <span class="highlight">Express.js</span>, with <span class="highlight">database</span> interactions managed through <span class="highlight">Prisma</span> and <span class="highlight">PostgreSQL</span>. </li>
          <li>Integrated <span class="highlight">Auth0</span> for secure <span class="highlight">user authentication</span> and registration processes.</li>
          <li>Deployed the frontend on <span class="highlight">Vercel</span> and backend API on <span class="highlight">Render</span>, ensuring seamless <span class="highlight">CI/CD workflow</span> with <span class="highlight">GitHub Actions</span>. </li>
        </ul>
    `,
      currentIndex: 0,
      category:"website"
    },
    {
      title: "Portfolio Website",
      techStack: [
        "Angular", "TypeScript", "Bootstrap", "HTML", "CSS", "GitHub Pages", "GitHub Actions", "CI/CD", "AWS Amplify", "Cypress", "Test Automation", "UI/UX Design"
      ],      
      githubLink: "https://github.com/Tianyu-Fang/tianyu-fang.github.io",
      images: [
        "assets/projects/portfolio1.png",
        "assets/projects/portfolio2.png",
        "assets/projects/portfolio3.png",
        "assets/projects/portfolio4.png"
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
    },
    {
      title: "Electronic Shopping Mall System",
      techStack: [
        "JavaScript", "React", "HTML", "CSS", "Axios",
        "RESTful APIs", "CI/CD", "GitHub Actions",
        "Node.js", "Express.js", "Unit Testing",
        "PostgreSQL", "Prisma ORM", "Auth0",
        "Render", "Vercel"
      ],
      githubLink: "https://github.com/Tianyu-Fang/MangaReviewPlatform",
      images: [
        "assets/projects/manga1.png",
        "assets/projects/manga2.png",
        "assets/projects/manga3.png"
      ],
      goal: "A full-stack web application designed for manga enthusiasts to create, read, update, and delete (CRUD) manga reviews. The platform includes robust user authentication and authorization, ensuring a secure and user-friendly experience.",
      description: `
        <ul>
          <li>Developed a <span class="highlight">full-stack</span> web application for manga reviews, with responsive UI components using <span class="highlight">JavaScript</span> and <span class="highlight">React</span>, and supporting <span class="highlight">CRUD operations</span>. 
          Conduct <span class="highlight">unit testing</span> to ensure code quality and reliability.</li>
          <li>Created <span class="highlight">RESTful APIs</span> using <span class="highlight">Node.js</span> and <span class="highlight">Express.js</span>, with <span class="highlight">database</span> interactions managed through <span class="highlight">Prisma</span> and <span class="highlight">PostgreSQL</span>. </li>
          <li>Integrated <span class="highlight">Auth0</span> for secure <span class="highlight">user authentication</span> and registration processes.</li>
          <li>Deployed the frontend on <span class="highlight">Vercel</span> and backend API on <span class="highlight">Render</span>, ensuring seamless <span class="highlight">CI/CD workflow</span> with <span class="highlight">GitHub Actions</span>. </li>
        </ul>
    `,
      currentIndex: 0,
      category:"website"
    },
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
