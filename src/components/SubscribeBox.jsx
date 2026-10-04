import { useState } from "react";
import { useLanguage } from "./LanguageContext";

function SubscribeBox() {
  const { t } = useLanguage();

  const [email, setEmail] = useState("");

  const handleSubscribe = () => {

    if (!email) {
      alert(t("Please enter a valid email"));
      return;
    }

    alert(`${t("Thanks! We'll notify you at")} ${email}`);

    setEmail("");
  };

  return (
    <div className="flex gap-3 flex-wrap justify-center-safe">

      <input
        type="email"
        placeholder={t("Your email")}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="
          px-4 sm:px-3
          py-3 sm:py-2
          rounded-md
          text-black
          outline-none
          w-[270px] sm:w-[250px]
          bg-amber-50
          justify-self-center
          
        "
      />

      <button
        onClick={handleSubscribe}
        className="
        lg:
          px-5
          py-3
          rounded-md
          bg-cyan-400
          text-black
          hover:bg-teal-300
          transition
         
        "
      >
        {t("Notify Me")}
      </button>

    </div>
  );
}

export default SubscribeBox;