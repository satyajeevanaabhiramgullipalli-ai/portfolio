import { useState, useEffect } from "react";
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

  

  const certifications = [
  {
    title: "Python with AI & ML Intern",
    desc: "Internship certification focused on Python, AI and Machine Learning.",
    link: "https://admin.nextchapterskills.com/verify/NC-C0BAF3D1",
  },

  {
    title: "Python with AI & ML",
    desc: "Comprehensive certification in Python programming and AI concepts.",
    link: "https://admin.nextchapterskills.com/verify/NC-FC774491",
  },

  {
    title: "NPTEL Machine Learning & Deep Learning",
    desc: "NPTEL certification covering ML and DL fundamentals and applications.",
    link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/108/noc25-ee181/Course/NPTEL25EE181S117240363210842178.pdf",
  },

  {
    title: "Salesforce Agentforce Specialist",
    desc: "Salesforce certification focused on Agentforce and AI-driven solutions.",
    link: "https://drive.google.com/file/d/1rtul0HuIQQdi_b1Qd5z9BMLiaFH_jBly/view",
  },

  {
    title: "UCSC C and C++",
    desc: "University of California Santa Cruz specialization in C and C++.",
    link: "https://www.coursera.org/account/accomplishments/specialization/IXSSJOG9TAZE",
  },
];
  
  const projects = [
  {
    id: "01",
    title: "Sentinel-X OSINT Analyzer",
    subtitle: "AI Threat Intelligence Platform",
    year: "2025",
    tags: ["AI/ML", "NLP", "OSINT"],
    challenge:
      "Security agencies face massive amounts of online content where identifying threats manually is difficult.",
    solution:
      "Built a multi-modal OSINT analyzer using OCR, NLP, Neo4j Knowledge Graphs and automated risk scoring.",
    impact:
      "Enabled faster intelligence gathering and automated threat detection.",
    stack: ["Python", "FastAPI", "Neo4j", "EasyOCR", "Kafka"],
  },

  {
    id: "02",
    title: "Multi-Lingual Learning Platform",
    subtitle: "Smart India Hackathon 2025",
    year: "2025",
    tags: ["Education", "Flutter", "Mobile"],
    challenge:
      "Rural students often lack access to quality education and multilingual resources.",
    solution:
      "Developed an offline-first learning platform with multilingual support and gamified learning.",
    impact:
      "Improved educational accessibility and engagement.",
    stack: ["Flutter", "Firebase", "MongoDB", "Node.js"],
  },

  {
    id: "03",
    title: "VR Space Escape Game",
    subtitle: "Immersive VR Experience",
    year: "2025",
    tags: ["VR", "Unity", "XR"],
    challenge:
      "Creating immersive interactions while maintaining smooth VR performance.",
    solution:
      "Used Unity and XR Toolkit to build realistic hand interactions and navigation.",
    impact:
      "Delivered engaging gameplay optimized for Meta Quest.",
    stack: ["Unity", "C#", "XR Toolkit", "Meta Quest"],
  },

  {
  id: "04",
  title: "Beta Tester — Indus Battle Royale",
  subtitle: "Game Testing & Quality Assurance",
  year: "2025",
  tags: ["QA", "Testing", "Gaming"],

  challenge:
    "Large-scale multiplayer games require extensive testing before public releases.",

  solution:
    "Participated in gameplay testing, bug identification, feature validation and user experience evaluation during beta testing.",

  impact:
    "Contributed feedback that helped improve stability, gameplay balance and overall user experience.",

  stack: [
    "QA Testing",
    "Bug Reporting",
    "Gameplay Analysis",
    "User Experience"
  ]
},
];
  const [activeProject, setActiveProject] = useState(0);
  useEffect(() => {
  const handleScroll = () => {
    const sections = document.querySelectorAll("[id^='project-']");

    let currentProject = 0;

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();

      if (rect.top <= 200) {
        currentProject = index;
      }
    });

    setActiveProject(currentProject);
  };

  window.addEventListener("scroll", handleScroll);

  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
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
      <section className="min-h-screen flex items-center justify-center text-center px-6">

  <div>

    <p className="uppercase tracking-[0.4em] text-purple-400 text-sm mb-8">
      FRONTEND DEVELOPER • UI/UX ENTHUSIAST
    </p>

    <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8">
      Satya Jeevana
      <br />
      Abhiram Gullipalli
    </h1>

    <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12">
      Building intuitive digital experiences through modern web development,
      React applications and user-centered design.
    </p>

    <div className="flex justify-center gap-6">

      <a
        href="#projects"
        className="bg-white text-black px-8 py-4 rounded-full font-semibold"
      >
        View Projects
      </a>

      <a
        href="#contact"
        className="border border-white px-8 py-4 rounded-full"
      >
        Contact Me
      </a>

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
I am a Computer Science Engineering student focused on building
modern web applications, interactive user interfaces, and intelligent
software solutions. My experience spans React development, AI-powered
applications, robotics projects, and cloud-based deployments. I enjoy
combining technical problem-solving with thoughtful design to create
products that are both functional and engaging.
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

  
  <section
  id="projects"
  className="bg-black border-t border-white/10"
