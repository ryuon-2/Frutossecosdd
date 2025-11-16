import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" asChild>
            <a href="#products">Productos</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="#contact">Contacto</a>
          </Button>
          <Button asChild>
            <a href="#quick-buy">Pedir Ahora</a>
          </Button>
        </nav>
        <div className="md:hidden">
           <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 py-8">
                 <Logo />
                 <nav className="flex flex-col items-start gap-4">
                    <Button variant="link" asChild className="text-lg">
                      <a href="#products">Productos</a>
                    </Button>
                    <Button variant="link" asChild className="text-lg">
                      <a href="#contact">Contacto</a>
                    </Button>
                    <Button asChild className="w-full">
                      <a href="#quick-buy">Pedir Ahora</a>
                    </Button>
                  </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
