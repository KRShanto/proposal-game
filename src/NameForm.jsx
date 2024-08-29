import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Separate component for the name form
function NameForm() {
  const [username, setUsername] = useState("");
  const [othername, setOthername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(
      `/?name=${encodeURIComponent(username)}&other=${encodeURIComponent(othername)}`,
    );
  };

  return (
    <section className="flex h-screen items-center justify-center">
      <form onSubmit={handleSubmit} className="space-y-4 rounded border p-6">
        <div>
          <label className="mb-2 block">What's your name?</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="mb-2 block">What's their name?</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={othername}
            onChange={(e) => setOthername(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Start
        </button>
      </form>
    </section>
  );
}

export { NameForm };
