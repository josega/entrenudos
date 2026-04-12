import { Link } from 'react-router-dom';
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 

import { getWhatsAppLink } from "../utils/contact";

export default function Galeria() {
    
    
    const babyBracelets = [
  {
    title: 'Mini Love',
    description: 'Diseño suave con acabado fino, detalle en oro laminado.',
    price: '$28.000 COP',
    image: '/images/baby-1.jpeg',
  },
  {
    title: 'Mini Elegance',
    description: 'Diseño elegante en versión mini, con acabado delicado y moderno.',
    price: '$28.000 COP',
    image: '/images/baby-2.png',
  },
  {
    title: 'Mini Aura',
    description: 'Manilla suave y cómoda con un tono fresco y vibrante',
    price: '$28.000 COP',
    image: '/images/baby-3.png',
  },
  {
    title: 'Pequeña Luz',
    description: 'Manilla ligera y cómoda con detalles sutiles que resaltan su ternura.',
    price: '$18.000 COP',
    image: '/images/baby-4.png',
  },
  {
    title: 'Dulce Encanto',
    description: 'Manilla en tono suave y con detalles brillantes que destacan con sutileza.',
    price: '$18.000 COP',
    image: '/images/baby-5.png',
  },
  {
    title: 'Latido Rojo',
    description: 'Tobillera cómoda y ajustable con un intenso tono rojo que transmite calidez y energia',
    price: '$43.000 COP',
    image: '/images/baby-6.png',
  },
  {
    title: 'Brisa Azul',
    description: 'Tobillera cómoda y ajustable con un tono azul lleno de serenidad',
    price: '$43.000 COP',
    image: '/images/baby-7.png',
  },
];
    
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
     <Header />
          
          

      <section className="relative overflow-hidden hidden md:block">
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
    
                 
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
  <a
    href={getWhatsAppLink('Hola, quiero ver el catalogo completo')}
    className="rounded-full bg-fuchsia-600 px-6 py-3 text-sm font-semibold text-white hover:bg-fuchsia-700"
  >
    Solictar Catalogo
  </a>

  <a
    href={getWhatsAppLink('Hola, quiero  hacer un pedido')}
    target="_blank"
    className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 hover:border-fuchsia-300 hover:text-fuchsia-700"
  >
    Pedir por WhatsApp
  </a>
</div>

          
          </div>
      </section>
   
      <section id="grid" className=" mt-3 mx-auto max-w-7xl px-6 pb-16 lg:px-8 lg:pb-24">
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
             <div className="p-3 relative">
  <img
    src={item.image}
    alt={item.title}
    className={`w-full rounded-[1.4rem] object-cover ${item.height}`}
  />

  <a
    href={getWhatsAppLink(`Hola, me interesa la '${item.title}'`)}
    target="_blank"
    rel="noreferrer"
    className="absolute bottom-5 right-5 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-zinc-800 shadow-md backdrop-blur transition hover:bg-fuchsia-600 hover:text-white"
  >
    Comprar
  </a>
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
        
            
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
  

 <a
  href="https://instagram.com/entre_nudos.oficial"
  target="_blank"
  className="ml-6 flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition 
             bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] 
             hover:brightness-110"
>
  {/* Icono Instagram */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="1.2" fill="currentColor" stroke="none" />
  </svg>

  Ver más en Instagram
</a>
</div>
          
          </div>
      </section>

          
          <section id="bebes" className="relative overflow-hidden py-16">

  {/* Fondo tipo HERO (más intenso y enfocado) */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(236,72,153,0.15),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(251,191,36,0.18),_transparent_35%)]" />

  {/* Base suave */}
  <div className="absolute inset-0 bg-white/90" />

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
    
    {/* Header */}
    <div className="mb-10">
      <p className="text-sm font-medium uppercase tracking-[0.28em] text-fuchsia-600">
        Colección Baby
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900">
        Manillas para bebé
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-600">
        Diseños delicados, suaves y pensados para los más pequeños.
      </p>
    </div>

    {/* Carrusel */}
    <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
      {babyBracelets.map((item, index) => (
        <article
          key={`${item.title}-${index}`}
          className="min-w-[260px] max-w-[260px] flex-shrink-0 overflow-hidden rounded-[1.8rem] border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="p-3">
            <img
              src={item.image}
              alt={item.title}
              className="h-[260px] w-full rounded-[1.4rem] object-cover"
            />
          </div>

          <div className="px-5 pb-5">
            <p className="text-lg font-semibold text-zinc-900">
              {item.title}
            </p>

            <p className="mt-2 text-sm leading-7 text-zinc-600">
              {item.description}
            </p>

            <p className="mt-2 text-sm font-semibold text-zinc-600">
              {item.price}
            </p>
          </div>
        </article>
      ))}
    </div>
        <div className="mt-8 text-center">
  <a
    href={getWhatsAppLink('Hola, quiero una manilla para bebé')}
    target="_blank"
    className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 hover:border-fuchsia-300 hover:text-fuchsia-700"
  >
    Encarga para tu bebé
  </a>
</div>
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
                  Encuentra la manilla que conecta contigo.
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-600">
                     Cada pieza está diseñada para resaltar tu estilo y acompañarte en cualquier momento. 
    Ya sea para uso diario o como un regalo especial, aquí encuentras diseños únicos, 
    hechos a mano y con detalles que realmente marcan la diferencia.
                </p>
           <center className="mt-6">
                  <a
      href={getWhatsAppLink('Hola, quiero comprar una manilla')}
      target="_blank"
      className="rounded-full bg-fuchsia-600 px-6 py-3 text-sm font-semibold text-white text-center hover:bg-fuchsia-700"
    >
      Pide la tuya
               </a></center>
                </div>
                

              <div className="rounded-[1.8rem] border border-amber-200 bg-white p-6">
                <p className="text-lg font-semibold text-zinc-900">
                   ¿Por qué elegir Entre Nudos?
                </p>
               <ul className="mt-4 space-y-3 text-sm leading-7 text-zinc-600">
                   <li>• Diseños únicos que no encuentras en tiendas comunes</li>
    <li>• Hechas a mano con atención en cada detalle</li>
    <li>• Ideales para regalar o usar todos los días</li>
    <li>• Posibilidad de crear piezas personalizadas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

     <Footer/>
    </div>
  );
}