import React from 'react';

export const HomePage: React.FC = () => {
  return (
    <main className="main-content">
      {/* Sección 1: Sobre mí */}
      <section id="sobre-mi" className="section">
        <h2 className="section__title">Sobre mí</h2>
        <p className="section__text">
          Hola, soy Joaquín Navarrete Figueroa, estudiante de primer año, segundo semestre, en la carrera de Ingeniería Civil en Informática en la Universidad Católica de Temuco. Me apasiona el desarrollo de software y me encuentro enfocado en el desarrollo frontend junior y la creación de soluciones web accesibles y responsivas.
        </p>
      </section>

      {/* Sección 2: Trabajos o prácticas del semestre */}
      <section id="proyectos" className="section">
        <h2 className="section__title">Trabajos y Prácticas del Semestre</h2>
        <div className="grid-proyectos">
          <article className="card">
            <h3 className="card__title">Portafolio Web Personal (P2)</h3>
            <p className="card__description">
              Interfaz desarrollada con HTML5 semántico y CSS externo, aplicando diseño responsivo con 3 puntos de quiebre y pautas de accesibilidad WCAG.
            </p>
          </article>
          <article className="card">
            <h3 className="card__title">Ejercicios Prácticos de Frontend</h3>
            <p className="card__description">
              Prácticas enfocadas en el dominio de selectores avanzados, jerarquía visual, maquetación flexible y adaptabilidad multidispositivo.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};