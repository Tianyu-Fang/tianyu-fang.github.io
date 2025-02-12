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
    {
      title: "Virtual Memory Simulator",
      techStack: [
        "C++", "Python", "GNU Make", "Bash", "DevOps", "CI/CD", "Unit Testing", "Test Automation", "Simulation"
      ],
      githubLink: "https://github.com/Tianyu-Fang/VirtualMemorySimulator",
      images: [
        "assets/projects/VMM1.png",
        "assets/projects/VMM2.png"
      ],
      goal: "The Virtual Memory Simulator is an implementation of a two-level page table that simulates memory management in an operating system. It supports configurable memory parameters, a clock page replacement algorithm, and a TLB (Translation Lookaside Buffer) with LRU eviction. The simulator aims to efficiently handle virtual memory allocation, address translation, and page replacement while optimizing space and time usage.",     
      description: `
        <ul>
          <li>Developed a <span class="highlight">configurable Virtual Memory Simulator</span> in <span class="highlight">C++</span> to model OS memory management, including address translation, TLB caching <span class="highlight">(96% hit rate)</span>, and <span class="highlight">two-level page table optimization</span> (reducing space usage by <span class="highlight">up to 2092×)</span>.</li>
          <li>Designed and implemented an  <span class="highlight">LRU-based TLB</span> and  <span class="highlight">clock page replacement algorithm</span>, minimizing memory overhead and improving page fault handling efficiency.</li>
          <li>Built an  <span class="highlight">automated GNU Make system</span> for  <span class="highlight">compilation, testing, and execution</span>, integrating  <span class="highlight">Bash scripting</span> for dynamic memory calculations and workload generation.</li>
          <li>Developed  <span class="highlight">unit tests</span> and  <span class="highlight">integrated CI/CD pipelines</span> to automate builds and validation, ensuring reliability and maintainability across environments.</li>
          <li>Created a  <span class="highlight">workload generation script using Python</span> to simulate real-world process memory access patterns, testing locality and efficiency under different workloads.</li>
        </ul>
    `,
      currentIndex: 0,
      category:"system"
    },
    {
      title: "Little Log File System",
      techStack: [
        "C++", "File System", "Unit Testing", "Test Automation", "Simulation"
      ],
      githubLink: "https://github.com/Tianyu-Fang/Little-Log-File-System",
      images: [
        "assets/projects/llfs1.png",
        "assets/projects/llfs2.png"
      ],
      goal: "The Little Log File System (LLFS) is a simplified file system implementation designed for educational purposes. It demonstrates the key principles of file system design, including disk management, metadata handling, crash recovery, and persistence.",     
      description: `
        <ul>
          <li>Developed a modular file system in <span class="highlight">C++</span> that supports file creation, reading, writing, deletion, and crash recovery, <span class="highlight">achieving 99.9% accuracy</span> in metadata validation during simulated crash recovery tests.</li>
          <li>Leveraged direct and indirect block pointers to support files up to <span class="highlight">4 GB</span>, enabling efficient large file management.</li>
          <li>Conducted benchmarks showing <span class="highlight">write speeds of 0.002 seconds</span> for 1 MB files and <span class="highlight">read speeds of 0.003 seconds</span>, demonstrating competitive performance for small-scale file systems.</li>
          <li>Validated disk consistency using hexdump, confirming <span class="highlight">100% correctness of written data and free block vector updates</span> in test scenarios.</li>
        </ul>
    `,
      currentIndex: 0,
      category:"system"
    },
    {
      title: "Improved Differential Fault Analysis of Grain-128AEAD ",
      techStack: [
        "Python", "Cybersecurity", "Cryptography", "Research", "Fault Attack", "Excel VBA", "Encryption Algorithm"
      ],
      githubLink: "https://www.oaepublish.com/articles/jsss.2023.42",
      images: [
        "assets/projects/research1.png",
        "assets/projects/research2.png",
        "assets/projects/research3.png",
        "assets/projects/research4.jpg"
      ],
      goal: "This research designed and enhanced fault attack models to analyze the security margin of the stream cipher - Grain-128AEAD.",     
      description: `
        <ul>
          <li>Improved attack feasibility, requiring 388 keystreams for a two-byte model and 279 keystreams for a four-byte model to identify target fault locations. Proposed countermeasures against the fault attacks that <span class="highlight">improved the security by 14%</span>.</li>
          <li>Developed and applied <span class="highlight">probabilistic random fault attacks</span> to more relaxed moderate control models. Utilized <span class="highlight">Python</span> to analyze the experimental data, processing millions of data points to achieve accurate and reliable results.</li>
          <li>Contributed significantly to the field of <span class="highlight">lightweight cryptography</span> by improving the understanding and effectiveness of fault attacks on <span class="highlight">encryption algorithms</span>.</li>
        </ul>
    `,
      currentIndex: 0,
      category:"system"
    },
    {
      title: "2D Adventure Game ",
      techStack: [
        "C#", "Unity", "2D Game", "Level Design", "Game Development", "Code Review"
      ],
      githubLink: "https://youtu.be/5N0kWajoJng?si=9tOGBlY4ViDYPVBi",
      images: [
        "assets/projects/game1.png",
        "assets/projects/game2.png",
        "assets/projects/game3.png",
        "assets/projects/game4.png",
        "assets/projects/game5.png",
        "assets/projects/game6.png",
        "assets/projects/game7.png",
        "assets/projects/game8.png",
        "assets/projects/game9.png",
        "assets/projects/game10.png"
      ],
      goal: "Led a team of five to design and develop a 2D game with six levels using Unity and C#, implemented game mechanics, managed assets, and ensured seamless NPC interaction and gameplay.",     
      description: `
        <ul>
          <li>Organized and led regular team meetings, assigned tasks, and addressed challenges. Delegated tasks based on team members' strengths and ensured clear responsibilities.</li>
          <li>Developed various scripts, organized assets and levels, optimized performance, conducted code reviews, and <span class="highlight">facilitated  testing and debugging sessions</span>.</li>

        </ul>
    `,
      currentIndex: 0,
      category:"game"
    },
    {
      title: "AI-Driven 2048 Game ",
      techStack: [
        "C++", "AI", "Machine Learning", "Expectimax Optimization Algotithm", "Game Development", "Easy Graphics Engine", "Bit Manipulation"
      ],
      githubLink: "https://github.com/Tianyu-Fang/AI-Driven-2048-Game",
      images: [
        "assets/projects/2048.jpg"
      ],
      goal: "Designed and developed an AI using the expectimax optimization algorithm using C++ to play the 2048 game to achieve the highest possible scores. With additional modes aim for the lowest possible scores and to play against human players.",     
      description: `
        <ul>
          <li>Applied <span class="highlight">bit manipulation</span> to optimize performance, implemented <span class="highlight">EGE for graphical representation</span>, performed <span class="highlight">heuristics-based evaluations</span> to guide the AI’s decision, and conducted extensive experiments to measure the AI’s performance.</li>
          <li>Achieved a <span class="highlight">100% success rate</span> for reaching tiles up to 16384 (2^14), with a <span class="highlight">36% probability of reaching 32768 (2^15)</span>.</li>
        </ul>
    `,
      currentIndex: 0,
      category:"ai"
    },
    {
      title: "Real-Time Waste Classification Mobile Application",
      techStack: [
        "Python", "PyTorch", "YOLO", "YOLO", "Android", "Kotlin", "Object Detection", "Object Classification"
      ],
      githubLink: "https://github.com/Tianyu-Fang/Real-Time-Waste-Classification-Android-Application",
      images: [
        "assets/projects/waste1.jpg",
        "assets/projects/waste2.jpg",
        "assets/projects/waste3.jpg"
      ],
      goal: "This project is a real-time object detection & classification system that can be used to sort waste into three categories: recyclable, compost and waste, the current repository contains part of the entire project, which is written in Kotlin and tested mostly on Android devices.",     
      description: `
        <ul>
          <li>Developed a <span class="highlight">waste classification Android mobile app</span> using <span class="highlight">PyTorch-based YOLOv8n</span>, enabling <span class="highlight">real-time object detection and classification</span> of waste materials with interactive user visualization.</li>
          <li>Achieved a real-time detection system with <span class="highlight">~92% mAP accuracy</span> and near <span class="highlight">real-time performance at ~120 FPS</span> for lightweight YOLOv8n inference.</li>
    `,
      currentIndex: 0,
      category:"ai"
    },
    {
      title: "3D Image Composer with Tensorflow",
      techStack: [
        "Python", "Tensorflow", "OpenCV", "Gradio", "Image Segmentation", "HuggingFace"
      ],
      githubLink: "https://huggingface.co/spaces/Tianyu-Fang/Lab4_3D_Image_Composer",
      images: [
        "assets/projects/3d1.jpg",
        "assets/projects/3d2.jpg",
        "assets/projects/3d3.jpg"
      ],
      goal: "This project focuses on image segmentation and stereoscopic 3D image generation using deep learning and computer vision techniques. The core idea is to extract people from images and seamlessly integrate them into customizable 3D scenes, creating anaglyph images with accurate depth perception.",     
      description: `
        <ul>
          <li>Utilized <span class="highlight">Python</span>, <span class="highlight">TensorFlow</span>, <span class="highlight">OpenCV</span>, and <span class="highlight">Segment Anything Model (SAM)</span> to segment persons from images and integrate them into <span class="highlight">stereoscopic 3D scenes</span>, built an interactive <span class="highlight">Gradio App deployed on HuggingFace</span>.</li>
          <li>Generated customizable anaglyph images with accurate depth perception by manipulating stereoscopic disparities, with a processing <span class="highlight">accuracy exceeding 90%</span> and an intuitive multi-step interface.</li>
        </ul>
    `,
      currentIndex: 0,
      category:"ai"
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
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  

}
