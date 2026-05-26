function FloatingStats() {

  return (

    <div
      className="
        absolute
        bottom-20
        left-[10%]
        z-20
        flex
        gap-12
      "
    >

      <div>

        <h3
          className="
            text-3xl
            text-[#d4b99b]
            mb-2
          "
        >
          12K+
        </h3>

        <p className="text-white/50 text-sm">
          Cosmic Readings
        </p>

      </div>

      <div>

        <h3
          className="
            text-3xl
            text-[#d4b99b]
            mb-2
          "
        >
          98%
        </h3>

        <p className="text-white/50 text-sm">
          Alignment Accuracy
        </p>

      </div>

      <div>

        <h3
          className="
            text-3xl
            text-[#d4b99b]
            mb-2
          "
        >
          24/7
        </h3>

        <p className="text-white/50 text-sm">
          Observatory Active
        </p>

      </div>

    </div>
  );
}

export default FloatingStats;
