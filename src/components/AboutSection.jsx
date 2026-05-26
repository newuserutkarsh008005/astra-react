function AboutSection({ title, text }) {
  return (
    <section className="px-[10%] py-[140px] border-t border-white/10 max-w-[1200px]">

      <h2
        className="text-[2.4rem] mb-8 text-orange-400 font-light"
        style={{ fontFamily: "'Cormorant Garamond'" }}
      >
        {title}
      </h2>

      <p className="text-[1.15rem] leading-[1.9] font-light text-amber-50 max-w-[800px]">
        {text}
      </p>

    </section>
  );
}

export default AboutSection;