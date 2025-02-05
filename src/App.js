// import React from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Experience from './components/Experience';
// import Contact from './components/Contact';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Hero />
//       <About />
//       <Skills />
//       <Projects />
//       <Experience />
//       <Contact />
//     </div>
//   );
// }

// export default App;



import { motion } from "framer-motion";

function App() {
  const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <section className="hero min-h-screen flex items-center justify-center text-center px-4">
        <motion.div
          className="container mx-auto"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hi, I'm Moin Khan
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-blue-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Full-stack Developer | React.js & React Native Expert
          </motion.p>
          <motion.a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            View My Projects
          </motion.a>
        </motion.div>
      </section>

      {/* About Me Section */}
      <section id="about" className="about py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg leading-relaxed mb-6">
                As a passionate developer, I enjoy solving complex problems and building user-friendly applications.
                With hands-on experience in both front-end and back-end development, I specialize in creating seamless
                experiences across web and mobile platforms. My recent work includes integrating face comparison into an
                attendance management app, showcasing my ability to implement innovative solutions using cutting-edge
                technologies.
              </p>
            </motion.div>
            <motion.div
              className="about-skills"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              <h3 className="text-2xl font-semibold mb-4">My Skills</h3>
              <ul className="space-y-2">
                {[
                  "Frontend: React.js, React Native, JavaScript (ES6+)",
                  "Backend: Node.js, Express.js, Supabase",
                  "Databases: MongoDB, Firebase",
                  "Tools: Socket.IO, Firebase Cloud Messaging, Google APIs",
                ].map((skill, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects py-20 px-4 bg-gray-800">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            My Projects
          </motion.h2>
          <motion.div
            className="project-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {[
              {
                title: "Attendance Management App",
                description:
                  "Built a full-stack attendance management system with React Native. Integrated face comparison using AI/ML libraries to verify user identity during check-ins. Added auto login/logout, leave management, task tracking, and location tracking for employees visiting client sites.",
                tags: ["React Native", "TensorFlow", "Face-API", "Firebase", "Google API", "Headless JS"],
                link: "https://employees.live/",
              },
              {
                title: "Finance Management App",
                description:
                  "Developed a budget-focused finance management system. Features include bill payment, tax payment, invoicing, employee salary management, and a dashboard displaying due bills, invoices, and remaining amounts.",
                tags: ["React Native", "MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js"],
                link: null,
              },
              {
                title: "Project Management Web App",
                description:
                  "Built a MERN stack application for employee work tracking, project progress, and task management. Improved team collaboration and reduced project turnaround time by 40%.",
                tags: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js", "Google API"],
                link: "https://assignments.operate.live/",
              },
              {
                title: "Job-Seeking Android App",
                description:
                  "Developed an Android job-seeking platform with features like user connections, chatting, job applications, feed uploads, notifications, and direct recruiter interactions.",
                tags: ["React Native", "Firebase", "Socket.IO", "Google API", "MERN Stack"],
                link: "https://bizibees.in/download_page.html",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                className="project-card bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
              >
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="project-tags flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-blue-600 text-sm px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                 {project.link&& <button
                    className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition duration-300"
                    onClick={() => window.open(project.link, '_blank')} // Opens the link in a new tab
                  >
                    See Project
                  </button>}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.h2
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            Let's Work Together!
          </motion.h2>
          <motion.p
            className="text-xl mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Feel free to reach out to me for collaborations or job opportunities.
          </motion.p>
          <div className="contact-buttons flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            {/* Email Button */}
            <motion.a
              href="mailto:moinkhan29727@gmail.com"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Email Me
            </motion.a>

            {/* LinkedIn Button */}
            <motion.a
              href="https://www.linkedin.com/in/moin-khan-56a339203?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              LinkedIn
            </motion.a>

            {/* Call Button */}
            {isMobileDevice() ? (
              <motion.a
                href="tel:+919945126529" // Replace with your actual phone number
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Call Me
              </motion.a>
            ) : (
              <motion.div
                className="bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg cursor-default"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                +91 99451 26529
              </motion.div>
            )}
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="footer bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            &copy; 2023 Moin Khan. All rights reserved.
          </motion.p>
        </div>
      </footer>
    </div>
  );
}

export default App;

