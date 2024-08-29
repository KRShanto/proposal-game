import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import qusImage from "../public/lovequs.gif";
import acceptImage from "../public/accpect_love.gif";
import finalImage from "../public/simple crying.gif";
import firstCryImage from "../public/emotinal.gif";

function App() {
  const [message, setMessage] = useState();
  const [image, setImage] = useState(qusImage);
  const [name, setName] = useState("");
  const [otherName, setOtherName] = useState("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Check query parameters and redirect if missing
  useEffect(() => {
    const username = searchParams.get("name");
    const other = searchParams.get("other");

    if (username && other) {
      setName(username);
      setOtherName(other);
      setMessage(`Tumi ki amake valobasho ${otherName}??`);
    } else {
      navigate("/name-form");
    }
  }, [searchParams, navigate, otherName]);

  const handleYes = () => {
    setMessage(`Hehe, ${otherName} jantam tmi amke valobasho...`);
    document.getElementById("NO").style.display = "none";
    setImage(acceptImage);
  };

  const handleNo = () => {
    if (message === `Tumi ki amake valobasho ${otherName}??`) {
      setMessage("vebe bolteso to...");
      setImage(firstCryImage);
    } else if (message === "vebe bolteso to...") {
      setMessage(`${otherName}, R ekbar valo moto vebe nao..`);
      setImage(finalImage);
    } else if (message === `${otherName}, R ekbar valo moto vebe nao..`) {
      const randomTop = Math.random() * 500;
      const randomLeft = Math.random() * 1000;

      document.getElementById("NO").style.position = "absolute";
      document.getElementById("NO").style.top = `${randomTop}px`;
      document.getElementById("NO").style.left = `${randomLeft}px`;
    }
  };

  if (!name || !otherName) {
    return null; // Render nothing while redirecting
  }

  return (
    <section className="relative flex h-screen items-center">
      <div className="mx-auto w-1/3 space-y-5 rounded-2xl border-2 p-5 text-center">
        <h2 className="mb-4 text-2xl">Hey I'm {name}!</h2>
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
          <button id="NO" onClick={handleNo} className="btn btn-primary btn-lg">
            No
          </button>
        </div>
      </div>
    </section>
  );
}

export { App };
