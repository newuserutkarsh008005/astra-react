import { useAuth0 } from "@auth0/auth0-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext";


export default function WelcomeAnimation() {
  const { language } = useLanguage();
  const {user}=useAuth0()
  const username=`${user?.given_name}`


const texts = language === "hi" ? [
  `वापसी पर स्वागत है, ${username} 👋 हर बुकिंग एक कदम आगे है। आज के दिन को सार्थक बनाएं।`,
  `सुप्रभात, ${username} ☀️ ध्यान केंद्रित रखें, निरंतर बने रहें और आगे बढ़ते रहें।`,
  `वापसी पर स्वागत है, ${username}। हर छोटा कदम मायने रखता है। 🚀`,
  `आपको फिर देखकर अच्छा लगा, ${username}। क्या आज को उपयोगी बनाने के लिए तैयार हैं?`,
  "आपका अगला अवसर बस एक बुकिंग दूर है।",
  "पहले से योजना बनाएं, आगे बने रहें।",
  "आज की मेहनत ही कल की उपलब्धि है।",
  "निरंतर बने रहें। प्रगति साथ आएगी।",
] : [
  `Welcome back, ${username} 👋 Every booking is a step forward. Let's make today count.`,
  `Good Morning, ${username} ☀️ Stay focused, stay consistent, and keep building momentum.`,
  `Welcome back, ${username}. Every small step counts. 🚀`,
  `Great to see you again, ${username}. Ready to make today productive?`,
  "Your next opportunity is just one booking away.",
  "Plan ahead, stay ahead.",
  "Today's effort is tomorrow's achievement.",
  "Stay consistent. Progress follows.",
];
  const [cur, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % texts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const words = texts[cur].split(" ");

  return (
    <div className="flex justify-start px-10 overflow-hidden flex-wrap   h-fit w-3/5 ">
      <div className="flex flex-wrap gap-2 text-2xl font-sans font-medium">
        {words.map((word, index) => (
          <motion.span
            key={`${cur}-${index}`}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
          >
            {word}
          </motion.span>
        ))}
      </div>
    </div>
  );
}