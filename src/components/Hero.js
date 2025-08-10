import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Dark & Themed Gradient Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full z-10"
        style={{
          background:
            "linear-gradient(135deg, rgba(10, 10, 10, 0.85) 0%, rgba(10, 10, 10, 0.80) 60%, rgba(79, 70, 229, 0.6) 100%)",
        }}
      ></div>

      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          Más que una web, la{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
            solución tecnológica
          </span>{" "}
          que tu negocio necesita.
        </h1>
        <p
          className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          Soy Juan Elgueda. Traduzco tus desafíos operativos en sistemas
          eficientes, desarrollo backend robusto y aplicaciones web a medida que
          impulsan el crecimiento y la productividad de tu empresa.
        </p>
        <div
          className="flex justify-center items-center gap-4 flex-wrap animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <Link
            href="/contact" // <-- RUTA ACTUALIZADA
            className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105 duration-300 shadow-lg shadow-indigo-600/20"
          >
            Hablemos de tu Proyecto
          </Link>
          <Link
            href="/portfolio" // <-- RUTA ACTUALIZADA
            className="bg-gray-700/50 text-white font-medium py-3 px-8 rounded-lg border border-gray-600 hover:bg-gray-700 transition-all duration-300"
          >
            Ver mis Proyectos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
