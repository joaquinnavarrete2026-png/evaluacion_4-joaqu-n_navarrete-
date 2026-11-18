# Inventario de Componentes y Trazabilidad — Evaluación Nº4

Este documento detalla la estructura modular de la aplicación en React y su correspondencia con el portafolio original de la Evaluación Nº2.

## 📋 Mapeo de Arquitectura (Evaluación 2 vs React)

| Sección / Elemento E2 (HTML) | Componente / Ruta en React | Descripción y Propósito |
| :--- | :--- | :--- |
| **Cabecera y Menú** | `src/components/Navbar/Navbar.tsx` | Navegación SPA reactiva con `NavLink` y selector de tema global. |
| **Sección "Sobre mí"** | `src/pages/HomePage.tsx` | Presentación personal del estudiante de Ingeniería Civil en Informática (UCT). |
| **Sección "Trabajos"** | `src/pages/HomePage.tsx` & `ProjectsPage.tsx` | Visualización de prácticas locales e integración con GitHub REST API. |
| **Tarjetas de Repositorios**| `src/components/ProjectCard/ProjectCard.tsx` | Componente reutilizable tipado mediante `props` estrictas (`GitHubRepo`). |
| **Formulario de Contacto** | `src/pages/ContactPage.tsx` | Formulario interactivo con etiquetas asociadas (`htmlFor`) y validación de estado. |
| **Estado Transversal** | `src/context/ThemeContext.tsx` | Implementación de Context API para conmutación de temas (Modo Oscuro / Claro). |