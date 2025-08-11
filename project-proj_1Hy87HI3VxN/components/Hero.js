function Hero() {
  try {
    return (
      <section id="inicio" className="pt-20 pb-16 bg-gradient-to-br from-[var(--secondary-color)] to-white" data-name="hero" data-file="components/Hero.js">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6">
                Hola, soy{' '}
                <span className="text-gradient">Eric Vázquez Palacios</span>
              </h1>
              <p className="text-xl text-[var(--text-secondary)] mb-8 leading-relaxed">
                Desarrollador Full Stack especializado en crear soluciones digitales innovadoras. 
                Transformo ideas en experiencias web excepcionales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => document.getElementById('proyectos').scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary"
                >
                  Ver Proyectos
                </button>
                <button 
                  onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
                  className="btn-secondary"
                >
                  Contactar
                </button>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent-color)] p-2">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Foto de perfil" 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                  <div className="icon-code text-2xl text-[var(--primary-color)]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}