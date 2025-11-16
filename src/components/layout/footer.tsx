import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Logo } from '@/components/logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Logo />
            <p className="max-w-xs text-center text-sm md:text-left">
              Ofreciendo los mejores frutos secos naturales con calidad premium y un sabor excepcional.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 md:items-end">
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6 transition-colors hover:text-primary" />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6 transition-colors hover:text-primary" />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 transition-colors hover:text-primary" />
              </a>
            </div>
            <div className="text-center text-sm md:text-right">
              <p>contacto@dinosnatural.com</p>
              <p>+51 987 654 321</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-4 text-center text-sm">
          <p>&copy; {currentYear} Dinos Natural. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
