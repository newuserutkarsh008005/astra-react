function ContactHero({ setOpen }) {
  return (
    <main className="flex min-h-screen items-center px-[10%]">

      {/* LEFT */}
      <div className="w-1/2 ">

        <span className="text-[#d4b99b] text-[0.65rem] tracking-[6px] uppercase mb-12 block">
          Executive Office
        </span>

        <div className="mb-16">
          <span className="text-[0.7rem] text-[#d4b99b] uppercase tracking-[2px] block mb-3">
            Secure Voice
          </span>

          <h3
            className="text-5xl font-light  text-[#ada8a3]"
            style={{ fontFamily: "'Cormorant Garamond'" }}
          >
            +44 20 7946 0128
          </h3>
        </div>

        <div className="mb-16">
          <span className="text-[0.7rem]text-[#d4b99b] uppercase tracking-[2px] block mb-3  text-[#d4b99b]">
            Digital Envoy
          </span>

          <h3
            className="text-5xl font-light  text-[#ada8a3]"
            style={{ fontFamily: "'Cormorant Garamond'" }}
          >
            concierge@astra.io
          </h3>
        </div>

        <div className="mb-16">
          <span className="text-[0.7rem] text-[#d4b99b] uppercase tracking-[2px] block mb-3">
            London Studio
          </span>

          <h3
            className="text-5xl font-light text-[#ada8a3]"
            style={{ fontFamily: "'Cormorant Garamond'" }}
          >
            Mayfair, W1K 2HB
          </h3>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-1/2 flex flex-col items-end  text-[#ada8a3]" >

        <button
          onClick={() => setOpen(true)}
          className="border border-[#d4b99b] text-[#d4b99b] px-16 py-8 uppercase tracking-[4px] text-[0.8rem] hover:bg-[#d4b99b] hover:text-black transition duration-500"
        >
          Initiate Protocol
        </button>

        <p className="mt-8 text-[0.7rem] text-[#d4b99b]tracking-[2px]  text-[#ada8a3]">
          EST. 1998 // LONDON
        </p>

      </div>

    </main>
  );
}

export default ContactHero;