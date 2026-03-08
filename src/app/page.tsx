import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import ProfileSnippet from "@/components/ProfileSnippet";

export default function Home() {
  return (
    <>
      <Hero />
      <ProfileSnippet />
      <About />
      <Projects />
    </>
  );
}
