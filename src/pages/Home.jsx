import Header from '../components/Header';
import Footer from '../components/Footer';

import { Link } from 'react-router-dom';
import { getWhatsAppLink } from "../utils/contact";
import { useState } from "react";
export default function Home() {
  const collections = [
    {
      title: 'Manillas tejidas a mano',
      text: 'Diseños elaborados con hilo, color y dedicación, pensados para quienes valoran los detalles hechos con cuidado.',
      image: '/images/manilla-7.png',
    },
    {
      title: 'Piedras con significado',
      text: 'Piezas que combinan hilo y piedras para crear accesorios delicados, versátiles y especiales para regalar o usar todos los días.',
      image: '/images/manilla-6.png',
    },
    {
      title: 'Diseños personalizados',
      text: 'Opciones que pueden adaptarse a estilos, colores y combinaciones para crear una manilla más personal y única.',
      image: '/images/manilla-8.png',
    },
  ];

  const gallery = [
    '/images/galeria-1.png',
    '/images/galeria-4.png',
    '/images/galeria-7.png',
    '/images/galeria-10.png',
  ];

  const values = [
    {
      title: 'Hecho a mano',
      text: 'Cada pieza se trabaja con dedicación, cuidando los detalles en el tejido, el color y los acabados.',
    },
    {
      title: 'Diseño con intención',
      text: 'Las manillas se crean para transmitir estilo, delicadeza y un toque especial en cada combinación.',
    },
    {
      title: 'Regalos con sentido',
      text: 'Son accesorios ideales para obsequiar, celebrar momentos especiales o llevar un detalle significativo.',
    },
  ];

    const [subject, setSubject] = useState("");
    
  return (
    <div className="min-h-screen bg-stone-50 text-zinc-800">
<Header />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(236,72,153,0.10),_transparent_35%),radial-gradient(circle_at_right,_rgba(251,191,36,0.16),_transparent_30%)]" />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="relative z-10 flex flex-col justify-center">
            <span className="mb-4 inline-flex w-fit rounded-full border border-amber-300 bg-white px-4 py-1 text-sm text-zinc-600 shadow-sm">
              Diseños delicados hechos a mano
            </span>
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
              Manillas artesanales creadas con hilo, color y detalles que cuentan una historia.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
              En Entre Nudos cada pieza nace de la combinación entre creatividad, dedicación y materiales elegidos con cuidado. Creamos manillas con hilo y piedras para quienes buscan accesorios con identidad, delicadeza y significado.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="galeria"
                className="rounded-full bg-fuchsia-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-fuchsia-200 transition hover:scale-[1.02] hover:bg-fuchsia-700"
              >
                Ver galería
              </Link>
              <a
                href={getWhatsAppLink('Hola, quiero  comprar una manilla')}
                className="rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-medium text-zinc-700 transition hover:border-fuchsia-300 hover:text-fuchsia-700"
              >
                Pedir por whatsapp
              </a>
            </div>
          </div>

          <div className="relative z-10 grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] border border-white/60 bg-white p-3 shadow-xl shadow-zinc-200/60 sm:translate-y-8">
              <img
                src="/images/manilla-15.png"
                alt="Manilla artesanal con hilo"
                className="h-full w-full rounded-[1.4rem] object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className="overflow-hidden rounded-[2rem] border border-white/60 bg-white p-3 shadow-xl shadow-zinc-200/60">
                <img
                  src="/images/manilla-2.png"
                  alt="Manilla con piedras decorativas"
                  className="h-40 w-full rounded-[1.4rem] object-cover"
                />
              </div>
              <div className="rounded-[2rem] border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-8 shadow-lg shadow-amber-100/60">
                <p className="text-sm uppercase tracking-[0.28em] text-fuchsia-700">Artesanía</p>
                <p className="mt-3 text-2xl font-semibold text-zinc-900">Detalles que se sienten especiales</p>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  Piezas pensadas para regalar, compartir o llevar contigo como un accesorio único y lleno de intención.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="nosotros" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white p-3 shadow-lg shadow-zinc-200/60">
            <img
              src="/images/tobillera-1.png"
              alt="Proceso artesanal de creación de manillas"
              className="h-[420px] w-full rounded-[1.5rem] object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-fuchsia-600">Sobre la empresa</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Una marca que transforma materiales simples en accesorios con personalidad.
            </h2>
            <p className="mt-6 text-base leading-8 text-zinc-600">
              Entre Nudos nace del gusto por crear piezas artesanales que combinen belleza, delicadeza y autenticidad. Cada manilla es elaborada a mano, uniendo hilo y piedras en diseños que pueden sentirse sutiles, elegantes, coloridos o especiales según el estilo de cada persona.
            </p>
            <p className="mt-4 text-base leading-8 text-zinc-600">
              Más que un accesorio, buscamos ofrecer detalles que conecten con emociones, regalos con intención y piezas que puedan acompañar momentos cotidianos o significativos.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {values.map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-zinc-200 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-semibold text-zinc-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
          
          
          

      <section id="colecciones" className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-fuchsia-600">Diseños exclusivos</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Manillas hechas para acompañar tu estilo y tus momentos
            </h2>
            <p className="mt-4 text-base leading-8 text-zinc-600">
              Cada pieza de Entre Nudos es única. Diseñamos manillas artesanales que destacan por su estilo, equilibrio y detalles, creando accesorios versátiles que se adaptan a diferentes momentos: desde lo sutil y elegante para el día a día hasta piezas con mayor presencia para ocasiones especiales.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {collections.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-[2rem] border border-zinc-200 bg-stone-50 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-zinc-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
            <div className="mt-10 flex gap-4">
  <Link
    to="galeria"
    className="rounded-full bg-fuchsia-600 px-6 py-3 text-sm font-medium text-white shadow-lg transition hover:bg-fuchsia-700"
  >
    Ver más diseños
  </Link>

  <a
    href={getWhatsAppLink('Hola, quiero comprar una manilla, ¿cuáles tienen disponibles?')}
    className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-700 hover:border-fuchsia-300 hover:text-fuchsia-700"
  >
    Quiero una similar
  </a>
</div>
            
        </div>
      </section>

          
          <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#fff7fb] to-white py-20">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.28em] text-fuchsia-600">For kids</p>
          
      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
        Diseños delicados para los más peques
      </h2>

      <p className="mt-4 text-base leading-7 text-zinc-600">
        Tus hijos tambien tienen historias para contar, regalales un detalle que hable por ellos
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-2">
      <Link to="galeria#bebes">
       
        <article className="group overflow-hidden rounded-[2rem] border border-fuchsia-100 bg-white shadow-[0_20px_60px_-30px_rgba(217,70,239,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_-28px_rgba(217,70,239,0.45)]">
        <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-fuchsia-100 via-rose-50 to-white">
          <img
            src="/images/baby-20.png"
            alt="Manilla para niñas"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent p-6">
            <span className="inline-flex rounded-full bg-white/85 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-fuchsia-600 backdrop-blur">
              Kids
            </span>
            <h3 className="mt-3 text-2xl font-semibold text-white">
              Manillas llenas de color y encanto
            </h3>
          </div>
        </div>

        <div className="p-6">
          <p className="text-sm leading-6 text-zinc-600">
            Diseños alegres y delicados, ideales para acompañar cada look con un toque especial.
          </p>
        </div>
      </article>
        </Link>
        <Link to="galeria#bebes">
        
        <article className="group overflow-hidden rounded-[2rem] border border-fuchsia-100 bg-white shadow-[0_20px_60px_-30px_rgba(217,70,239,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_-28px_rgba(217,70,239,0.45)]">
        <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-pink-100 via-fuchsia-50 to-white">
          <img
            src="/images/baby-2.png"
            alt="Manilla para bebé"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent p-6">
            <span className="inline-flex rounded-full bg-white/85 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-fuchsia-600 backdrop-blur">
              Babies
            </span>
            <h3 className="mt-3 text-2xl font-semibold text-white">
              Suavidad y ternura en cada detalle
            </h3>
              </div>
            
        </div>

        <div className="p-6">
          <p className="text-sm leading-6 text-zinc-600">
            Piezas ligeras y encantadoras, pensadas para un estilo dulce, delicado y cómodo.
          </p>
        </div>
      </article>
            </Link>
    </div>
  </div>
</section>
          
      <section id="galeria" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-fuchsia-600">Galería</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Explora nuestra colección y elige la manilla perfecta para ti 
            </h2>
           </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((image, index) => (
            <div
              key={image}
              className={`overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white p-3 shadow-sm ${index === 1 || index === 2 ? 'sm:translate-y-6' : ''}`}
            >
              <img
                src={image}
                alt={`Galería de manillas ${index + 1}`}
                className="h-72 w-full rounded-[1.3rem] object-cover"
              />
            </div>
          ))}
        </div>
          
                   <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="galeria"
                className="rounded-full bg-fuchsia-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-fuchsia-200 transition hover:scale-[1.02] hover:bg-fuchsia-700"
              >
                Explora la galería completa
              </Link>
              <a
                href={getWhatsAppLink('Hola, quiero  comprar una manilla')}
                className="rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-medium text-zinc-700 transition hover:border-fuchsia-300 hover:text-fuchsia-700"
              >
                Pedir por Whatsapp
              </a>
            </div>
          
      </section>

      <section className="bg-gradient-to-br from-fuchsia-600 to-fuchsia-700 py-16 text-white lg:py-20">
  <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:items-center">
    <div>
      <p className="text-sm uppercase tracking-[0.28em] text-fuchsia-100">
        Entre nudos
      </p>

      <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        Cada nudo guarda una historia.
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-8 text-fuchsia-50/90">
        Creamos manillas que representan vínculos, momentos y emociones. 
        Piezas hechas a mano donde cada detalle tiene intención y cada diseño conecta con quien lo lleva.
      </p>
      <a
  href={getWhatsAppLink('Hola, quiero ver el catalogo completo')}
  className="mt-6 inline-flex rounded-full bg-white px-5 py-2 text-sm font-medium text-fuchsia-700 hover:bg-fuchsia-100"
>
  Solicitar Catalogo
</a>
      </div>

    <div className="rounded-[2rem] border border-white/20 bg-white/10 p-8 backdrop-blur-sm">
      <h3 className="text-2xl font-semibold">Nuestra esencia</h3>

      <ul className="mt-5 space-y-3 text-sm leading-7 text-fuchsia-50/90">
        <li>• Nudos que representan conexiones reales</li>
        <li>• Diseño artesanal con identidad propia</li>
        <li>• Combinaciones de color con intención</li>
        <li>• Detalles que hacen única cada pieza</li>
      </ul>
    </div>
    
  </div>
</section>
          
          <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
  <div className="grid gap-6 lg:grid-cols-2">
    
    {/* REGALOS */}
    <article className="group relative overflow-hidden rounded-[2rem]">
      <img
        src="/images/ad-1.png"
        alt="Manillas para regalo"
        className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      <div className="absolute bottom-0 p-8 text-white">
        <h3 className="text-2xl font-semibold">
          Regala algo especial
        </h3>

        <p className="mt-2 text-sm text-white/90">
          Un detalle delicado pero con mucho significado.
        </p>

        <a
          href={getWhatsAppLink('Hola, quiero encargar una manilla para regalo')}
          className="mt-5 inline-flex rounded-full bg-white px-5 py-2 text-sm font-medium text-zinc-900 transition hover:bg-fuchsia-100"
        >
          Encargar para regalo
        </a>
      </div>
    </article>

    {/* PERSONALIZADO */}
    <article className="group relative overflow-hidden rounded-[2rem]">
      <img
        src="/images/ad-2.png"
        alt="Manilla personalizada"
        className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      <div className="absolute bottom-0 p-8 text-white">
        <h3 className="text-2xl font-semibold">
          A tu gusto
        </h3>

        <p className="mt-2 text-sm text-white/90">
          Danos tu idea y creamos una pieza que vaya con tu estilo.
        </p>

        <a
          href={getWhatsAppLink('Hola, quiero una manilla personalizada')}
          className="mt-5 inline-flex rounded-full bg-fuchsia-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-fuchsia-700"
        >
          Solicitar manilla personalizada
        </a>
      </div>
    </article>
<span id="contacto"></span>
      
  </div>
</section>

      <section id="contacto-form" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-fuchsia-600">Contacto</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Conecta con Entre Nudos
            </h2>
            <p className="mt-4 text-base leading-8 text-zinc-600">
              Puedes usar esta sección para recibir pedidos, resolver dudas, atender solicitudes personalizadas o dirigir a los clientes a WhatsApp e Instagram.
            </p>
              <div class="mt-6" > <a href={getWhatsAppLink('')} class="rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-medium text-zinc-700 transition hover:border-fuchsia-300 hover:text-fuchsia-700">Escribir por whatsapp</a></div>
          </div>

         <form className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-lg shadow-zinc-200/60">

  {/* Nombre + Teléfono */}
  <div className="grid gap-5 sm:grid-cols-2">
    <div>
      <label className="mb-2 block text-sm font-medium text-zinc-700">Nombre</label>
      <input
        type="text"
        className="w-full rounded-2xl border border-zinc-300 px-4 py-3 outline-none transition focus:border-fuchsia-500"
        placeholder="Tu nombre"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm font-medium text-zinc-700">Teléfono</label>
      <input
        type="text"
        className="w-full rounded-2xl border border-zinc-300 px-4 py-3 outline-none transition focus:border-fuchsia-500"
        placeholder="Tu número"
      />
    </div>
  </div>

  {/* Correo */}
  <div className="mt-5">
    <label className="mb-2 block text-sm font-medium text-zinc-700">Correo</label>
    <input
      type="email"
      className="w-full rounded-2xl border border-zinc-300 px-4 py-3 outline-none transition focus:border-fuchsia-500"
      placeholder="Tu correo"
    />
  </div>

  {/* ASUNTO */}
  <div className="mt-5">
    <label className="mb-2 block text-sm font-medium text-zinc-700">Asunto</label>
    
    <input
      type="text"
         value={subject}
  onChange={(e) => setSubject(e.target.value)}
      className="w-full rounded-2xl border border-zinc-300 px-4 py-3 outline-none transition focus:border-fuchsia-500"
      placeholder="Ej: Compra, regalo, diseño personalizado..."
    />

    {/* Sugerencias */}
    <div className="mt-3 flex flex-wrap gap-2">
      {['Comprar una manilla',
  'Regalo',
  'Diseño personalizado',
  'Información general',
  'Consulta de pedido',
  'PQRS (peticiones, quejas o reclamos)'].map((item) => (
        <button
          key={item}
          type="button"
          className="rounded-full border border-zinc-300 px-3 py-1 text-xs text-zinc-600 hover:border-fuchsia-300 hover:text-fuchsia-600"
        onClick={() => setSubject(item)}
            >
          {item}
        </button>
      ))}
    </div>
  </div>

  {/* MENSAJE */}
  <div className="mt-5">
    <label className="mb-2 block text-sm font-medium text-zinc-700">Mensaje</label>
    <textarea
      rows="5"
      className="w-full rounded-2xl border border-zinc-300 px-4 py-3 outline-none transition focus:border-fuchsia-500"
      placeholder="Cuéntanos como podemos ayudarte"
    />
  </div>

              <p className="mt-3 text-xs text-zinc-500">
    Gracias por contactarnos, te responderemos lo antes posible para ayudarte con tu requerimiento.
  </p>
  {/* CTA */}
  <div className="mt-6 flex flex-col sm:flex-row gap-3">

    <button
      type="button"
      className="m-auto rounded-full bg-fuchsia-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-fuchsia-200 transition hover:scale-[1.02] hover:bg-fuchsia-700"
    >
      Enviar solicitud
    </button>

   

  </div>


</form>
        </div>
      </section>

          
          <Footer />

     
          
    </div>
  );
}
