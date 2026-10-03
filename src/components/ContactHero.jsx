function ContactHero({ setOpen }) {
  return (
    <main
      className="
        relative
        min-h-screen
        w-full

        flex
        flex-col
        md:flex-row

        justify-center
        md:items-center

        px-6
        sm:px-10
        md:px-[8%]
        lg:px-[10%]

        pt-28
        pb-16
        md:pt-24
        md:pb-20

        text-white
      "
    >

      {/* =====================================================
          LEFT — CONTACT INFORMATION
      ====================================================== */}

      <div
        className="
          w-full
          md:w-1/2

          flex
          flex-col

          gap-0

          md:pr-10
          lg:pr-16
        "
      >

        {/* SECTION LABEL */}

        <span
          className="
            text-[#d4b99b]

            text-[0.58rem]
            sm:text-[0.65rem]

            tracking-[5px]
            sm:tracking-[6px]

            uppercase

            mb-10
            md:mb-12
          "
        >
          Executive Office
        </span>


        {/* =================================================
            PHONE
        ================================================== */}

        <div
          className="
            mb-10
            md:mb-14
          "
        >

          <span
            className="
              block

              text-[0.62rem]
              sm:text-[0.7rem]

              text-[#d4b99b]

              uppercase
              tracking-[2px]

              mb-3
            "
          >
            Secure Voice
          </span>

          <h3
            className="
              text-[2rem]
              sm:text-4xl
              md:text-5xl

              font-light

              text-[#ada8a3]

              leading-tight

              whitespace-nowrap
            "
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            +91 9334327043
          </h3>

        </div>


        {/* =================================================
            EMAIL
        ================================================== */}

        <div
          className="
            mb-10
            md:mb-14

            min-w-0
          "
        >

          <span
            className="
              block

              text-[0.62rem]
              sm:text-[0.7rem]

              text-[#d4b99b]

              uppercase
              tracking-[2px]

              mb-3
            "
          >
            Astra
          </span>

          <h3
            className="
              text-[1.45rem]
              sm:text-3xl
              md:text-5xl

              font-light

              text-[#ada8a3]

              leading-tight

              break-all
              md:break-normal

              max-w-full
            "
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            utkarshprakash081105@gmail.com
          </h3>

        </div>


        {/* =================================================
            LOCATION
        ================================================== */}

        <div
          className="
            mb-12
            md:mb-0
          "
        >

          <span
            className="
              block

              text-[0.62rem]
              sm:text-[0.7rem]

              text-[#d4b99b]

              uppercase
              tracking-[2px]

              mb-3
            "
          >
            Lucknow
          </span>

          <h3
            className="
              text-[2rem]
              sm:text-4xl
              md:text-5xl

              font-light

              text-[#ada8a3]

              leading-tight
            "
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            NBSC 226012
          </h3>

        </div>

      </div>


      {/* =====================================================
          RIGHT — ACTION
      ====================================================== */}

      <div
        className="
          w-full
          md:w-1/2

          flex
          flex-col

          items-start
          md:items-end

          justify-center

          mt-2
          md:mt-0

          md:pl-10
        "
      >

        {/* BUTTON */}

        <button
          onClick={() => setOpen(true)}
          className="
            w-full
            sm:w-auto

            self-start
            md:self-end

            border
            border-[#d4b99b]

            text-[#d4b99b]

            px-7
            sm:px-8

            py-4

            uppercase

            tracking-[3px]
            sm:tracking-[4px]

            text-[0.68rem]
            sm:text-[0.8rem]

            hover:bg-[#d4b99b]
            hover:text-black

            transition-all
            duration-500
          "
        >
          Initiate Protocol
        </button>


        {/* ESTABLISHED */}

        <p
          className="
            mt-6
            md:mt-8

            text-[0.62rem]
            sm:text-[0.7rem]

            tracking-[2px]

            text-[#d4b99b]

            uppercase

            self-start
            md:self-end
          "
        >
          EST. 2026 // Lucknow
        </p>

      </div>

    </main>
  );
}

export default ContactHero;