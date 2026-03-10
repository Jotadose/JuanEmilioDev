"use client";

import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Tu Socio Tecnológico en La Serena
            </h2>
            {/* ... resto del texto ... */}
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Mi nombre es Juan Elgueda, Técnico de Nivel Superior en
                Programación y Analista de Sistemas titulado con máxima
                distinción. Mi pasión es resolver problemas complejos a través
                de la tecnología. Con una sólida experiencia en desarrollo
                backend con Python y JavaScript, y un enfoque metódico en el
                análisis de sistemas, no me limito a escribir código:{" "}
                <span className="text-indigo-400 font-semibold">
                  diseño soluciones
                </span>
                .
              </p>
              <p>
                Entiendo que cada negocio es único. Por eso, mi proceso siempre
                comienza escuchando. Me sumerjo en tus operaciones para entender
                tus verdaderas necesidades y desarrollo herramientas
                tecnológicas que no solo funcionan, sino que aportan un valor
                real y medible. Mi objetivo es simple:{" "}
                <span className="font-semibold text-white">
                  optimizar tus procesos para que tú puedas enfocarte en hacer
                  crecer tu negocio.
                </span>
              </p>
            </div>
          </div>
          <div className="md:col-span-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gray-800 p-2 overflow-hidden ring-4 ring-indigo-500/50">
              {/* La ruta ahora apunta a la carpeta public */}
              <Image
                src="/images/porta01.jpg" // Correcta referencia a public/images/porta01.jpg
                alt="Retrato de Juan Elgueda"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
