import React from 'react';
import type { GitHubRepo } from '../../types';

interface ProjectCardProps {
  repo: GitHubRepo;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ repo }) => {
  return (
    <article className="project-card">
      <h2 className="project-card__title">{repo.name}</h2>
      <p className="project-card__description">
        {repo.description ?? 'Sin descripción proporcionada en el repositorio.'}
      </p>
      <div className="project-card__footer">
        <span className="project-card__lang">{repo.language ?? 'N/A'}</span>
        <span className="project-card__stars" aria-label="Estrellas">
          ★ {repo.stargazers_count}
        </span>
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card__link"
        >
          Ver repositorio ↗
        </a>
      </div>
    </article>
  );
};