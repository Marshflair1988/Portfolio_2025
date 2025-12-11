import { FaReact, FaGitAlt } from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMongodb,
} from 'react-icons/si';

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

export const skills: Skill[] = [
  { name: 'React', icon: FaReact, color: 'text-blue-500' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
  { name: 'TailwindCSS', icon: SiTailwindcss, color: 'text-cyan-500' },
  { name: 'HTML5', icon: SiHtml5, color: 'text-orange-500' },
  { name: 'CSS', icon: SiCss3, color: 'text-blue-500' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
  { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
];
