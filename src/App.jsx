import { useState, useRef } from "react";
import "./App.css";
import qusImage from "/lovequs.gif";
import acceptImage from "/accpect_love.gif";
import finalImage from "/simple crying.gif";
import firstCryImage from "/emotinal.gif";

function App() {
  const [message, setMessage] = useState("Tumi ki amke valobasho ??");
  const [image, setImage] = useState(qusImage);
  const noButtonRef = useRef(null);

  const handleYes = () => {
    setMessage("hehe, jantam tmi amke valobasho...");
    if (noButtonRef.current) {
      noButtonRef.current.style.display = "none";
    }
    setImage(acceptImage);
  };

  const handleNo = () => {
    if (message === "Tumi ki amke valobasho ??") {
      setMessage("vebe bolteso to...");
      setImage(firstCryImage);
    } else if (message === "vebe bolteso to...") {
      setMessage("R ekbar valo moto vebe nao..");
      setImage(finalImage);
    } else if (message === "R ekbar valo moto vebe nao..") {
      const randomTop = Math.random() * 500;
      const randomLeft = Math.random() * 1000;

      if (noButtonRef.current) {
        noButtonRef.current.style.position = "absolute";
        noButtonRef.current.style.top = `${randomTop}px`;
        noButtonRef.current.style.left = `${randomLeft}px`;
      }
    }
  };

  return (
    <section className="relative flex h-screen items-center">
      <div className="mx-auto w-1/3 space-y-5 rounded-2xl border-2 p-5 text-center">
        <img
          src={image}
          className="mx-auto w-96 rounded-xl border-2"
          alt="Emotion Image"
        />
        <h1 className="text-3xl">{message}</h1>
        <div className="flex justify-center gap-5">
          <button onClick={handleYes} className="btn btn-primary btn-lg">
            Yes
          </button>
          <button
            id="NO"
            ref={noButtonRef}
            onClick={handleNo}
            className="btn btn-primary btn-lg"
          >
            No
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;
