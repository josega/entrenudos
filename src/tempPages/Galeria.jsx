import { Link } from 'react-router-dom';

export default function Galeria() {
  const galleryItems = [
  {
    title: 'Azul Aura',
    description:
      'Manilla tejida en hilo azul profundo con piedras frontales en oro laminado que aportan brillo, elegancia y un toque sofisticado.',
    price: '$63.000 COP',
    image: '/images/galeria-1.png',
  },
  {
    title: 'Rojo Intenso',
    description:
      'Manilla tejida en hilo rojo vibrante con detalle sutil en oro laminado, llamativa y elegante.',
    price: '$35.000 COP',
    image: '/images/galeria-2.png',
  },
  {
    title: 'Negro Onix',
    description:
      'Manilla tejida en hilo negro con piedras en oro laminado que aportan un contraste lujoso y sofisticado.',
    price: '$45.000 COP',
    image: '/images/galeria-3.png',
  },
  {
    title: 'Dúo Tropical',
    description:
      'Set de manillas tejidas en hilo naranja vibrante con detalles en oro laminado que aportan brillo y frescura.',
    price: '$35.000 COP',
    image: '/images/galeria-4.png',
  },
  {
    title: 'Lila Suave',
    description:
      'Manilla en tono lila con piedras labradas en oro laminado, femenina y delicada',
    price: '$85.000 COP',
    image: '/images/galeria-5.png',
  },
  {
    title: 'Verde Oliva',
    description:'Duo de manillas verde oliva, con sofisticados detalles en oro laminado',
    price: '$58.000 COP',
    image: '/images/galeria-6.png',
  },
   {
    title: 'Gemelas Carmesí',
    description:'Dos manillas, un mismo estilo. Perfectas para compartir con alguien especial',
    price: '$50.000 COP',
    image: '/images/galeria-7.png',
  },
      {
    title: 'Colorful Duo',
    description:
      'Duo de manillas brillantes con detalles en oro laminado, para resaltar las personalidades más vibrantes',
    price: '$38.000 COP',
    image: '/images/galeria-8.png',
  },
  {
    title: 'Tobillera Roja',
    description:
      'Tobillera tejida en hilo rojo con pequeños detalles en oro laminado que aportan un brillo llamativo y elegante.',
    price: '$50.000 COP',
    image: '/images/galeria-9.png',
  },
      
       {
    title: 'Ebano y Oro',
    description:
      'Manilla tejida en hilo negro con un entramado en tono dorado que resalta su diseño y estilo. Complementada con piedras en oro laminado',
    price: '$38.000 COP',
    image: '/images/galeria-10.png',
  },
      
       {
    title: 'Dúo Rojo',
    description:
      'Set de manillas tejidas en hilo fucsia con detalles en oro laminado, dos piezas que combinan perfectamente.',
    price: '$65.000 COP',
    image: '/images/galeria-11.png',
  },
       {
    title: 'Dúo Fucsia',
    description:
      'Set de manillas tejidas en hilo fucsia con detalles en oro laminado, femeninas y muy energicas.',
    price: '$50.000 COP',
    image: '/images/galeria-12.png',
  },
      
];
  return (
    <div className="min-h-screen bg-stone-50 text-zinc-800">
      <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-amber-300 bg-white shadow-sm">
              <img
                src="/images/logo.png"
                alt="Entre Nudos"
                className="h-full w-full object-contain p-1"
              />
            </div>

            <div>
              <p className="text-lg font-medium tracking-wide">Entre Nudos</p>
              <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
                Galería
              </p>
            </div>
          </div>

          <nav className="flex items-center gap-3">
            <Link
              to="/"
              className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition hover:border-fuchsia-300 hover:text-fuchsia-700"
            >
              Volver al inicio
            </Link>
            <a
              href="#grid"
              className="rounded-full bg-fuchsia-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-fuchsia-700"
            >
              Ver fotos
            </a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(236,72,153,0.10),_transparent_35%),radial-gradient(circle_at_right,_rgba(251,191,36,0.16),_transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-amber-300 bg-white px-4 py-1 text-sm text-zinc-600 shadow-sm">
              Conoce Nuestro Trabajo
            </span>

           <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
  Descubre manillas que elevan tu estilo con detalles únicos.
</h1>

<p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
   Detrás de cada manilla hay un proceso de diseño y cuidado por los detalles. Aquí puedes ver cómo trabajamos cada pieza, desde las combinaciones de hilo hasta los acabados que hacen que cada diseño se vea y se sienta especial.
</p>
          </div>
        </div>
      </section>

      <section id="grid" className="mx-auto max-w-7xl px-6 pb-16 lg:px-8 lg:pb-24">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-fuchsia-600">
              Galería visual
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Encuentra la manilla perfecta para ti.
            </h2>
            <p className="mt-4 text-base leading-8 text-zinc-600">
Explora nuestra colección y elige diseños que puedes usar todos los días o regalar como un detalle especial. Cada pieza está pensada para resaltar tu estilo.
            </p>
          </div>
        </div>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">
          {galleryItems.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className="mb-5 break-inside-avoid overflow-hidden rounded-[1.8rem] border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="p-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full rounded-[1.4rem] object-cover ${item.height}`}
                />
              </div>

              <div className="px-5 pb-5">
                <p className="text-lg font-semibold text-zinc-900">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-7 text-zinc-600">
                  {item.description}
                </p>
                   <p className="text-sm font-semibold text-zinc-600">
                      {item.price}
                    </p>
              </div>
                    
                   
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[2rem] border border-zinc-200 bg-gradient-to-br from-white to-amber-50 p-8 shadow-sm lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.28em] text-fuchsia-600">
                  Estilo Entre Nudos
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900">
                  Una galería pensada para vender desde la imagen.
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-600">
                  Aquí puedes mostrar fondos en mármol, piezas sobre mano,
                  composiciones por color, sets combinados y primeros planos de
                  detalles. Todo ayuda a que la marca se vea más cuidada,
                  coherente y deseable.
                </p>
              </div>

              <div className="rounded-[1.8rem] border border-amber-200 bg-white p-6">
                <p className="text-lg font-semibold text-zinc-900">
                  Ideas para esta galería
                </p>
               <ul className="mt-4 space-y-3 text-sm leading-7 text-zinc-600">
                  <li>• Diseños listos para usar o regalar</li>
                  <li>• Combinaciones elegantes y modernas</li>
                  <li>• Piezas hechas a mano con acabados finos</li>
                  <li>• Opciones personalizadas según tu estilo</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2026 Entre Nudos. Accesorios artesanales hechos con hilo y piedras.</p>
          <p>Instagram · WhatsApp · Pedidos personalizados</p>
        </div>
      </footer>
    </div>
  );
}