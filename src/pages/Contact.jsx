import { useState } from "react";


import Footer from "../components/Footer";

import VideoBackground from "../components/VideoBackground";
import ContactHero from "../components/ContactHero";
import ContactFormPanel from "../components/ContactFormPanel";
import PageWrapper from "../components/PageWrapper";

function Contact() {

  const [open, setOpen] = useState(false);

  return (
    <PageWrapper>   <div className="relative min-h-screen overflow-hidden">

  {/* VIDEO */}
  <VideoBackground />

  {/* DARK OVERLAY */}
  <div className="fixed inset-0 bg-black/60 z-10"></div>

  {/* PAGE CONTENT */}
  <div className="relative z-20">

    

    <ContactHero setOpen={setOpen} />

    <ContactFormPanel
      open={open}
      setOpen={setOpen}
    />

  </div>

</div>
</PageWrapper>
 
  );
}

export default Contact;