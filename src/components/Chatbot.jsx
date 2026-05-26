import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const Chatbot = () => {

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  // Toggle Chat
  const [open, setOpen] = useState(false);

  // Chat Scroll Ref
  const chatContainerRef = useRef(null);

  // Load old chats
  useEffect(() => {

    const oldMessages = localStorage.getItem("messages");

    if (oldMessages) {
      setMessages(JSON.parse(oldMessages));
    }

  }, []);

  // Save + Auto Scroll
  useEffect(() => {

    localStorage.setItem(
      "messages",
      JSON.stringify(messages)
    );

    // Scroll only chat window
    if (chatContainerRef.current) {

      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;

    }

  }, [messages, loading]);

  // Scroll to bottom when chat is opened
  useEffect(() => {
    if (!open) return;

    const el = chatContainerRef.current;
    if (!el) return;

    const rafId = requestAnimationFrame(() => {
      el.scrollTop = el.scrollHeight;
    });

    return () => cancelAnimationFrame(rafId);
  }, [open]);

  async function getanswer() {

    if (!input.trim()) return;

    const userMessage = input;

    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: userMessage,
      },
    ]);

    // Clear input
    setInput("");

    try {

      setLoading(true);

      const response = await fetch(
        "https://version1-1-c962.onrender.com/chat",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            message: userMessage,
          }),
        }
      );

      const data = await response.json();

      // Add bot reply
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.reply ||
            data.message ||
            "No Response",
        },
      ]);

    } catch (error) {

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Server Error",
        },
      ]);

    } finally {

      setLoading(false);

    }
  }

  return createPortal(

    <div className="fixed bottom-6 right-6 z-[999999]">

      {/* Toggle Button */}
      {!open && (

        <button
          onClick={() => setOpen(true)}

          className="
          w-16
          h-16
          rounded-full
          bg-gradient-to-r
          from-purple-600
          to-blue-600
          text-white
          text-2xl
          shadow-2xl
          hover:scale-110
          transition-all
          flex
          items-center
          justify-center
        "
        >
          ✦
        </button>

      )}

      {/* Chat Window */}
      {open && (

        <div
          className="
          w-[360px]
          h-[600px]
          bg-black/40
          backdrop-blur-xl
          border border-white/10
          rounded-3xl
          shadow-2xl
          overflow-hidden
          flex flex-col
          
        "
        >

          {/* Header */}
          <div
            className="
            p-5
            border-b border-white/10
            bg-gradient-to-r
            from-purple-600
            to-blue-600
            flex
            items-center
            justify-between
          "
          >

            <div>

              <h1 className="text-2xl font-bold text-white">
                Astra Intelligence
              </h1>

              <p className="text-sm text-gray-200 mt-1">
                AI Cosmic Assistant
              </p>

            </div>

            {/* Close */}
            <button
              onClick={() => setOpen(false)}

              className="
              w-10
              h-10
              rounded-full
              bg-white/10
              text-white
              hover:bg-white/20
              transition-all
            "
            >
              ✕
            </button>

          </div>

          {/* Chat Area */}
          <div
            ref={chatContainerRef}

            className="
            flex-1
            overflow-y-auto
            p-4
            space-y-4
            scroll-smooth
          "
          >

            {messages.map((msg, index) => (

              <div
                key={index}

                className={`
                  flex
                  ${
                    msg.role === "user"
                      ? "justify-end"
                      : "justify-start"
                  }
                `}
              >

                <div
                  className={`
                    max-w-[80%]
                    px-4
                    py-3
                    rounded-2xl
                    text-sm
                    leading-relaxed
                    shadow-lg
                    break-words
                    ${
                      msg.role === "user"
                        ? `
                          bg-gradient-to-r
                          from-blue-500
                          to-cyan-500
                          text-white
                          rounded-br-sm
                        `
                        : `
                          bg-white/10
                          border border-white/10
                          text-gray-100
                          rounded-bl-sm
                        `
                    }
                  `}
                >

                  {msg.content}

                </div>

              </div>

            ))}

            {/* Loading */}
            {loading && (

              <div className="flex justify-start">

                <div
                  className="
                  bg-white/10
                  border border-white/10
                  text-white
                  px-4
                  py-3
                  rounded-2xl
                  rounded-bl-sm
                  animate-pulse
                "
                >
                  Astra is thinking...
                </div>

              </div>

            )}

          </div>

          {/* Input */}
          <div
            className="
            p-4
            border-t border-white/10
            bg-black/20
          "
          >

            <div className="flex items-center gap-3">

              <input
                type="text"

                placeholder="Ask Astra anything..."

                value={input}

                onChange={(e) =>
                  setInput(e.target.value)
                }

                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    getanswer();
                  }
                }}

                className="
                flex-1
                bg-white/10
                border border-white/10
                rounded-full
                px-5
                py-3
                text-white
                placeholder-gray-400
                outline-none
                focus:border-blue-400
                transition-all
              "
              />

              {/* Send Button */}
              <button
                onClick={getanswer}

                className="
                w-12
                h-12
                rounded-full
                bg-gradient-to-r
                from-purple-500
                to-blue-500
                text-white
                font-bold
                hover:scale-105
                transition-all
                shadow-lg
              "
              >
                ↑
              </button>

            </div>

          </div>

        </div>

      )}

    </div>,

    document.body
  );
};

export default Chatbot;