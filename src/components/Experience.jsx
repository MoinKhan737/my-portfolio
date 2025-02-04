import React from 'react';

const Experience = () => {
    const experiences = [
        {
          role: 'Full Stack Developer',
          company: 'Operate Live, Bangalore',
          duration: 'December 2023 – January 2025',
          responsibilities: [
            'Spearheaded the development of web and mobile applications using React.js, React Native, Node.js, Express.js, and MongoDB.',
            'Increased user engagement by 30% by implementing intuitive user interfaces and reducing server response times by 20%.',
            'Collaborated with cross-functional teams to align business needs with technical solutions.',
          ],
        },
        {
          role: 'Full Stack Developer Intern',
          company: 'Operate Live, Bangalore',
          duration: 'June 2023 – September 2023',
          responsibilities: [
            'Developed MERN stack applications, enhancing the user experience and increasing monthly active users by 15%.',
            'Contributed to end-to-end application deployment, ensuring smooth functionality across web and Android platforms.',
          ],
        },
       
      ];
      

  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.role} | {exp.company}</h3>
            <p>{exp.duration}</p>
            <ul>
              {exp.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;