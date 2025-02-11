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
        "Java", "JavaScript", "HTML", "CSS", "jQuery", "Ajax", "MySQL", "Tomcat", "Eclipse", "User Authentication", "Authorization"
      ],
      githubLink: "https://github.com/Tianyu-Fang/Java-Electronic-Shopping-Mall-",
      images: [
        "assets/projects/eshopUI_product_management.png",
        "assets/projects/eshopUI_category_management.png",
        "assets/projects/eshopUI_user_management.png",
        "assets/projects/eshopUI_admin_menu.png",
        "assets/projects/eshopUI_manage_address.png",
        "assets/projects/eshopUI_cart.jpg",
        "assets/projects/eshopUI_payment.jpg",
        "assets/projects/eshopUI_order_confirmation.png",
        "assets/projects/eshopUI_cart.png",
        "assets/projects/eshopUI_product_detail.png",
        "assets/projects/eshopUI_product_list.png",
        "assets/projects/eshopUI_reset_password.png",
        "assets/projects/eshopUI_register.jpg",
        "assets/projects/eshopProjectArchitecture.png",
        "assets/projects/eshopPackageDiagramMVC.png",
        "assets/projects/eshopDatabaseRelationDiagram.png"
      ],
      goal: "E-Shop is an online shopping platform for purchasing programming-related books. Developed with Java EE, it features a structured front-end and back-end system, allowing users to browse, purchase, and manage book orders efficiently. Admins have additional privileges for website maintenance and database management.",
      description: `
        <ul>
          <li>Designed a comprehensive e-commerce platform with user-friendly interfaces using <span class="highlight">HTML</span>, <span class="highlight">CSS</span>, <span class="highlight">JavaScript</span>, and <span class="highlight">Ajax</span> for real-time updates.</li>
          <li>Developed backend functionalities with <span class="highlight">Java Servlets</span>, <span class="highlight">JavaBeans</span>, and <span class="highlight">DAO patterns</span> ensuring efficient and secure CRUD operations. Implemented a robust <span class="highlight">MySQL</span> database schema for users, products, orders, and categories.</li>
          <li>Ensured secure <span class="highlight">user authentication</span> and authorization through <span class="highlight">filters</span>, preventing unauthorized access and duplicate registrations.</li>
        </ul>
    `,
      currentIndex: 0,
      category:"website"
    },
    {
      title: "C# E-Commerce Website",
      techStack: [
        "C#", "ASP.NET", "HTML", "CSS", "ASPX", "Bootstrap"
      ],
      githubLink: "https://github.com/Tianyu-Fang/E-Commerce-Web-Application",
      images: [
        "assets/projects/shoestore1.png"
      ],
      goal: "Designed and developed a comprehensive e-commerce web application. Utilized ASP.NET and C# for backend development, with frontend components in ASPX and CSS for styling.",     
      description: `
        <ul>
          <li>Designed and implemented <span class="highlight">dynamic</span> homepage content, developed detailed product pages for accurate data presentation, and managed secure payment transactions with <span class="highlight">robust</span> validation and error handling.</li>
          <li>Created and styled web forms using <span class="highlight">ASPX</span> and <span class="highlight">CSS</span>, incorporating <span class="highlight">Bootstrap</span> for responsiveness.</li>
        </ul>
    `,
      currentIndex: 0,
      category:"website"
    },
    {
      title: "Health Track Android Mobile Application",
      techStack: [
        "Kotlin", "Android", "Figma", "RESTful API", "Firebase", "ViewModel", "Google Services JSON", "UI/UX Design", "Android Studio"
      ],
      githubLink: "https://github.com/Tianyu-Fang/Health-Track-Android-Mobile-App",
      images: [
        "assets/projects/painkiller1.png",
        "assets/projects/painkiller2.png",
        "assets/projects/painkiller3.png",
        "assets/projects/painkiller4.png",
        "assets/projects/painkiller5.png",
        "assets/projects/painkiller6.png",
        "assets/projects/painkiller7.png",
        "assets/projects/painkiller8.png",
        "assets/projects/painkiller9.png",
        "assets/projects/painkiller10.png",
        "assets/projects/painkiller11.png",
        "assets/projects/painkiller12.png"
      ],
      goal: "PainKiller is a mobile application designed to help individuals take control of their health and prevent chronic illnesses such as diabetes, heart disease, and obesity. It provides activity tracking, health monitoring, diet management, and expert consultation features.",     
      description: `
        <ul>
          <li>Designed and implemented a user-friendly <span class="highlight">Android App</span> with <span class="highlight">Figma</span>, <span class="highlight">Android Studio</span>, and <span class="highlight">Kotlin</span> featuring User Authentication, Activity Tracking, and Health Measurement, adhering to <span class="highlight">Google Material Design</span> principles. </li>
          <li>Utilized <span class="highlight">Firebase</span> for backend services and <span class="highlight">ViewModel</span> for efficient UI state management, ensuring scalability.</li>
          <li>Enabled real-time synchronization with external devices like smartwatches with <span class="highlight">98% data accuracy</span> and an average data refresh time of <span class="highlight">under 2 seconds</span>.</li>
          <li>Achieved a <span class="highlight">25% reduction in user drop-off rates</span> through intuitive navigation and accessible design, incorporating optimized color contrasts.</li>
        </ul>
    `,
      currentIndex: 0,
      category:"mobile"
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
