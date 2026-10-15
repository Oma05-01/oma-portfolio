import { 
  BookOpen, 
  Hospital, 
  ShoppingBag, 
  School, 
  Building2, 
  Calculator, 
  Code,
  LucideIcon 
} from "lucide-react";

// Map string keys stored in Django DB (icon_name) to Lucide Icon components
export const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Hospital,
  ShoppingBag,
  School,
  Building2,
  Calculator,
};

// Fallback icon when a string from the API doesn't match the map
export const DEFAULT_ICON = Code;

export interface Screenshot {
  title: string;
  description: string;
  image: string; // Full URL from Django REST Framework / Cloudinary
  isPdf?: boolean;
}

export interface ProjectTheme {
  primary: string;    // e.g. "text-indigo-400"
  background: string; // e.g. "bg-slate-900"
  accent: string;     // e.g. "hover:text-indigo-300"
  font: "inter" | "space" | "playfair" | "jetbrains" | "roboto" | "montserrat";
}

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
  icon?: LucideIcon | string; // Supports both Lucide components & raw API strings
  theme: ProjectTheme;
  screenshots?: Screenshot[];
}

// Helper to resolve an icon string name or component safely
export function getProjectIcon(iconNameOrComponent: LucideIcon | string | undefined): LucideIcon {
  if (typeof iconNameOrComponent === "string") {
    return iconMap[iconNameOrComponent] || DEFAULT_ICON;
  }
  return iconNameOrComponent || DEFAULT_ICON;
}