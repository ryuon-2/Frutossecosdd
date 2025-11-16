import { Leaf } from 'lucide-react';

export function Logo() {
  return (
    <a href="/" className="flex items-center gap-2" aria-label="Dinos Natural Home">
      <Leaf className="h-6 w-6 text-primary" />
      <span className="text-xl font-semibold text-primary">Dinos Natural</span>
    </a>
  );
}
