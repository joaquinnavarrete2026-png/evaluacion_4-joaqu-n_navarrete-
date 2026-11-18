import React, { useState } from 'react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <main className="main-content">
      <section id="contacto" className="section">
        <h2 className="section__title">Contacto</h2>
        <p className="section__text">¿Te interesa mi perfil o quieres conversar sobre un proyecto? Escríbeme directamente:</p>
        
        {enviado ? (
          <div className="form-success" role="status" aria-live="polite">
            ¡Mensaje enviado con éxito! Gracias por contactarte, Joaquín te responderá tan pronto como pueda!.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="nombre">Nombre:</label>
              <input 
                type="text" 
                id="nombre" 
                name="nombre" 
                required 
                placeholder="Tu nombre"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo electrónico:</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                placeholder="tu@correo.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje:</label>
              <textarea 
                id="mensaje" 
                name="mensaje" 
                rows={4} 
                required 
                placeholder="Escribe tu mensaje aquí..."
                value={formData.mensaje}
                onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
              />
            </div>
            <button type="submit" className="btn-enviar">Enviar Mensaje</button>
          </form>
        )}
      </section>
    </main>
  );
};
