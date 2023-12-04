import { ReactNode } from 'react';

export interface Data12QuizProps {
  id: number;
  quiz1: number;
  quiz2: number;
}

export interface LayoutProps {
  children: ReactNode;
  title: string;
  subTitle: string;
}
