export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-foreground/70">
              © {currentYear} Prince Gautam. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/princegautam1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a 
              href="mailto:princegautam8764@gmail.com" 
              className="text-foreground/70 hover:text-accent transition-colors"
              aria-label="Email"
            >
              Email
            </a>
            <a 
              href="tel:+919630940880" 
              className="text-foreground/70 hover:text-accent transition-colors"
              aria-label="Phone"
            >
              Call
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 