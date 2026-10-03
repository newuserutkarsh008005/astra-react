function AboutSection({ title, text }) {
  return (
    <section className="px-[8%] md:px-[10%] py-[70px] border-t border-white/10 max-w-[1200px] mx-auto">

      <h2
        className="text-[2.1rem] md:text-[2.9rem] mb-4 text-orange-400 font-light tracking-[-0.03em]"
        style={{ fontFamily: "'Cormorant Garamond'" }}
      >
        {title}
      </h2>

      <p className="text-[1rem] md:text-[1.08rem] leading-[1.8] font-light text-amber-50/90 max-w-[760px]">
        {text}
      </p>

    </section>
  );
}

export default AboutSection;