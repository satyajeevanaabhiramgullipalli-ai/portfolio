function App() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">

          <h1 className="text-xl font-semibold">
            Abhiram
          </h1>

          <div className="hidden md:flex gap-8 text-white/70">
            <a href="#about" className="hover:text-white transition">
              About
            </a>

            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </div>

        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/20 blur-[180px] rounded-full"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">

          <p className="uppercase tracking-[0.4em] text-purple-400 text-sm mb-6">
            FRONTEND DEVELOPER • UI/UX ENTHUSIAST
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Satya Jeevana
            <br />
            Abhiram Gullipalli
          </h1>

          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Building intuitive digital experiences through modern web
            development, React applications and user-centered design.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {["React", "UI/UX", "JavaScript", "Tailwind", "Python"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/70"
                >
                  {skill}
                </span>
              )
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-12">

            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
              View Projects
            </button>

            <button className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition">
              Contact Me
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}

export default App;