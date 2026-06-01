function App() {
  const skills = [
    "React",
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "Tailwind CSS",
    "UI Design",
    "UX Design",
    "Git",
    "GitHub",
  ];

  const projects = [
    {
      title: "Smart AI Exam Proctoring",
      desc: "AI-powered online examination monitoring system using Computer Vision and Machine Learning.",
    },
    {
      title: "ROS 2 Deployment on AWS",
      desc: "Deployed ROS 2 Iron on AWS EC2 Ubuntu instance for robotic development.",
    },
    {
      title: "Drone Portfolio Website",
      desc: "Modern React website with responsive UI and interactive design.",
    },
  ];

  const certifications = [
    {
      title: "Python with AI & ML Intern",
      link: "https://admin.nextchapterskills.com/verify/NC-C0BAF3D1",
    },
    {
      title: "Python with AI & ML",
      link: "https://admin.nextchapterskills.com/verify/NC-FC774491",
    },
    {
      title: "NPTEL ML & DL",
      link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/108/noc25-ee181/Course/NPTEL25EE181S117240363210842178.pdf",
    },
    {
      title: "Salesforce Agentforce Specialist",
      link: "https://drive.google.com/file/d/1rtul0HuIQQdi_b1Qd5z9BMLiaFH_jBly/view",
    },
    {
      title: "UCSC C and C++",
      link: "https://www.coursera.org/account/accomplishments/specialization/IXSSJOG9TAZE",
    },
  ];

  return (
    <div className="bg-black text-white">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-xl z-50">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">

          <h1 className="font-bold text-xl">
            Abhiram
          </h1>

          <div className="hidden md:flex gap-8 text-white/70">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#certifications">Certificates</a>
            <a href="#contact">Contact</a>
          </div>

        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">

        <div className="absolute w-[700px] h-[700px] bg-purple-600/20 blur-[180px] rounded-full"></div>

        <div className="text-center max-w-5xl relative z-10">

          <p className="uppercase tracking-[0.4em] text-purple-400 mb-6">
            Frontend Developer • UI/UX Enthusiast
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Satya Jeevana
            <br />
            Abhiram Gullipalli
          </h1>

          <p className="text-white/70 text-xl md:text-2xl max-w-3xl mx-auto">
            Building intuitive digital experiences through modern web
            development and user-centered design.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            {["React", "UI/UX", "JavaScript", "Python"].map((item) => (
              <span
                key={item}
                className="px-4 py-2 border border-white/10 rounded-full bg-white/5"
              >
                {item}
              </span>
            ))}
          </div>

        </div>

      </section>

      {/* About */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-8 py-24"
      >
        <h2 className="text-4xl font-bold mb-8">
          About Me
        </h2>

        <p className="text-white/70 text-lg leading-8">
          I am a Computer Science Engineering student passionate about
          Frontend Development, UI/UX Design, React Applications,
          Artificial Intelligence and creating digital experiences that
          combine aesthetics with functionality.
        </p>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-8 py-24">

        <h2 className="text-4xl font-bold mb-10">
          Skills
        </h2>

        <div className="grid md:grid-cols-5 gap-4">

          {skills.map((skill) => (
            <div
              key={skill}
              className="border border-white/10 bg-white/5 p-5 rounded-xl text-center hover:border-purple-500 transition"
            >
              {skill}
            </div>
          ))}

        </div>

      </section>

      {/* Projects */}
      <section
        id="projects"
        className="max-w-6xl mx-auto px-8 py-24"
      >

        <h2 className="text-4xl font-bold mb-10">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-white/10 bg-white/5 p-8 rounded-3xl hover:border-purple-500 transition"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-white/70">
                {project.desc}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* Certifications */}
      <section
        id="certifications"
        className="max-w-6xl mx-auto px-8 py-24"
      >

        <h2 className="text-4xl font-bold mb-10">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {certifications.map((cert) => (
            <a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="border border-white/10 bg-white/5 p-6 rounded-2xl hover:border-purple-500 transition"
            >
              {cert.title}
            </a>
          ))}

        </div>

      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-8 py-24"
      >

        <h2 className="text-4xl font-bold mb-10">
          Contact
        </h2>

        <div className="space-y-4 text-lg">

          <a
            href="https://github.com/satyajeevanaabhiramgullipalli-ai"
            target="_blank"
            rel="noreferrer"
            className="block text-purple-400"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/satya-jeevana-abhiram-gullipalli-751168293"
            target="_blank"
            rel="noreferrer"
            className="block text-purple-400"
          >
            LinkedIn
          </a>

        </div>

      </section>

      <footer className="text-center py-10 text-white/40 border-t border-white/10">
        © 2026 Satya Jeevana Abhiram Gullipalli
      </footer>

    </div>
  );
}

export default App;