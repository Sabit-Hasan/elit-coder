import Navbar from "./NavScrollBar";
import "./Home.css";
import Banner from "./Banner";
import Contest from "./Contest";
import Leaderboard from "./Leaderboard";
import Contact from "./Contact";
import Footer from "./Footer";
import LoginModal from "./LoginModal";

export default function Home() {
  return (
    <>
      <Banner />
      <Contest />
      <Leaderboard />
      <Contact />
      <Footer />
      <LoginModal />
    </>
  );
}