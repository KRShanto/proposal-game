import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import qus from "../public/lovequs.gif";
import accpect from "../public/accpect_love.gif";
import final from "../public/simple crying.gif";
import firstcry from "../public/emotinal.gif";

function App() {
  const [count, setCount] = useState(0);
  const [message, setmessage] = useState("Tumi ki amke valobasho ??");
  const [image, setimage] = useState(qus);

  // let top = 100
  // let left = 500

  const handleYES = () => {
    setmessage("hehe, jantam tmi amke valobasho...");
    document.getElementById("NO").style.display = "none";
    setimage(accpect);
  };

  const handleNO = () => {
    if (message == "Tumi ki amke valobasho ??") {
      setmessage("vebe bolteso to...");
      setimage(firstcry);
    }
    if (message == "vebe bolteso to...") {
      setmessage("R ekbar valo moto vebe nao..");
      setimage(final);
    }
    if (message == "R ekbar valo moto vebe nao..") {
      const randomTop = parseInt(Math.random() * 500);
      const randomLeft = parseInt(Math.random() * 1000);

      document.getElementById("NO").style.position = "absolute";
      document.getElementById("NO").style.top = `${randomTop}px`;
      document.getElementById("NO").style.left = `${randomLeft}px`;
    }
  };

  const handletopleft = () => {
    const randomTop = parseInt(Math.random() * 500);
    const randomLeft = parseInt(Math.random() * 1000);
    // console.log(randomTop);
    // top = 300
    // left = 900
    // settop(randomTop)
    // setleft(randomLeft)
  };

  // console.log(top, left);

  return (
    <section className="relative flex h-screen items-center">
      <div className="mx-auto w-1/3 space-y-5 rounded-2xl border-2 p-5 text-center">
        <img src={image} className="mx-auto w-96 rounded-xl border-2" alt="" />
        <h1 className="text-3xl">{message}</h1>
        <div className="flex justify-center gap-5">
          <button onClick={handleYES} className="btn btn-primary btn-lg">
            Yes
          </button>
          <button
            id="NO"
            onClick={handleNO}
            className={`btn btn-primary btn-lg`}
          >
            No
          </button>
          {/* <button className='btn' onClick={handletopleft}>handle</button> */}
        </div>
      </div>
    </section>
  );
}

export default App;
