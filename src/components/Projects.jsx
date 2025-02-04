import React from 'react';

const Projects = () => {
  // const projects = [
  //   {
  //     title: 'Attendance Management App',
  //     description: 'A mobile app for managing attendance using face comparison technology.',
  //     technologies: ['React Native', 'Supabase', 'Firebase', 'Face Comparison API'],
  //     link: '#',
  //   },
  //   {
  //     title: 'Real-Time Chat App',
  //     description: 'A real-time chat application built with Socket.IO and React.',
  //     technologies: ['React.js', 'Socket.IO', 'Node.js'],
  //     link: '#',
  //   },
  // ];
  const projects = [
    {
      "title": "Attendance Management App",
      "description": "Built a full-stack attendance management system with React Native. Integrated face comparison using AI/ML libraries to verify user identity during check-ins. Added auto login/logout, leave management, task tracking, and location tracking for employees visiting client sites.",
      "technologies": ["React Native", "TensorFlow", "Face-API", "Firebase", "Google API", "Headless JS"]
    },
    {
      "title": "Finance Management App",
      "description": "Developed a budget-focused finance management system. Features include bill payment, tax payment, invoicing, employee salary management, and a dashboard displaying due bills, invoices, and remaining amounts.",
      "technologies": ["React Native", "MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js"]
    },
    {
      "title": "Project Management Web App",
      "description": "Built a MERN stack application for employee work tracking, project progress, and task management. Improved team collaboration and reduced project turnaround time by 40%.",
      "technologies": ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js", "Google API"]
    },
    {
      "title": "Job-Seeking Android App",
      "description": "Developed an Android job-seeking platform with features like user connections, chatting, job applications, feed uploads, notifications, and direct recruiter interactions.",
      "technologies": ["React Native", "Firebase", "Socket.IO", "Google API", "MERN Stack"]
    }
  ]
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
              {project.technologies.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
            {/* <a href={project.link} className="project-link">View Project</a> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;