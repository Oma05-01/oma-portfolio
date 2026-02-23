import { LucideIcon } from "lucide-react";
import { Hospital, ShoppingBag, School } from "lucide-react";
export interface Project {
  title: string;
  slug: string;
  summary?: string;
  problem: string;
  architecture?: string;
  keyFocus?: string;
  stack?: string[];
  github: string;
  icon: LucideIcon;
  // 👇 Theme configuration
  theme: {
    primary: string;     // main accent color
    background: string;  // page background
    accent: string;  
    font: "inter" | "space" | "playfair" | "jetbrains";   // hover/glow color
  };
}

export const projects: Record<string, Project> = {
 "hospital-system": {
  title: "Hospital Management System",
  slug: "hospital-system",
  summary: "Role-based healthcare management platform.",
  problem: "A structured healthcare platform with role-based access control and API-first architecture.",
  architecture: "Modular Django backend with DRF endpoints and relational data modeling.",
  keyFocus: "Scalability, structured logic, and clean API separation.",
  stack: ["Django", "Django REST Framework", "PostgreSQL"],
  github: "https://github.com/Oma05-01",
  icon: Hospital,
  theme: {
    primary: "text-purple-400",
    background: "bg-slate-950",
    accent: "hover:text-purple-300",
    font: "space"
  },
},
  "odyce-store": {
    title: "Odyce Perfume Store",
    slug: "odyce-store",
    summary: "E-commerce platform for selling perfumes.",
    problem:
      "An e-commerce backend with authentication flows and clean separation of concerns.",
    architecture:"Structured Django models with authentication and order management logic.",
    keyFocus: "E-commerce logic and authentication flows.",
    stack: ["Django", "Python", "HTML", "CSS"],
      github: "https://github.com/Oma05-01",
      icon: ShoppingBag,
    theme: {
      primary: "text-blue-400",
      background: "bg-black",
      accent: "hover:text-blue-300",
      font: "playfair"
    },
  },
  "drid-platform": {
    title: "DRID Student Platform",
    slug: "drid-platform",
    summary: "Institutional digital system improvements.",
    problem:
      "Institutional digital systems required backend flow improvements and logic restructuring.",
    architecture:
      "Contributed backend logic fixes and improved system reliability during peak usage.",
    keyFocus: "Backend Logic Optimization",
    stack: ["Python", "Django"],
    github: "https://drid.uniben.edu/",
    icon: School,
    theme: {
      primary: "text-emerald-400",
      background: "bg-slate-900",
      accent: "hover:text-emerald-300",
      font: "jetbrains"
    },
  },
};


