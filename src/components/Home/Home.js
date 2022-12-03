import Navbar from "./NavScrollBar";
import "./Home.css";
import Banner from "./Banner";
import Contest from "./Contest";
import Leaderboard from "./Leaderboard";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Contest />
      <Leaderboard />
    </>
  );
}