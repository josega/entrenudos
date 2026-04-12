import { Link } from 'react-router-dom';
import { getWhatsAppLink } from "../utils/contact";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-zinc-200 bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(236,72,153,0.08),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(251,191,36,0.10),_transparent_24%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.9fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-amber-300 bg-white shadow-sm">
                <img
                  src="/images/logo.png"
                  alt="Entre Nudos"
                  className="h-full w-full object-contain p-1"
                />
              </div>

              <div>
                <p className="text-lg font-semibold tracking-wide text-zinc-900">
                  Entre Nudos
                </p>
                <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
                  Cada nudo cuenta
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-zinc-600">
              Accesorios artesanales creados para acompañar tu estilo y tus
              momentos especiales. Cada pieza está hecha con dedicación,
              intención y detalles que hacen la diferencia.
            </p>


          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-900">
              Explora
            </p>

            <nav className="mt-5 flex flex-col gap-3 text-sm text-zinc-600">
              <a href="/#nosotros" className="transition hover:text-fuchsia-600">
                Sobre la marca
              </a>
              <a href="/#colecciones" className="transition hover:text-fuchsia-600">
                Diseños destacados
              </a>
              <Link to="/galeria" className="transition hover:text-fuchsia-600">
                Galería
              </Link>
              <a href="/#contacto" className="transition hover:text-fuchsia-600">
                Contacto
              </a>
            </nav>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-900">
              Hablemos
            </p>

            <div className="mt-5 space-y-4 text-sm text-zinc-600">
              <p className="leading-7">
                ¿Quieres hacer un pedido, regalar una manilla o solicitar un
                diseño personalizado?
              </p>

              <a
                href={getWhatsAppLink('Hola, quiero comprar una manilla')}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-zinc-900 px-5 py-2.5 font-medium text-white transition hover:bg-zinc-800"
              >
                Hacer una compra
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-4">

  {/* WhatsApp */}
  <a
    href={getWhatsAppLink('Hola, quiero comprar una manilla')}
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-2 rounded-full bg-[#05b04a] px-4 py-2 text-sm font-medium text-white transition hover:bg-fuchsia-700"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
    >
      <path d="M20.52 3.48A11.8 11.8 0 0012.01 0C5.38 0 .01 5.37.01 12c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.61A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52zM12 21.8c-1.9 0-3.75-.5-5.38-1.46l-.38-.22-3.67.96.98-3.58-.25-.37A9.8 9.8 0 012.2 12c0-5.4 4.4-9.8 9.8-9.8 2.62 0 5.08 1.02 6.93 2.87A9.74 9.74 0 0121.8 12c0 5.4-4.4 9.8-9.8 9.8zm5.39-7.3c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15s-.77.97-.95 1.17c-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.46-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.07-.8.37s-1.05 1.02-1.05 2.5 1.08 2.9 1.23 3.1c.15.2 2.12 3.23 5.14 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/>
    </svg>
    WhatsApp
  </a>

  {/* Instagram */}
  <a
    href="https://instagram.com/entre_nudos.oficial"
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white transition 
               bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] hover:brightness-110"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1.2" fill="currentColor" stroke="none" />
    </svg>
    Instagram
  </a>

</div>
          <div className="mt-10 border-t border-zinc-200 pt-6 text-center text-sm text-zinc-500">
      © 2026 Entre Nudos. Todos los derechos reservados.
    </div>
          
      </div>
    </footer>
  );
}