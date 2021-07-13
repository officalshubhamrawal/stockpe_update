import Mid1 from "./comp/Mid1";
import Mid2 from "./comp/Mid2";
import Chat from "./comp/Chat";
import "./App.css";
import Footer from "./comp/Footer";
import Timer from "./comp/Timer";
import Home from "./comp/Home";
import scoresf from "./img/Scores final.png";
import score from "./img/Po.png";
import scores from "./img/Wit.png";

export default function App() {
  return (
    <div className="App ">
      <Home />
      <Timer />
      <img src={scoresf} alt="test" className="test_img" />
      <Mid1 />
      <img src={score} alt="test" className="test_img" />
      <Mid2 />
      <img src={scores} alt="test" className="test_img" />
      <Chat />
      <Footer />
    </div>
  );
}
