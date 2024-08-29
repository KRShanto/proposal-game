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
  const [showReload, setShowReload] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Check query parameters and redirect if missing
  useEffect(() => {
    const username = searchParams.get("name");
    const other = searchParams.get("other");

    if (username && other) {
      setName(username);
      setOtherName(other);
      setMessage(`Tumi ki amake valobasho ${other}??`);
      document.title = `Question for ${username}`; // Set the title based on the username
    } else {
      navigate("/name-form");
      document.title = "Enter Names"; // Title for the form route
    }
  }, [searchParams, navigate]);

  const handleYes = () => {
    setMessage(`Hehe, ${otherName} jantam tmi amke valobasho...`);
    document.getElementById("NO").style.display = "none";
    setImage(acceptImage);
    setShowReload(true); // Show the reload button when "Yes" is clicked
  };

  const handleNo = () => {
    if (message === `Tumi ki amake valobasho ${otherName}??`) {
      setMessage("vebe bolteso to...");
      setImage(firstCryImage);
    } else if (message === "vebe bolteso to...") {
      setMessage(`${otherName}, R ekbar valo moto vebe nao..`);
      setImage(finalImage);
    } else if (message === `${otherName}, R ekbar valo moto vebe nao..`) {
      const maxTop = window.innerHeight - 50; // Adjust this based on button height
      const maxLeft = window.innerWidth - 100; // Adjust this based on button width
      const randomTop = Math.random() * maxTop;
      const randomLeft = Math.random() * maxLeft;

      document.getElementById("NO").style.position = "absolute";
      document.getElementById("NO").style.top = `${randomTop}px`;
      document.getElementById("NO").style.left = `${randomLeft}px`;
    }
  };

  const handleReload = () => {
    window.location.reload();
  };

  if (!name || !otherName) {
    return null; // Render nothing while redirecting
  }

  return (
    <section className="relative flex h-screen items-center p-4">
      <div className="mx-auto w-full max-w-xs space-y-5 rounded-2xl border-2 p-4 text-center sm:max-w-md sm:p-5">
        <h2 className="mb-4 text-lg sm:text-2xl">Hey I'm {name}!</h2>
        <img
          src={image}
          className="mx-auto w-full max-w-xs rounded-xl border-2"
          alt="Emotion Image"
        />
        <h1 className="text-lg sm:text-3xl">{message}</h1>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button onClick={handleYes} className="btn btn-primary btn-lg">
            Yes
          </button>
          <button id="NO" onClick={handleNo} className="btn btn-primary btn-lg">
            No
          </button>
        </div>
        {showReload && (
          <button
            onClick={handleReload}
            className="btn btn-secondary btn-lg mt-5 w-full"
          >
            Reload
          </button>
        )}
      </div>
    </section>
  );
}

export { App };
