function ContactFormPanel({ open, setOpen }) {
  return (
    <div
      className={`
        absolute
        top-0
        right-0
        w-full md:w-[500px]
        h-screen
        bg-gray-900
        md:border-l
        md:border-white/10
        px-6 md:px-[60px]
        py-8 md:py-[100px]
        z-[2000]
        transition-all
        duration-700
        ease-in-out
        rounded-3xl
        transform
        md: flex flex-col flex-nowrap overflow-auto 
        
        ${
          open
            ? "translate-x-0 translate-y-0 opacity-100"
            : "md:translate-x-full translate-y-full opacity-0 pointer-events-none"
        }
      `}
    >

      {/* CLOSE BUTTON */}
      <span
        onClick={() => setOpen(false)}
        className="
          absolute
          top-5
          right-4
          cursor-pointer
          text-[#d4b99b]
          tracking-[2px]
          text-[0.7rem]
          hover:text-white
          transition
        "
      >
        CLOSE // ✕
      </span>

      {/* HEADING */}
      <h2
        className="text-4xl md:text-6xl mb-12 leading-tight text-[#d4b99b]"
        style={{ fontFamily: "'Cormorant Garamond'" }}
      >
        Secure <br />
        <i>Communication</i>
      </h2>

      {/* NAME FIELD */}
      <div className="mb-8">
        <label
          className="
            block
            text-[0.6rem]
            text-[#d4b99b]
            uppercase
            tracking-[2px]
            mb-3
          "
        >
          Identity
        </label>

        <input
          type="text"
          placeholder="Full Name"
          className="
            w-full
            bg-transparent
            border-none
            border-b
            border-white/10
            py-4
            text-white
            outline-none
            transition
            focus:border-[#d4b99b]
            placeholder:text-white/80
          "
        />
      </div>

      {/* EMAIL FIELD */}
      <div className="mb-8">
        <label
          className="
            block
            text-[0.6rem]
            text-[#d4b99b]
            uppercase
            tracking-[2px]
            mb-3
          "
        >
          Endpoint
        </label>

        <input
          type="email"
          placeholder="Email Address"
          className="
            w-full
            bg-transparent
            border-none
            border-b
            border-white/80
            py-4
            text-white
            outline-none
            transition
            focus:border-[#d4b99b]
            placeholder:text-white/80
          "
        />
      </div>

      {/* MESSAGE FIELD */}
      <div className="mb-8">
        <label
          className="
            block
            text-[0.6rem]
            text-[#d4b99b]
            uppercase
            tracking-[2px]
            mb-3
          "
        >
          Context
        </label>

        <textarea
          rows="4"
          placeholder="Brief details regarding your alignment query..."
          className="
            w-full
            bg-transparent
            border-none
            border-b
            border-white/80
            py-4
            text-white
            outline-none
            resize-none
            transition
            focus:border-[#d4b99b]
            placeholder:text-white/80
          "
        />
      </div>

      {/* SUBMIT BUTTON */}
      <button
        className="
          w-full
          border
          border-[#d4b99b]
          text-[#d4b99b]
          py-5
          uppercase
          tracking-[4px]
          text-[0.8rem]
          transition-all
          duration-500
          hover:bg-[#d4b99b]
          hover:text-black
        "
      >
        Transmit
      </button>
    </div>
  );
}

export default ContactFormPanel;