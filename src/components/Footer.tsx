const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <a href="/" className="font-display font-extrabold text-lg tracking-tight">
          Karo<span className="text-primary">Startup</span>
        </a>
        <p className="text-muted-foreground text-sm mt-1">Empowering Bharat's Founders.</p>
      </div>

      <div className="flex items-center gap-6">
        <a href="https://karostartup.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          karostartup.com
        </a>
        <a href="https://instagram.com/karostartup" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Instagram
        </a>
        <a href="https://linkedin.com/company/karostartup" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          LinkedIn
        </a>
        <a href="https://youtube.com/@karostartup" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          YouTube
        </a>
      </div>

      <p className="text-muted-foreground text-xs">© 2026 KaroStartup. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
