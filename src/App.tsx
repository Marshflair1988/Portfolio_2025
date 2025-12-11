import Header from './components/Header';
function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
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
  );
}

export default App;
