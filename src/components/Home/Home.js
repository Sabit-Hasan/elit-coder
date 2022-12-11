import Navbar from "./NavScrollBar";
import "./Home.css";
import Banner from "./Banner";
import Contest from "./Contest";
import Leaderboard from "./Leaderboard";
import Contact from "./Contact";
import Footer from "./Footer";
import LoginModal from "../Login/LoginModal";
import SignupModal from "../Login/SignupModal";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Contest />
      <Leaderboard />
      <Contact />
      <Footer />
      <LoginModal />
      <SignupModal />
    </>
  );
}