"use client"; // <-- This line is essential. Please ensure it's at the very top.

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para optimizar tu negocio?
          </h2>
          <p className="text-lg text-gray-400 mb-10">
            Si tienes una idea, un desafío operativo o simplemente quieres
            explorar cómo la tecnología puede mejorar tu empresa, me encantaría
            conversar contigo. Completa el formulario y me pondré en contacto a
            la brevedad.
          </p>
        </div>
        <form
          className="max-w-xl mx-auto"
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
        >
          <div className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus-ring-custom transition-all duration-300"
                placeholder="Tu nombre completo"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus-ring-custom transition-all duration-300"
                placeholder="tu@email.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus-ring-custom transition-all duration-300"
                placeholder="Cuéntame sobre tu proyecto..."
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-indigo-600 text-white font-bold py-3 px-12 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105 duration-300 shadow-lg shadow-indigo-600/20"
              >
                Enviar Mensaje
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
