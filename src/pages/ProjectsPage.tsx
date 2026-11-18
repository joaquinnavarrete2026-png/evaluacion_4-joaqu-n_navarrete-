import React from 'react';
import { useFetchApi } from '../hooks/useFetchApi';
import type { GitHubRepo } from '../types';
import { ProjectCard } from '../components/ProjectCard/ProjectCard';

export const ProjectsPage: React.FC = () => {
  // Recuerda usar tu usuario real de GitHub
  const API_URL = 'https://api.github.com/users/joaquinnavarrete2026-png/repos?sort=updated&per_page=6';
  const { data: repos, loading, error } = useFetchApi<GitHubRepo[]>(API_URL);

  return (
    <main className="main-content">
      <div className="projects-section">
        <header className="projects-section__header">
          <h1 className="projects-section__title">Repositorios y Desarrollo</h1>
          <p className="projects-section__subtitle">
            Sincronización en tiempo real mediante GitHub REST API
          </p>
        </header>

        {/* Estado de carga accesible */}
        {loading && (
          <div className="projects-section__status" role="status" aria-live="polite">
            Cargando datos desde el servidor externo...
          </div>
        )}

        {/* Estado de error */}
        {error && (
          <div className="projects-section__status projects-section__status--error" role="alert">
            No fue posible obtener los datos: {error}
          </div>
        )}

        {/* Estado de éxito */}
        {!loading && !error && repos && (
          <section className="projects-section__grid" aria-label="Listado de repositorios">
            {repos.map((repo) => (
              <ProjectCard key={repo.id} repo={repo} />
            ))}
          </section>
        )}
      </div>
    </main>
  );
};