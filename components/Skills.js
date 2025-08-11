function Skills() {
  try {
    const skillCategories = [
      {
        title: "Frontend",
        icon: "monitor",
        skills: [
          { name: "React", level: 90 },
          { name: "Vue.js", level: 85 },
          { name: "TypeScript", level: 88 },
          { name: "CSS/SASS", level: 92 }
        ]
      },
      {
        title: "Backend",
        icon: "server",
        skills: [
          { name: "Node.js", level: 87 },
          { name: "Python", level: 83 },
          { name: "PHP", level: 80 },
          { name: "Express", level: 85 }
        ]
      },
      {
        title: "Base de Datos",
        icon: "database",
        skills: [
          { name: "MongoDB", level: 85 },
          { name: "PostgreSQL", level: 88 },
          { name: "MySQL", level: 90 },
          { name: "Redis", level: 75 }
        ]
      },
      {
        title: "Herramientas",
        icon: "wrench",
        skills: [
          { name: "Git", level: 95 },
          { name: "Docker", level: 80 },
          { name: "AWS", level: 78 },
          { name: "CI/CD", level: 82 }
        ]
      }
    ];

    return (
      <section id="habilidades" className="py-16 bg-[var(--secondary-color)]" data-name="skills" data-file="components/Skills.js">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Habilidades Técnicas</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skillCategories.map((category, index) => (
                <div key={index} className="card">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-[var(--primary-color)] bg-opacity-10 flex items-center justify-center">
                      <div className={`icon-${category.icon} text-lg text-[var(--primary-color)]`}></div>
                    </div>
                    <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-[var(--text-primary)]">
                            {skill.name}
                          </span>
                          <span className="text-xs text-[var(--text-secondary)]">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-[var(--primary-color)] h-2 rounded-full transition-all duration-500"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <div className="card max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                  Certificaciones y Logros
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="icon-award text-lg text-[var(--primary-color)]"></div>
                    <span className="text-[var(--text-secondary)]">AWS Certified Developer</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="icon-star text-lg text-[var(--primary-color)]"></div>
                    <span className="text-[var(--text-secondary)]">Google Analytics Certified</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="icon-code text-lg text-[var(--primary-color)]"></div>
                    <span className="text-[var(--text-secondary)]">React Professional Certificate</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="icon-database text-lg text-[var(--primary-color)]"></div>
                    <span className="text-[var(--text-secondary)]">MongoDB Certified Developer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Skills component error:', error);
    return null;
  }
}
