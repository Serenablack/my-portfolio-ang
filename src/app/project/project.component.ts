import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  projects = [
    {
      name: 'E-commerce',
      description:
        'Developed a mini online market project for managing products, orders, and reviews with seamless admin, seller, and buyer interactions. Enhanced UX using Tailwind CSS and React form validation.',
      github: 'https://github.com/orgs/WAA-E-commerce-K-AS-2T/repositories',
      // url: 'https://ecommerce.com',
      // image: 'assets/images/ecommerce.jpg',
      technologies:
        'Spring Boot, React.js, React Redux, JWT, RESTful APIs, MySQL',
    },
    {
      name: 'Tasker',
      description:
        'Developed a mini task management tool like Jira. Implemented UI with PrimeNG, and features like login, signup, and task management using Angular reactive forms.',
      github: 'https://github.com/Serenablack/Tasker-Serenablack',
      // url: 'https://tasker.com',
      // image: 'assets/images/tasker.jpg',
      technologies: 'Angular, Node.js, Express.js, MongoDB, PrimeNG',
    },
    {
      name: 'News Portal',
      description:
        'Developed a news portal with Editor and Manager roles for article CRUD operations. Contributed to UI design, editor interface implementation, and API design for password recovery and data management using Cloudinary.',
      github: 'https://github.com/Serenablack/newsPortal',
      // url: 'https://news-portal.com',
      // image: 'assets/images/news-portal.jpg',
      technologies:
        'Next.js, TypeScript, Node.js, PostgreSQL, React Quill, Express, Axios, Multer, Nodemailer',
    },
  ];
}
