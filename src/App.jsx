import "./App.css";
import { Hero } from "@sections/Hero.jsx";
import { Interactive } from "@sections/InteractiveSection.jsx";
import { Creations } from "@sections/OurCreations.jsx";
import { Footer } from "@sections/Footer.jsx"

function App() {
  return (
    <>
      <Hero />
      <Interactive />
      <Creations />
      <Footer />
    </>
  );
}

export default App;