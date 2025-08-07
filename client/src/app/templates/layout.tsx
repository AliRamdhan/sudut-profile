// app/templates/layout.tsx
"use client";

import { useEffect } from "react";

export default function TemplatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.documentElement.classList.add("dark", "scroll-smooth");
    return () => {
      document.documentElement.classList.remove("dark", "scroll-smooth");
    };
  }, []);

  return <main>{children}</main>;
}
