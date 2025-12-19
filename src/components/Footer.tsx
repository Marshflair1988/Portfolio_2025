const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 text-gray-400 py-8">
      <div className="container-custom text-center">
        <p>
          © {new Date().getFullYear()} Portfolio. Built with React, TypeScript,
          and TailwindCSS. Designed and developed by Marsh Woolgar.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
