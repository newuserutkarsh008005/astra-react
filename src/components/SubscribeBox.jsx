import { useState } from "react";

function SubscribeBox() {

  const [email, setEmail] = useState("");

  const handleSubscribe = () => {

    if (!email) {
      alert("Please enter a valid email");
      return;
    }

    alert(`Thanks! We'll notify you at ${email}`);

    setEmail("");
  };

  return (
    <div className="flex gap-3">

      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="
          px-4
          py-3
          rounded-md
          text-black
          outline-none
          w-[250px]
          bg-amber-50
        "
      />

      <button
        onClick={handleSubscribe}
        className="
          px-5
          py-3
          rounded-md
          bg-cyan-400
          text-black
          hover:bg-white
          transition
        "
      >
        Notify Me
      </button>

    </div>
  );
}

export default SubscribeBox;