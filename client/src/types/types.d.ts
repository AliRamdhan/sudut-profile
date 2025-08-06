import { ReactNode } from "react";

export interface templateType {
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
