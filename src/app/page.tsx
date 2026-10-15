import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import ProfileSnippet from "@/components/ProfileSnippet";

// Reads the URL from Vercel in production, or falls back to local Django in development
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

async function getPortfolioData() {
  try {
    const res = await fetch(`\${API_URL}/api/categories/`, {
      next: { revalidate: 60 } 
    });
    if (!res.ok) throw new Error('Failed to fetch data');
    return res.json();
  } catch (error) {
    console.error("Backend offline", error);
    return []; // Fallback so the page doesn't crash if Django is off
  }
}

export default async function Home() {
  const categories = await getPortfolioData();

  return (
    <>
      <Hero />
      <ProfileSnippet />
      <About />
      
      {/* Pass the data to your existing Projects component */}
      <Projects categories={categories} />
      
      <Contact />
    </>
  );
}