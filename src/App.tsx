import { useState } from "react";
import "./app.css";
import { v4 as uuid } from "uuid";

import kuru1 from "/assets/kuru1.mp3";
import kuru2 from "/assets/kuru2.mp3";
import kuruto from "/assets/kuruto.mp3";
const AUDIO = [kuru1, kuru2, kuruto];
const GIF = ["./assets/hertaa1.gif", "./assets/hertaa2.gif"];

type Kururu = {
  id: string;
  src: string;
}[];

function App() {
  const [stack, setStack] = useState<Kururu>([]);
  const [count, setCounter] = useState(0);

  const deleteFromStack = (id: string) => {
    setStack((prevState) => prevState.filter((single) => single.id !== id));
  };

  const playKururu = () => {
    const id = uuid();
    const randomAudio = Math.floor(Math.random() * 3);
    const randomGif = Math.floor(Math.random() * 2);
    var audio = new Audio(AUDIO[randomAudio]);
    setStack((prevState) => [...prevState, { id: id, src: GIF[randomGif] }]);
    audio.play();
    setTimeout(() => deleteFromStack(id), 3000);
    setCounter((count) => count + 1);
  };

  return (
    <>
      <div className="btn-cont">
        <h1>Welcome to Kururu Generator</h1>
        <p>{count}</p>
        <button onClick={playKururu} className="counter-btn">
          Press for Kururu
        </button>
        <img className="herta-bg" src="./assets/hertaa1.gif" alt="" />
      </div>

      {stack.map((kururu) => {
        return (
          <img key={kururu.id} src={kururu.src} alt="herta" className="herta" />
        );
      })}
      <p className="greetings">привет детям yummyanime</p>
      <p className="dev">developed by SS company</p>
    </>
  );
}

export default App;
