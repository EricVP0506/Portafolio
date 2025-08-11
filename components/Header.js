function Header() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    };

    return (
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-[var(--border-color)]" data-name="header" data-file="components/Header.js">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-gradient">
              Mi Portafolio
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                Inicio
              </button>
              <button onClick={() => scrollToSection('sobre-mi')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                Sobre Mí
              </button>
              <button onClick={() => scrollToSection('experiencia')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                Experiencia
              </button>
              <button onClick={() => scrollToSection('proyectos')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                Proyectos
              </button>
              <button onClick={() => scrollToSection('habilidades')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                Habilidades
              </button>
              <button onClick={() => scrollToSection('contacto')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                Contacto
              </button>
            </nav>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              <div className="icon-menu text-xl text-[var(--text-primary)]"></div>
            </button>
          </div>

          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-[var(--border-color)] pt-4">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('inicio')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                  Inicio
                </button>
                <button onClick={() => scrollToSection('sobre-mi')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                  Sobre Mí
                </button>
                <button onClick={() => scrollToSection('experiencia')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                  Experiencia
                </button>
                <button onClick={() => scrollToSection('proyectos')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                  Proyectos
                </button>
                <button onClick={() => scrollToSection('habilidades')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                  Habilidades
                </button>
                <button onClick={() => scrollToSection('contacto')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                  Contacto
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}