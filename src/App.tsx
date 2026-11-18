import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar/Navbar';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';

const NotFoundPage: React.FC = () => (
  <main className="main-content">
    <h1>404 - Página no encontrada</h1>
    <p>La ruta solicitada no existe en este portafolio.</p>
  </main>
);

export function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <footer className="footer">
          <p>&copy; 2026 Joaquín Navarrete Figueroa — Universidad Católica de Temuco. Todos los derechos reservados.</p>
        </footer>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;