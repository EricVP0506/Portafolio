function About() {
  try {
    return (
      <section id="sobre-mi" className="py-16 bg-white" data-name="about" data-file="components/About.js">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Sobre Mí</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">
                  Mi Historia Profesional
                </h3>
                <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                  Soy un estudiante de TI de 20 años apasionado por el desarrollo de aplicaciones 
                  web y móviles. Actualmente curso mis estudios en la Universidad Simón Bolívar 
                  y me especializo en tecnologías modernas, siempre buscando crear soluciones 
                  que generen un impacto positivo.
                </p>
                <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                  Mi enfoque se centra en escribir código limpio, escalable y mantenible, 
                  trabajando tanto en el frontend como en el backend para crear experiencias 
                  completas e intuitivas.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <div className="icon-map-pin text-lg text-[var(--primary-color)]"></div>
                    <span className="text-[var(--text-secondary)]">Tu Ciudad, País</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="icon-mail text-lg text-[var(--primary-color)]"></div>
                    <span className="text-[var(--text-secondary)]">eric.vazquez@ejemplo.com</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="card">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[var(--secondary-color)] flex items-center justify-center">
                      <div className="icon-graduation-cap text-xl text-[var(--primary-color)]"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--text-primary)]">Educación</h4>
                      <p className="text-[var(--text-secondary)]">Estudiante de TI - Universidad Simón Bolívar</p>
                    </div>
                  </div>
                </div>
                
                <div className="card">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[var(--secondary-color)] flex items-center justify-center">
                      <div className="icon-briefcase text-xl text-[var(--primary-color)]"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--text-primary)]">Experiencia</h4>
                      <p className="text-[var(--text-secondary)]">Estudiante y desarrollador</p>
                    </div>
                  </div>
                </div>
                
                <div className="card">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[var(--secondary-color)] flex items-center justify-center">
                      <div className="icon-award text-xl text-[var(--primary-color)]"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--text-primary)]">Proyectos</h4>
                      <p className="text-[var(--text-secondary)]">Múltiples proyectos académicos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}