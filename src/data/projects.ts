import { BookOpen, LucideIcon } from "lucide-react";
import { Hospital, ShoppingBag, School, Building2, Calculator } from "lucide-react";
import { Ledger } from "next/font/google";
export interface Project {
  title: string;
  slug: string;
  hasApi?: boolean;
  summary?: string;
  problem: string;
  architecture?: string;
  keyFocus?: string;
  stack?: string[];
  github?: string;
  liveUrl?: string;
  icon: LucideIcon;
  // 👇 Theme configuration
  theme: {
    primary: string;     // main accent color
    background: string;  // page background
    accent: string;  
    font: "inter" | "space" | "playfair" | "jetbrains" | "roboto" | "montserrat";   // hover/glow color
  };
  screenshots?: {
    title: string;
    description: string;
    image: string;
    isPdf?: boolean;
  }[];
}

export const projects: Record<string, Project> = {
  "lms-platform": {
  title: "Modular LMS & Enrollment Engine",
  slug: "lms-platform",
  summary: "A role-based learning management system with dynamic enrollment, payments, and content access control.",
  problem:
    "Learning platforms often struggle with enforcing structured access control across courses, packages, payments, and timed enrollments.",
  architecture:
    "Designed a modular backend architecture linking courses, packages, payments, enrollments, and content state logic. Implemented access control layers, quiz submission workflows, resource analytics, and real-time student progress tracking.",
  keyFocus: "Enrollment Lifecycle & Access State Engine",
  stack: ["Python", "Django", "Django REST Framework", "JWT", "Celery", "Channels"],
  github: "https://github.com/drid-uniben/django-backend",
  icon: BookOpen,
  theme: {
    primary: "text-indigo-400",
    background: "bg-slate-900",
    accent: "hover:text-indigo-300",
    font: "montserrat"
  },
},
 "hospital-system": {
  title: "Hospital Management System",
  slug: "hospital-system",
  summary: "Role-based healthcare management platform.",
  problem: "A structured healthcare platform with role-based access control and API-first architecture.",
  architecture: "Modular Django backend with DRF endpoints and relational data modeling.",
  keyFocus: "Scalability, structured logic, and clean API separation.",
  stack: ["Django", "Django REST Framework", "PostgreSQL"],
  github: "https://github.com/Oma05-01/hospital",
  icon: Hospital,
  theme: {
    primary: "text-purple-400",
    background: "bg-slate-950",
    accent: "hover:text-purple-300",
    font: "space"
  },
  screenshots: [
    {
      title: "Database Architecture",
      description: "Snippet showing the structured relational database models for patients and appointments.",
      image: "/docs/hospital-database-schema.pdf", // Path to your PDF in public/docs
      isPdf: true, 
    },
    {
      title: "High-Level System Architecture",
      description: "Architecture diagram illustrating the Flutter mobile client integration, synchronous RBAC API flow, and asynchronous background task delegation.",
      image: "/hospital-arch.png",// Save your Eraser export as this
      isPdf: false,
    },
    {
      title: "Authentication API via Postman",
      description: "Testing the JWT token generation and role-based access validation for doctors and admins.",
      image: "/postman-test.png" // Place an image named this in your 'public' folder
    },
  ],
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
      github: "https://github.com/Oma05-01/Odyce",
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
  "questnest": {
  title: "QuestNest Infrastructure Engine",
  slug: "questnest",
  summary: "Organisation-centric operational infrastructure powering rentals, payments, escrow automation, and audit traceability.",
  problem: "Traditional property platforms lack identity-first infrastructure, lifecycle enforcement, and operational traceability across payments, assets, and roles.",
  architecture: "Infrastructure-first Django system built around organisation scoping, lifecycle engines, rule-driven automation, and event-based audit logging.",
  keyFocus: "Operational automation, lifecycle validation, event-driven task creation, and multi-organisation asset management.",
  stack: ["Django", "PostgreSQL", "Event-Driven Architecture", "Role-Based Access Control"],
  github: "https://github.com/Oma05-01/QuestNest",
  icon: Building2, // or Home / Layers depending on your icon library
  theme: {
    primary: "text-stone-400",
    background: "bg-slate-950",
    accent: "hover:text-stone-300",
    font: "roboto"
  },
},
"tax-estimator" :{
  title: "Tax Estimation Engine",
  slug: "tax-estimator",
  hasApi: false, // Pure client-side WASM magic!
  problem: "Users needed a secure way to calculate complex multi-profile tax liabilities (Salaried, Freelancer, Hybrid) and process sensitive bank statements without the privacy risks of server-side data retention.",
  architecture: "Leveraged Pyodide (WebAssembly) to execute Python data processing entirely within the browser. Engineered context-aware React UI flows and a proportional tax distribution algorithm to accurately handle progressive fiscal brackets.",
  keyFocus: "WebAssembly (WASM) Integration & Secure Client-Side Processing",
  stack: ["React", "TypeScript", "Tailwind CSS", "WebAssembly", "Pyodide"],
  icon: Calculator,
  github: "https://github.com/Oma05-01/Tax_Esteem", // Uncomment if you want to show the code too
  theme: {
    primary: "text-blue-500",
    background: "bg-slate-900",
    accent: "hover:text-blue-400",
    font: "inter" // Replace with the font used in your portfolio
  },
  screenshots: [
    {
      title: "Tax Calculation Dashboard",
      description: "Interactive dashboard featuring granular transaction filtering, state-locked progress steppers, and dynamic taxability toggles.",
      image: "/images/tax-dashboard.png", // 👈 Make sure to take a screenshot and place it in public/images!
      isPdf: false,
    },
    {
      title: "PDF Report Generation",
      description: "Automated reporting system that transforms progressive bracket data into a downloadable, print-ready receipt format.",
      image: "/images/tax-report.png",
      isPdf: false,
    },
    {
      title: "Tax Breakdown Visualization",
      description: "Dynamic visual breakdown of tax liabilities across different profiles and brackets, showcasing the proportional distribution algorithm in action.",
      image: "/images/tax_es_breakd.png",
      isPdf: false,
    },
    {
      title: "Summary Report Generation",
      description: "Comprehensive summary report that aggregates tax liabilities, reliefs, and final payable amounts into a single section for user reference.",
      image: "/images/break_d.png",
      isPdf: false,
    }
  ]
  },
};


