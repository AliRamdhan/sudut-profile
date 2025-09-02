import { ReactNode } from "react";

export interface showcaseType {
  title: string;
  description: string;
  imgSrc: string;
  href: string;
}

export interface pointItem {
  icon: ReactNode;
  label: string;
  description: string;
}

export interface contactItem {
  icon: ReactNode;
  label: string;
  description: string;
  highlight: string;
}
