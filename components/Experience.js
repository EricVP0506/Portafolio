function Experience() {
  try {
    const experiences = [
      {
        company: "Empresa Actual",
        position: "Senior Full Stack Developer",
        period: "2023 - Presente",
        description: "Desarrollo de aplicaciones web escalables utilizando tecnologías modernas. Liderazgo de equipo y arquitectura de soluciones.",
        technologies: ["React", "Node.js", "TypeScript", "AWS"]
      },
      {
        company: "Empresa Anterior",
        position: "Full Stack Developer",
        period: "2021 - 2023",
        description: "Desarrollo de APIs REST y aplicaciones frontend. Implementación de mejores prácticas de desarrollo y testing.",
        technologies: ["Vue.js", "Python", "Django", "PostgreSQL"]
      },
      {
        company: "Primera Empresa",
        position: "Frontend Developer",
        period: "2020 - 2021",
        description: "Desarrollo de interfaces de usuario responsivas y optimizadas. Colaboración estrecha con equipos de diseño.",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"]
      }
    ];

    return (
      <section id="experiencia" className="py-16 bg-[var(--secondary-color)]" data-name="experience" data-file="components/Experience.js">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Experiencia Profesional</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-[var(--primary-color)]"></div>
              
              {experiences.map((exp, index) => (
                <div key={index} className="relative mb-12 last:mb-0">
                  <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-[var(--primary-color)] rounded-full flex items-center justify-center">
                    <div className="icon-briefcase text-sm text-white"></div>
                  </div>
                  
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <div className="card">
                      <div className="mb-4">
                        <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-1">
                          {exp.position}
                        </h3>
                        <h4 className="text-lg text-[var(--primary-color)] mb-2">
                          {exp.company}
                        </h4>
                        <p className="text-sm text-[var(--text-secondary)] mb-4">
                          {exp.period}
                        </p>
                      </div>
                      
                      <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-[var(--primary-color)] bg-opacity-10 text-[var(--primary-color)] text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Experience component error:', error);
    return null;
  }
}