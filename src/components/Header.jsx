import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function Header({
  subtitle = 'Manillas con hilo y piedras',
  showNav = true,
  rightContent = null,
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-amber-300 bg-white shadow-sm">
            <img
              src="/images/logo.png"
              alt="Entre Nudos"
              className="h-full w-full object-contain p-1"
            />
          </div>

          <div>
            <p className="text-lg font-medium tracking-wide text-zinc-900">
              Entre Nudos
            </p>
            <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
              {subtitle}
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        {rightContent ? (
          <div className="hidden md:block">{rightContent}</div>
        ) : (
          showNav && (
            <nav className="hidden items-center gap-8 text-sm text-zinc-600 md:flex">
              <a href="/" className="hover:text-fuchsia-600">Inicio</a>
             <a href="#nosotros" className="hover:text-fuchsia-600">Nosotros</a>
              <Link to="/galeria" className="hover:text-fuchsia-600">Galería</Link>
              <a href="/#contacto" className="hover:text-fuchsia-600">Contacto</a>
            </nav>
          )
        )}

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden rounded-lg border border-zinc-300 p-2"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-zinc-200 bg-white md:hidden">
          <nav className="flex flex-col gap-4 px-6 py-6 text-sm text-zinc-700">
            <a href="/" onClick={() => setOpen(false)}>Inicio</a>
           
              <a href="#nosotros" onClick={() => setOpen(false)}>Nosotros</a>
            <Link to="/galeria" onClick={() => setOpen(false)}>Galería</Link>
            <a href="/#contacto" onClick={() => setOpen(false)}>Contacto</a>
          </nav>
        </div>
      )}
    </header>
  );
}