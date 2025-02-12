import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {
  constructor() {
    document.body.classList.add('light-theme'); // Apply light mode
  }

  projects = [
    {
      title: "Boston Airbnb Listings Analysis",
      techStack: [
        "Python", "Machine Learning", "Data Mining", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Random Forest Model", "Scikit-Learn", "Logistic Regression", "Data Cleaning","Data Visualization"
      ],
      githubLink: "https://github.com/Tianyu-Fang/Data-Mining-on-Airbnb-Listings",
      images: [
        "assets/projects/airbnb1.png",
        "assets/projects/airbnb2.png",
        "assets/projects/airbnb3.png",
        "assets/projects/airbnb4.png",
        "assets/projects/airbnb5.png",
        "assets/projects/airbnb6.png",
        "assets/projects/airbnb7.png",
        "assets/projects/airbnb8.png"
      
      ],
      goal: "This project focuses on data mining and predictive analytics using big data and machine learning techniques to analyze Airbnb listings. The objective is to uncover patterns in pricing, availability, and host behaviors while predicting availability rates based on key listing attributes.",
      description: `
        <ul>
          <li>Gathered over 600,000 lines of data from Airbnb listings using <span class="important">Python</span> to uncover patterns in price, availability, and ratings.</li>
          <li>Handled missing values and normalized data with <span class="important">Pandas</span>. Categorized numerical ranges for analysis using <span class="important">NumPy</span>.</li>
          <li>Investigated the relationship between availability rates, room types, property types, and host response rates. Created <span class="important">visualizations using Matplotlib and Seaborn</span> to show how these factors influence prices and availability.</li>
          <li>Built and trained a <span class="important">Random Forest model</span> using <span class="important">Scikit-learn</span> to predict availability rates based on various features.</li>
          <li>Evaluated model performance with metrics such as <span class="important">RMSE</span>, <span class="important">MAE</span>, and <span class="important">R-squared</span> values using <span class="important">Scikit-learn</span>. Identified key factors influencing Airbnb listing performance through feature importance analysis.</li>
        </ul>
    `,
      currentIndex: 0,
      category:"data"
    },
    {
      title: "Bird-Strike Incidents Database Design and Analysis",
      techStack: [
        "Python", "Relational Datahase", "SQLite", "UML Diagram", "Google Colab", "Data Cleaning", "Data Visualization"
      ],
      githubLink: "https://github.com/Tianyu-Fang/Bird-Strike-Incidents-Database-Design-and-Analysis",
      images: [
        "assets/projects/bird1.jpg",
        "assets/projects/bird2.jpg",
        "assets/projects/bird3.jpg",
        "assets/projects/bird4.jpg",
        "assets/projects/bird5.jpg",
        "assets/projects/bird6.jpg",
        "assets/projects/bird7.jpg",
      ],
      goal: "This project involves designing and implementing a database to help America's Federal Aviation Authority (FAA) organize and analyze bird-strike incidents data. The database will assist pilots in recording and analyzing data related to incidents where birds have collided with planes. The project includes several stages from conceptual modeling to presenting results through queries and visualizations.",
      description: `
        <ul>
          <li>Develop a comprehensive <span class="important">database</span> for the Federal Aviation Authority to organize and analyze bird-strike incident data.</li>
          <li>Designed a <span class="important">UML Class Diagram</span> to outline the conceptual model, transformed it into a <span class="important">Relational Schema</span>, and implemented it into an <span class="important">SQLite database using Python and SQL query</span> in Google Colab.</li>
          <li>Programmatically loaded data into the database, and conducted <span class="important">data cleaning</span> to handle anomalies, missing values, and data type conversions, ensuring the dataset's <span class="important">reliability</span> and <span class="important">consistency</span>.</li>
          <li>Developed and executed complex SQL queries to extract insights from the database, and <span class="important">visualized</span> the results.</li>
        </ul>
    `,
      currentIndex: 0,
      category:"data"
    },
    {
      title: "Host Country Analysis in Olympic Games",
      techStack: [
        "Python", "Machine Learning", "Big Data Analysis", "SQLite", "Query Optimization", "Pandas", "NumPy", "Matplotlib", "Random Forest Model", "Scikit-Learn", "Logistic Regression","Data Visualization"
      ],
      githubLink: "https://github.com/Tianyu-Fang/Host-Country-Analysis-in-Olympic-Games",
      images: [
        "assets/projects/olympic1.png",
        "assets/projects/olympic2.png",
        "assets/projects/olympic3.png",
        "assets/projects/olympic4.png",
        "assets/projects/olympic5.png",
        "assets/projects/olympic6.png",
        "assets/projects/olympic7.png",
        "assets/projects/olympic8.png",
        "assets/projects/olympic9.png",
        "assets/projects/olympic10.png",
        "assets/projects/olympic11.png",
        "assets/projects/olympic12.png",
        "assets/projects/olympic13.png",
        "assets/projects/olympic14.png",
        "assets/projects/olympic15.png",
        "assets/projects/olympic16.png",
      ],
      goal: "This project analyzes the performance of host countries in the Olympic Games from Athens 1896 to Beijing 2022. By leveraging data mining and visualization techniques, we explore whether hosting the Olympics leads to higher medal counts and examine various trends in athlete and event data.",
      description: `
        <ul>
          <li>Investigated the "Host Country Effect" on Olympic medal counts (1896–2022) to analyze the impact of hosting performance.</li>
          <li>Streamlined the processing of over <span class="important">300,000 records into a clean, standardized dataset</span> by resolving data quality issues, optimizing queries, and building efficient data pipelines using<span class="important"> Python (pandas, numpy, matplotlib)</span> and <span class="important">SQLite</span>.</li>
          <li>Optimized data usability and reliability by <span class="important">reducing processing time by 30% through query optimization</span> while identifying and resolving anomalies to ensure analytical accuracy. </li>
          <li>Built a <span class="important">Random Forest model</span> that predicted the top five countries likely to win the most medals at the 2024 Paris Olympics with 100% accuracy, validated the “Host Country Effect” with trend analysis, and <span class="important">visualized with charts using matplotlib</span>. </li>
        </ul>
    `,
      currentIndex: 0,
      category:"data"
    },
    {
      title: "WeChat History Message Analysis",
      techStack: [
        "Python",  "Pandas", "NumPy", "Matplotlib", "Seaborn", "Word Cloud", "Scikit-Learn", "NLP", "Word Segmentation", "Data Visualization", "Scripting"
      ],
      githubLink: "https://github.com/Tianyu-Fang",
      images: [
        "assets/projects/wechat1.png",
        "assets/projects/wechat2.png",
        "assets/projects/wechat3.png",
        "assets/projects/wechat4.png",
        "assets/projects/wechat5.png",
        "assets/projects/wechat6.png"
      ],
      goal: "This project exports the chat history from WeChat, analyzes the pattern, and uses python for visualization.",
      description: `
        <ul>
          <li>Analyzed WeChat chat history to extract insights on message trends, sender ratios, and message types using <span class="important">Python (pandas, numpy, matplotlib, seaborn)</span>. </li>
          <li><span class="important">Processed and cleaned 10,000+ messages</span> from WeChat CSV exports by handling missing values, formatting timestamps, and categorizing message types for structured analysis. </li>
          <li><span class="important">Generated interactive visualizations</span>, including word clouds, message type distributions, sender contribution ratios, and weekly activity trends, using <span class="important">WordCloud</span>, <span class="important">matplotlib</span>, and <span class="important">seaborn</span>. </li>
          <li>Optimized data processing efficiency, reducing execution time by <span class="important">structuring efficient data pipelines</span> and <span class="important">leveraging vectorized pandas operations</span> for faster analysis. </li>
          <li>Implemented <span class="important">natural language processing (NLP) techniques</span> with Jieba for Chinese <span class="important">word segmentation</span>, enabling accurate word cloud generation from chat text. </li>
          <li>Developed statistical insights by evaluating message frequency, engagement trends, and peak communication periods, <span class="important">uncovering meaningful behavioral patterns</span>. </li>
          <li><span class="important">Automated chat analysis workflows with Python scripts</span> to systematically generate reports and visual summaries, ensuring reproducibility and ease of use. </li>
        </ul>
    `,
      currentIndex: 0,
      category:"data"
    }
  ]

  prevImage(index: number) {
    this.projects[index].currentIndex =
      (this.projects[index].currentIndex - 1 + this.projects[index].images.length) % this.projects[index].images.length;
  }

  nextImage(index: number) {
    this.projects[index].currentIndex =
      (this.projects[index].currentIndex + 1) % this.projects[index].images.length;
  }


  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
