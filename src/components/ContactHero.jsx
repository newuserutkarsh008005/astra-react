function ContactHero({ setOpen }) {
  return (
    <main className="flex flex-col md:flex-row min-h-screen items-start md:items-center px-[10%]">
      {/* LEFT */}
      <div className="w-full md:w-1/2 flex flex-col gap-1">
        <span className="text-[#d4b99b] text-[0.65rem] tracking-[6px] uppercase mb-12 block">
          Executive Office
        </span>

        <div className="mb-8 md:mb-16">
          <span className="text-[0.7rem] text-[#d4b99b] uppercase tracking-[2px] block mb-3">
            Secure Voice
          </span>

          <h3
            className="text-4xl md:text-5xl font-light text-[#ada8a3] mb-0"
            style={{ fontFamily: "'Cormorant Garamond'" }}
          >
            +44 20 7946 0128
          </h3>
        </div>

        <div className="mb-8 md:mb-16">
          <span className="text-[0.7rem] text-[#d4b99b] uppercase tracking-[2px] block mb-3">
            Digital Envoy
          </span>

          <h3
            className="text-4xl md:text-5xl font-light text-[#ada8a3]"
            style={{ fontFamily: "'Cormorant Garamond'" }}
          >
            concierge@astra.io
          </h3>
        </div>

        <div className="mb-8 md:mb-16">
          <span className="text-[0.7rem] text-[#d4b99b] uppercase tracking-[2px] block mb-3">
            London Studio
          </span>

          <h3
            className="text-4xl md:text-5xl font-light text-[#ada8a3]"
            style={{ fontFamily: "'Cormorant Garamond'" }}
          >
            Mayfair, W1K 2HB
          </h3>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full md:w-1/2 flex flex-col items-start md:items-end text-[#ada8a3] mt-8 md:mt-0">
        <button
          onClick={() => setOpen(true)}
          className="border border-[#d4b99b] text-[#d4b99b] px-8 py-4 uppercase tracking-[4px] text-[0.8rem] hover:bg-[#d4b99b] hover:text-black transition duration-500 self-start md:self-end"
        >
          Initiate Protocol
        </button>

        <p className="mt-8 text-[0.7rem] tracking-[2px] text-[#d4b99b]">
          EST. 1998 // LONDON
        </p>
      </div>
    </main>
  );
}

export default ContactHero;
