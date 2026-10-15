import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import ProfileSnippet from "@/components/ProfileSnippet";

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
    return [];
  }
}

export default async function Home() {
  const categories = await getPortfolioData();

  return (
    <>
      <Hero />
      <ProfileSnippet />
      <About />
      <Projects categories={categories} />
      <Contact />
    </>
  );
}