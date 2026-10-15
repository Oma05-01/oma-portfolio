import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import ProfileSnippet from "@/components/ProfileSnippet";

// 1. Fetch the data from your running Django server
async function getPortfolioData() {
  try {
    const res = await fetch('http://127.0.0.1:8000/api/categories/', {
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
  // 2. Await the data
  const categories = await getPortfolioData();

  return (
    <>
      <Hero />
      <ProfileSnippet />
      <About />
      
      {/* 3. Pass the data to your existing Projects component */}
      <Projects categories={categories} />
      
      <Contact />
    </>
  );
}