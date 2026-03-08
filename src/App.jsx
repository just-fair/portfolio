import "./App.css";
import { experiences, feedbacks, projects } from "./data";
import ExperienceSection from "./components/ExperienceSection";
import FeedbackSection from "./components/FeedbackSection";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import TerminalFooter from "./components/TerminalFooter";
import TerminalHeader from "./components/TerminalHeader";

function App() {
  return (
    <main className="portfolio">
      <div className="ambient-glow" aria-hidden="true" />
      <div className="terminal">
        <TerminalHeader />
        <HeroSection />
        <ExperienceSection experiences={experiences} />
        <ProjectsSection projects={projects} />
        <FeedbackSection feedbacks={feedbacks} />
        <TerminalFooter />
      </div>
    </main>
  );
}

export default App;