>
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="flex justify-between items-center px-8 py-12">
      <h2 className="text-6xl md:text-8xl font-bold">
        Things I've Built
      </h2>

      <p className="text-white/40">
        {projects.length} projects — scroll to explore
      </p>
    </div>

    <div className="grid lg:grid-cols-[40%_60%] border-t border-white/10">

      {/* LEFT PANEL */}
      <div className="sticky top-24 h-screen border-r border-white/10 p-10">

        <h1 className="text-[140px] font-bold text-white/10 leading-none">
          {projects[activeProject].id}
        </h1>

        <p className="text-white/30 mb-8">
          / {projects.length}
        </p>

        <h2 className="text-5xl font-bold mb-4">
          {projects[activeProject].title}
        </h2>

        <p className="text-white/50 text-xl mb-6">
          {projects[activeProject].subtitle}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {projects[activeProject].tags.map((tag) => (
            <span
              key={tag}
              className="border border-white/10 px-3 py-1 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-green-400 mb-10">
          ● {projects[activeProject].year}
        </p>

        <div className="border-t border-white/10 pt-6">

          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`py-4 px-4 mb-2 rounded-lg transition ${
                activeProject === index
                  ? "bg-white/5 text-white"
                  : "text-white/40"
              }`}
            >
              <span className="mr-4">
                {project.id}
              </span>

              {project.title}
            </div>
          ))}

        </div>

      </div>

      {/* RIGHT PANEL */}
      <div>

        {projects.map((project, index) => (
          <section
            key={project.id}
            id={`project-${index}`}
            className="h-screen flex flex-col justify-center p-16 border-b border-white/10"
          >

            <p className="text-purple-400 mb-4 text-lg">
              {project.id}
            </p>

            <h2 className="text-6xl font-bold mb-4">
              {project.title}
            </h2>

            <p className="text-white/50 text-2xl mb-12">
              {project.subtitle}
            </p>

            <div className="mb-12">
              <h3 className="text-red-400 uppercase tracking-widest mb-4">
                Challenge
              </h3>

              <p className="text-white/70 text-lg leading-8">
                {project.challenge}
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-yellow-400 uppercase tracking-widest mb-4">
                Solution
              </h3>

              <p className="text-white/70 text-lg leading-8">
                {project.solution}
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-green-400 uppercase tracking-widest mb-4">
                Impact
              </h3>

              <p className="text-white/70 text-lg leading-8">
                {project.impact}
              </p>
            </div>

            <div className="border-t border-white/10 pt-8">

              <h4 className="text-white/40 uppercase mb-5">
                Stack
              </h4>

              <div className="flex flex-wrap gap-3">

                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="border border-white/10 px-4 py-2 rounded-full"
                  >
                    {tech}
                  </span>
                ))}

              </div>

            </div>

          </section>
        ))}

      </div>

    </div>

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
    <div
      key={cert.title}
      className="border border-white/10 bg-white/5 p-8 rounded-3xl hover:border-purple-500 transition"
    >
      <h3 className="text-2xl font-semibold mb-3">
        {cert.title}
      </h3>

      <p className="text-white/60 mb-6">
        {cert.desc}
      </p>

      <a
        href={cert.link}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center text-purple-400 font-medium hover:text-purple-300"
      >
        View Certificate →
      </a>
    </div>
  ))}

</div>
      </section>

      {/* Contact */}
      <section
  id="contact"
  className="max-w-6xl mx-auto px-8 py-32"
>
  <div className="text-center">

    <div className="inline-flex items-center px-5 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 mb-8">
      Available for Opportunities
    </div>

    <p className="text-purple-400 uppercase tracking-[0.3em] mb-4">
      LET'S CONNECT
    </p>

    <h2 className="text-5xl md:text-7xl font-bold mb-8">
      Get In Touch
    </h2>

    <p className="text-white/60 text-xl max-w-3xl mx-auto mb-16">
      I'm always open to discussing new projects, software development
      opportunities, AI innovations, internships, research work, and
      collaborative ideas.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* Email */}
      <a
        href="mailto:satyajeevanaabhiramgullipalli@gmail.com"
        className="border border-white/10 bg-white/5 p-8 rounded-3xl hover:border-purple-500 hover:bg-white/10 transition"
      >
        <h3 className="text-2xl font-semibold mb-3">
          Email
        </h3>

        <p className="text-white/50 mb-6 text-sm break-all">
          satyajeevanaabhiramgullipalli@gmail.com
        </p>

        <span className="text-purple-400">
          Send Mail →
        </span>
      </a>

      {/* Phone */}
      <a
        href="tel:+917032489359"
        className="border border-white/10 bg-white/5 p-8 rounded-3xl hover:border-purple-500 hover:bg-white/10 transition"
      >
        <h3 className="text-2xl font-semibold mb-3">
          Phone
        </h3>

        <p className="text-white/50 mb-6 text-sm">
          +91 7032489359
        </p>

        <span className="text-purple-400">
          Call →
        </span>
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/satyajeevanaabhiramgullipalli-ai"
        target="_blank"
        rel="noreferrer"
        className="border border-white/10 bg-white/5 p-8 rounded-3xl hover:border-purple-500 hover:bg-white/10 transition"
      >
        <h3 className="text-2xl font-semibold mb-3">
          GitHub
        </h3>

        <p className="text-white/50 mb-6 text-sm">
          View repositories and projects
        </p>

        <span className="text-purple-400">
          Visit →
        </span>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/satya-jeevana-abhiram-gullipalli-751168293"
        target="_blank"
        rel="noreferrer"
        className="border border-white/10 bg-white/5 p-8 rounded-3xl hover:border-purple-500 hover:bg-white/10 transition"
      >
        <h3 className="text-2xl font-semibold mb-3">
          LinkedIn
        </h3>

        <p className="text-white/50 mb-6 text-sm">
          Professional profile and networking
        </p>

        <span className="text-purple-400">
          Connect →
        </span>
      </a>

    </div>

  </div>
</section>

      <footer className="text-center py-10 text-white/40 border-t border-white/10">
        © 2026 Satya Jeevana Abhiram Gullipalli.  Built with React & Tailwind.
      </footer>

    </div>
  );
}

export default App;