// Tipado estricto para GitHub REST API (Alternativa A)
export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
}

// Tipado para tus proyectos propios migrados desde la E2
export interface ProjectItem {
  id: number;
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  urlRepo: string;
  destacado?: boolean;
}