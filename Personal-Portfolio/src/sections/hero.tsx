const Hero = () => {
  return (
    <div className="flex flex-row">
      {/* The Glass Card */}
      <div className="w-80 rounded-2xl border border-white/20 bg-white/10 p-6 text-white shadow-xl backdrop-blur-md">
        <h3 className="text-xl font-bold">Glassmorphism Card</h3>
        <p className="mt-2 text-sm text-white/80">
          Tailwind makes frosted glass incredibly easy without custom CSS.
        </p>
      </div>

    </div>
  );
};

export default Hero;
