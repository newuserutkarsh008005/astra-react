import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLanguage } from "./LanguageContext";

function ContactFormPanel({ open, setOpen }) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { id, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [id === "contact-name" ? "name" : id === "contact-email" ? "email" : "message"]:
        value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const visitorName = formData.name.trim();
    const visitorEmail = formData.email.trim();
    const messageText = formData.message.trim();

    if (!visitorName || !visitorEmail || !messageText) {
      alert("Please fill in your name, email, and message.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(visitorEmail)) {
      alert("Please enter a valid email address.");
      return;
    }

    const adminPayload = {
      name: visitorName,
      to: "utkarshprakash081105@gmail.com",
      subject: "Astra Doubt",
      message: `Name: ${visitorName}\nEmail: ${visitorEmail}\n\n${messageText}`,
    };

    const confirmationPayload = {
      name: visitorName,
      to: visitorEmail,
      subject: "Astra - Message Received",
      message: `Hi ${visitorName},\n\nThank you for contacting Astra. We have received your message and will get back to you soon.\n\nYour message:\n${messageText}\n\nBest regards,\nAstra Team`,
    };

    setIsSubmitting(true);

    try {
      setFormData({ name: "", email: "", message: "" });
      setOpen(false);
      toast.success("Message sent successfully");

      const adminResponse = await fetch("/api/auth/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(adminPayload),
      });

      if (!adminResponse.ok) {
        throw new Error("Admin email failed");
      }

      const confirmationResponse = await fetch("/api/auth/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(confirmationPayload),
      });

      if (!confirmationResponse.ok) {
        throw new Error("User confirmation email failed");
      }
    } catch (error) {
      console.error("Contact form submission failed:", error);
      toast.error("Something went wrong while sending your message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Prevent background scrolling while drawer is open
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);


  // Close with Escape
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, setOpen]);


  return (
    <>
      {/* =====================================================
          BACKDROP
          Starts BELOW navbar
      ====================================================== */}

      <div
        onClick={() => setOpen(false)}
        className={`
          fixed
          top-[72px]
          bottom-0
          left-0
          right-0

          bg-black/50
          backdrop-blur-[2px]

          z-[999998]

          transition-opacity
          duration-500

          ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      />


      {/* =====================================================
          CONTACT PANEL
          Starts BELOW navbar
      ====================================================== */}

      <aside
        aria-hidden={!open}
        aria-label="Contact form"
        className={`
          fixed

          top-[72px]
          right-0
          bottom-0

          z-[999999]

          w-full
          sm:w-[420px]
          md:w-[460px]
          lg:w-[500px]

          bg-[#0b1220]

          border-l
          border-white/10

          shadow-[-20px_0_80px_rgba(0,0,0,0.45)]

          flex
          flex-col

          overflow-hidden

          transition-transform
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${
            open
              ? "translate-x-0"
              : "translate-x-full pointer-events-none"
          }
        `}
      >

        {/* ===================================================
            HEADER
        ==================================================== */}

        <div
          className="
            relative
            shrink-0

            px-6
            sm:px-8
            md:px-10

            py-5

            border-b
            border-white/[0.08]
          "
        >

          <div
            className="
              flex
              items-center
              justify-between
            "
          >

            <p
              className="
                text-[9px]
                sm:text-[10px]

                uppercase
                tracking-[0.35em]

                text-[#d4b99b]/70
              "
            >
              ASTRA // CONTACT
            </p>


            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close contact form"
              className="
                group

                flex
                items-center
                gap-2

                text-[9px]
                sm:text-[10px]

                uppercase
                tracking-[0.25em]

                text-[#d4b99b]

                hover:text-white

                transition-colors
              "
            >
              <span>{t("CLOSE")}</span>

              <span
                className="
                  text-sm
                  group-hover:rotate-90
                  transition-transform
                  duration-300
                "
              >
                ×
              </span>
            </button>

          </div>

        </div>


        {/* ===================================================
            FORM CONTENT
        ==================================================== */}

        <div
          className="
            flex-1
            min-h-0

            overflow-y-auto
            overscroll-contain

            px-6
            sm:px-8
            md:px-10

            py-8
            sm:py-10
            md:py-12

            pb-10
          "
        >

          {/* =================================================
              HEADING
          ================================================= */}

          <div className="mb-10 sm:mb-12">

            <p
              className="
                mb-4

                text-[9px]
                sm:text-[10px]

                uppercase
                tracking-[0.4em]

                text-[#d4b99b]/70
              "
            >
              {t("Secure Channel")}
            </p>

            <h2
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl

                leading-[0.95]

                text-[#d4b99b]
              "
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              {t("Secure")}
              <br />

              <i>{t("Communication")}</i>
            </h2>

            <div
              className="
                mt-6

                w-16
                h-px

                bg-[#d4b99b]/60
              "
            />

          </div>


          {/* =================================================
              FORM
          ================================================= */}

          <form
            onSubmit={handleSubmit}
            className="
              space-y-8
              sm:space-y-10
            "
          >

            {/* NAME */}

            <div>

              <label
                htmlFor="contact-name"
                className="
                  block
                  mb-3

                  text-[9px]
                  sm:text-[10px]

                  uppercase
                  tracking-[0.3em]

                  text-[#d4b99b]
                "
              >
                {t("Identity")}
              </label>

              <input
                id="contact-name"
                type="text"
                placeholder={t("Full Name")}
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                className="
                  w-full

                  bg-transparent

                  border-0
                  border-b
                  border-white/15

                  px-0
                  py-3

                  text-base
                  sm:text-lg

                  text-white

                  placeholder:text-white/45

                  outline-none

                  focus:border-[#d4b99b]

                  transition-colors
                  duration-300
                "
              />

            </div>


            {/* EMAIL */}

            <div>

              <label
                htmlFor="contact-email"
                className="
                  block
                  mb-3

                  text-[9px]
                  sm:text-[10px]

                  uppercase
                  tracking-[0.3em]

                  text-[#d4b99b]
                "
              >
                {t("Endpoint")}
              </label>

              <input
                id="contact-email"
                type="email"
                placeholder={t("Email Address")}
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className="
                  w-full

                  bg-transparent

                  border-0
                  border-b
                  border-white/15

                  px-0
                  py-3

                  text-base
                  sm:text-lg

                  text-white

                  placeholder:text-white/45

                  outline-none

                  focus:border-[#d4b99b]

                  transition-colors
                  duration-300
                "
              />

            </div>


            {/* MESSAGE */}

            <div>

              <label
                htmlFor="contact-message"
                className="
                  block
                  mb-3

                  text-[9px]
                  sm:text-[10px]

                  uppercase
                  tracking-[0.3em]

                  text-[#d4b99b]
                "
              >
                {t("Context")}
              </label>

              <textarea
                id="contact-message"
                rows={5}
                placeholder={t("Brief details regarding your alignment query...")}
                value={formData.message}
                onChange={handleChange}
                className="
                  w-full

                  bg-transparent

                  border-0
                  border-b
                  border-white/15

                  px-0
                  py-3

                  text-base

                  leading-relaxed

                  text-white

                  placeholder:text-white/45

                  outline-none

                  resize-none

                  focus:border-[#d4b99b]

                  transition-colors
                  duration-300
                "
              />

            </div>


            {/* SUBMIT */}

            <div className="pt-2">

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  group

                  relative

                  w-full

                  overflow-hidden

                  border
                  border-[#d4b99b]/70

                  py-4
                  sm:py-5

                  text-[#d4b99b]

                  text-[10px]
                  sm:text-xs

                  uppercase
                  tracking-[0.35em]

                  transition-all
                  duration-500

                  disabled:cursor-not-allowed
                  disabled:opacity-70
                "
              >

                <span
                  className="
                    absolute
                    inset-0

                    origin-left
                    scale-x-0

                    bg-[#d4b99b]

                    group-hover:scale-x-100

                    transition-transform
                    duration-500
                    ease-out
                  "
                />

                <span
                  className="
                    relative
                    z-10

                    group-hover:text-[#080c14]

                    transition-colors
                    duration-500
                  "
                >
                  {isSubmitting ? "Sending..." : t("Transmit")}
                </span>

              </button>

            </div>


            {/* FOOTNOTE */}

            <p
              className="
                pt-2
                pb-4

                text-[9px]

                leading-relaxed

                tracking-[0.12em]

                text-white/35

                uppercase
              "
            >
              {t("Your communication remains private\n              and protected.")}
            </p>

          </form>

        </div>

      </aside>
    </>
  );
}

export default ContactFormPanel;