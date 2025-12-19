import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ProjectDetail from './components/ProjectDetail';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
        <footer className="bg-black border-t border-gray-800 text-gray-400 py-8">
          <div className="container-custom text-center">
            <p>
              © {new Date().getFullYear()} Portfolio. Built with React,
              TypeScript, and TailwindCSS.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
