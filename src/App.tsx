import Hero from "./components/Hero";
import Opportunity from "./components/Opportunity";
import WhoWeAre from "./components/WhoWeAre";
import Strategy from "./components/Strategy";
import Deliverables from "./components/Deliverables";
import Team from "./components/Team";
import Investment from "./components/Investment";
import Footer from "./components/Footer";
import FloatingNav from "./components/FloatingNav";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <FloatingNav />
      <Hero />
      <div className="section-divider" />
      <Opportunity />
      <div className="section-divider" />
      <WhoWeAre />
      <div className="section-divider" />
      <Strategy />
      <div className="section-divider" />
      <Deliverables />
      <div className="section-divider" />
      <Team />
      <div className="section-divider" />
      <Investment />
      <Footer />
    </div>
  );
}
