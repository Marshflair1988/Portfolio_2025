export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export const personalInfo = {
  name: 'Marsh',
  title: 'Frontend Developer',
  bio: 'Im a Passionate developer with a love for creating beautiful, functional, and user-friendly applications. I enjoy turning complex problems into simple, elegant solutions.',
  email: 'marshwoolgar@gmail.com',
  linkedin: 'https://linkedin.com/in/marshwoolgar',
  github: 'https://github.com/marshflair1988',
  languages: 'Native English',
};

export const experiences: Experience[] = [
  {
    title: 'Junior Frontend Developer',
    company: 'Freelance',
    period: '2022 - Present',
    description: 'Building responsive websites and applications using modern frontend technologies, focusing on clean UI, accessibility, and performance.',
  },
  
];

export const education: Education[] = [
  {
    degree: 'Bachelor Degree in Frontend Development',
    institution: 'Noroff School of Technology and Digital Media',
    period: '2023 - 2025',
  },
];

export const interests: string[] = [
  'Web Development',
  'UI/UX Design',
  'Open Source',
  'Photography',
  'Reading',
  'Traveling',
  'Gaming',
  'Artificial Intelligence',
];


