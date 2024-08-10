import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [
    // TimelineComponent
  ],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss',
})
export class SkillComponent implements OnInit {
  skillsSection = [
    {
      skillName: 'HTML-5',
      icon: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000',
    },
    {
      skillName: 'CSS3',
      icon: 'https://img.icons8.com/?size=100&id=21278&format=png&color=000000',
    },
    {
      skillName: 'SCSS',
      icon: 'https://img.icons8.com/?size=100&id=QBqFNfPPB2Kx&format=png&color=000000',
    },
    {
      skillName: 'Bootstrap',
      icon: 'https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000',
    },
    {
      skillName: 'MaterialUI',
      icon: 'https://img.icons8.com/?size=100&id=gFw7X5Tbl3ss&format=png&color=000000',
    },
    {
      skillName: 'JavaScript',
      icon: 'https://img.icons8.com/?size=100&id=108784&format=png&color=000000',
    },
    {
      skillName: 'Typescript',
      icon: 'https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000',
    },
    {
      skillName: 'SpringBoot',
      icon: '    https://img.icons8.com/?size=100&id=A3Ulk2RcONKs&format=png&color=000000',
    },
    {
      skillName: 'Express',
      icon: 'https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000',
    },
    {
      skillName: 'Github',
      icon: 'https://img.icons8.com/?size=100&id=wqGmdISvpm0c&format=png&color=000000',
    },
    {
      skillName: 'Angular',
      icon: 'https://img.icons8.com/?size=100&id=71257&format=png&color=000000',
    },
    {
      skillName: 'NodeJS',
      icon: 'https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000',
    },
    {
      skillName: 'ReactJS',
      icon: 'https://img.icons8.com/?size=100&id=lVitPDXqQKP8&format=png&color=000000',
    },
    {
      skillName: 'NextJS',
      icon: 'https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000',
    },
    {
      skillName: 'AWS services',
      icon: 'https://img.icons8.com/?size=100&id=33039&format=png&color=000000',
    },

    {
      skillName: 'MySQL',
      icon: 'https://img.icons8.com/?size=100&id=9nLaR5KFGjN0&format=png&color=000000',
    },
    {
      skillName: 'PostgreSQL',
      icon: 'https://img.icons8.com/?size=100&id=38561&format=png&color=000000',
    },
    {
      skillName: 'MongoDB',
      icon: 'https://img.icons8.com/?size=100&id=74402&format=png&color=000000',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
