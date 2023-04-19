import Main from "./components/Main";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Career from "./components/Timeline";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="overflow-hidden relative">
      <Main />
      <Projects />
      <Stack />
      <Career />
      <Footer />
    </div>
  );
}
