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
      message: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Astra Inquiry</title>
            <style>
              @keyframes glowPulse {
                0% { box-shadow: 0 0 0 rgba(212, 185, 155, 0.15); }
                50% { box-shadow: 0 0 24px rgba(212, 185, 155, 0.38); }
                100% { box-shadow: 0 0 0 rgba(212, 185, 155, 0.15); }
              }
            </style>
          </head>
          <body style="margin:0; background:linear-gradient(135deg,#0b1020,#111827,#1f2937); font-family:Arial, Helvetica, sans-serif; color:#f5f7fb; padding:32px 16px;">
            <div style="max-width:640px; margin:0 auto; border:1px solid rgba(212,185,155,0.35); border-radius:24px; overflow:hidden; background:rgba(8,12,20,0.9);">
              <div style="padding:20px 28px; background:linear-gradient(90deg, #d4b99b 0%, #f3d8b6 50%, #d4b99b 100%); color:#0b1020; font-weight:700; letter-spacing:2px; text-transform:uppercase; text-align:center; animation: glowPulse 2.5s ease-in-out infinite;">
                Astra Inquiry
              </div>
              <div style="padding:30px 28px 20px;">
                <h1 style="margin:0 0 14px; font-size:28px; line-height:1.3; color:#f5d9b5;">New Contact Request</h1>
                <p style="margin:0 0 22px; color:#d9e1ed; font-size:16px; line-height:1.7;">
                  You have received a new message from a potential client.
                </p>
                <div style="background:rgba(255,255,255,0.04); border:1px solid rgba(212,185,155,0.2); border-radius:16px; padding:20px; margin-bottom:18px;">
                  <p style="margin:0 0 8px; color:#d4b99b; font-size:12px; letter-spacing:1.5px; text-transform:uppercase;">Sender</p>
                  <p style="margin:0; color:#ffffff; font-size:18px; font-weight:600;">${visitorName}</p>
                </div>
                <div style="background:rgba(255,255,255,0.04); border:1px solid rgba(212,185,155,0.2); border-radius:16px; padding:20px; margin-bottom:18px;">
                  <p style="margin:0 0 8px; color:#d4b99b; font-size:12px; letter-spacing:1.5px; text-transform:uppercase;">Email</p>
                  <p style="margin:0; color:#ffffff; font-size:16px;">${visitorEmail}</p>
                </div>
                <div style="background:rgba(255,255,255,0.04); border:1px solid rgba(212,185,155,0.2); border-radius:16px; padding:20px;">
                  <p style="margin:0 0 10px; color:#d4b99b; font-size:12px; letter-spacing:1.5px; text-transform:uppercase;">Message</p>
                  <div style="color:#eef3ff; font-size:15px; line-height:1.8; white-space:pre-line;">${messageText}</div>
                </div>
              </div>
              <div style="padding:18px 28px 28px; text-align:center;">
                <div style="display:inline-block; padding:12px 22px; border-radius:999px; background:linear-gradient(90deg,#d4b99b,#f0d0a1); color:#0b1020; font-weight:700; letter-spacing:0.8px;">
                  Respond to ${visitorName}
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    const confirmationPayload = {
      name: visitorName,
      to: visitorEmail,
      subject: "Astra - Message Received",
      message: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Message Received</title>
            <style>
              @keyframes floatUp {
                0% { transform: translateY(8px); opacity: 0.7; }
                100% { transform: translateY(0px); opacity: 1; }
              }
            </style>
          </head>
          <body style="margin:0; background:linear-gradient(135deg,#141b2d,#0f172a,#111827); font-family:Arial, Helvetica, sans-serif; color:#edf4ff; padding:32px 16px;">
            <div style="max-width:640px; margin:0 auto; border-radius:24px; overflow:hidden; border:1px solid rgba(212,185,155,0.25); background:#0b1220; box-shadow:0 16px 40px rgba(0,0,0,0.35); animation: floatUp 0.8s ease-out;">
              <div style="padding:24px 28px; background:linear-gradient(90deg,#d4b99b,#e7caa0,#d4b99b); color:#0d1320; text-align:center; font-size:12px; letter-spacing:3px; text-transform:uppercase; font-weight:700;">
                Astra // Acknowledged
              </div>
              <div style="padding:32px 28px 20px;">
                <h1 style="margin:0 0 16px; font-size:30px; line-height:1.2; color:#f5d9b5;">Hi ${visitorName},</h1>
                <p style="margin:0 0 18px; font-size:16px; line-height:1.8; color:#e5edf7;">
                  Thank you for contacting Astra. We have received your message and will get back to you soon.
                </p>
                <div style="margin:20px 0; padding:18px 20px; border-left:4px solid #d4b99b; background:rgba(212,185,155,0.08); border-radius:12px;">
                  <p style="margin:0 0 8px; color:#d4b99b; font-size:12px; letter-spacing:1.5px; text-transform:uppercase;">Your message</p>
                  <div style="color:#f8fbff; font-size:15px; line-height:1.8; white-space:pre-line;">${messageText}</div>
                </div>
                <p style="margin:20px 0 0; font-size:15px; line-height:1.8; color:#dfe9f8;">
                  We appreciate your time and will be in touch shortly.
                </p>
              </div>
              <div style="padding:0 28px 28px; text-align:center;">
                <div style="display:inline-block; padding:12px 22px; border-radius:999px; border:1px solid rgba(212,185,155,0.5); background:rgba(212,185,155,0.10); color:#f5d9b5; font-weight:700; letter-spacing:0.8px;">
                  Best regards, Astra Team
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    setIsSubmitting(true);

    try {
      setFormData({ name: "", email: "", message: "" });
      setOpen(false);
      toast.success("Message sent successfully");

      console.log("Sending admin email payload:", adminPayload);
      const adminResponse = await fetch("/api/auth/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(adminPayload),
      });
      const adminResponseText = await adminResponse.text();
      console.log("Admin email response:", adminResponse.status, adminResponseText);

      if (!adminResponse.ok) {
        throw new Error("Admin email failed");
      }

      console.log("Sending confirmation email payload:", confirmationPayload);
      const confirmationResponse = await fetch("/api/auth/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(confirmationPayload),
      });
      const confirmationResponseText = await confirmationResponse.text();
      console.log("Confirmation email response:", confirmationResponse.status, confirmationResponseText);

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