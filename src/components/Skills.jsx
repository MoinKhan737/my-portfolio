import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'React.js', level: '80%' },
    { name: 'React Native', level: '80%' },
    { name: 'Supabase', level: '80%' },
    { name: 'Firebase', level: '90%' },
    { name: 'Socket.IO', level: '80%' },
    { name: 'AWS', level: '40%' },
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <span>{skill.name}</span>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: skill.level }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;