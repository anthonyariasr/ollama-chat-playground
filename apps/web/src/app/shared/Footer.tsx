const Footer = () => {
  return (
    <footer className="w-full px-6 py-6 mt-16 border-t border-[var(--accent)] bg-[var(--background)] text-sm text-center">
      <p className="text-[var(--foreground)]">
        &copy; {new Date().getFullYear()} AmberSky. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
