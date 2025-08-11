function Projects() {
  try {
    const projects = [
      {
        title: "Sistema CRM Personalizado",
        description: "Sistema completo de gestión de relaciones con clientes desarrollado con tecnologías modernas. Incluye gestión de leads, seguimiento de ventas y análisis de datos.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        liveUrl: "http://localhost:3000/",
        githubUrl: "#",
        featured: true
      },
      {
        title: "E-commerce Platform",
        description: "Plataforma de comercio electrónico con carrito de compras, pasarela de pagos y panel de administración completo.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        technologies: ["Vue.js", "Laravel", "MySQL", "Stripe"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false
      },
      {
        title: "App de Gestión de Tareas",
        description: "Aplicación web para gestión de proyectos y tareas con colaboración en tiempo real y notificaciones.",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false
      }
    ];

    return (
      <section id="proyectos" className="py-16 bg-white" data-name="projects" data-file="components/Projects.js">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Mis Proyectos</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className={`card hover:shadow-xl transition-shadow duration-300 ${project.featured ? 'lg:col-span-2' : ''}`}>
                  <div className="relative mb-6 overflow-hidden rounded-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    {project.featured && (
                      <div className="absolute top-4 left-4 bg-[var(--primary-color)] text-white px-3 py-1 rounded-full text-sm font-medium">
                        Proyecto Destacado
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-[var(--secondary-color)] text-[var(--text-primary)] text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[var(--primary-color)] hover:text-blue-700 transition-colors"
                    >
                      <div className="icon-external-link text-sm"></div>
                      <span className="text-sm font-medium">Ver Proyecto</span>
                    </a>
                    
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                    >
                      <div className="icon-github text-sm"></div>
                      <span className="text-sm font-medium">Código</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-[var(--text-secondary)] mb-6">
                ¿Quieres ver más detalles sobre mi trabajo?
              </p>
              <a 
                href="http://localhost:3000/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-3"
              >
                <div className="icon-external-link text-lg"></div>
                Acceder a mi CRM
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Projects component error:', error);
    return null;
  }
}