function Contact() {
  try {
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitStatus, setSubmitStatus] = React.useState('');

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setSubmitStatus('success');
        setIsSubmitting(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        setTimeout(() => setSubmitStatus(''), 3000);
      }, 1000);
    };

    return (
      <section id="contacto" className="py-16 bg-white" data-name="contact" data-file="components/Contact.js">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Contacto</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-6">
                  ¡Trabajemos Juntos!
                </h3>
                <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
                  Estoy siempre abierto a nuevas oportunidades y proyectos interesantes. 
                  Si tienes una idea o necesitas ayuda con tu próximo proyecto, no dudes en contactarme.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[var(--secondary-color)] flex items-center justify-center">
                      <div className="icon-mail text-xl text-[var(--primary-color)]"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--text-primary)]">Email</h4>
                      <p className="text-[var(--text-secondary)]">eric.vazquez@ejemplo.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[var(--secondary-color)] flex items-center justify-center">
                      <div className="icon-phone text-xl text-[var(--primary-color)]"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--text-primary)]">Teléfono</h4>
                      <p className="text-[var(--text-secondary)]">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[var(--secondary-color)] flex items-center justify-center">
                      <div className="icon-map-pin text-xl text-[var(--primary-color)]"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--text-primary)]">Ubicación</h4>
                      <p className="text-[var(--text-secondary)]">Tu Ciudad, País</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-semibold text-[var(--text-primary)] mb-4">Sígueme en:</h4>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-lg bg-[var(--primary-color)] bg-opacity-10 flex items-center justify-center text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white transition-colors">
                      <div className="icon-linkedin text-lg"></div>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-lg bg-[var(--primary-color)] bg-opacity-10 flex items-center justify-center text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white transition-colors">
                      <div className="icon-github text-lg"></div>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-lg bg-[var(--primary-color)] bg-opacity-10 flex items-center justify-center text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white transition-colors">
                      <div className="icon-twitter text-lg"></div>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-6">
                  Envíame un Mensaje
                </h3>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800">¡Mensaje enviado correctamente! Te responderé pronto.</p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-colors"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-colors"
                      placeholder="eric.vazquez@ejemplo.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                      Asunto *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-colors"
                      placeholder="Asunto del mensaje"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-colors resize-vertical"
                      placeholder="Cuéntame sobre tu proyecto o idea..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="icon-loader text-lg animate-spin"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <div className="icon-send text-lg"></div>
                        Enviar Mensaje
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        <footer className="mt-16 pt-8 border-t border-[var(--border-color)]">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="text-[var(--text-secondary)]">
                © 2024 Mi Portafolio. Desarrollado con pasión y dedicación.
              </p>
            </div>
          </div>
        </footer>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    return null;
  }
}