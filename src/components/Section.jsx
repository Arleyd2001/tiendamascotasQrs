import React from "react";

/**
 * Componente que representa una sección con un título, un subtítulo y contenido adicional.
 *
 * @param {Object} props - Props del componente.
 * @param {string} props.title - Título de la sección.
 * @param {string} props.subtitle - Subtítulo de la sección.
 * @param {React.ReactNode} props.children - Contenido adicional que se mostrará dentro de la sección.
 * 
 * @returns {JSX.Element} Componente de sección.
 */
const Section = ({ title, subtitle, children }) => {
  return (
    <div>
      <section className="min-h-fit flex flex-col justify-start items-center py-16 px-5 text-center">
        <p className="font-bold text-4xl my-8 text-center text-transparent bg-clip-text  bg-gradient-to-r from-primary to-[#00CEF5]  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl capitalize ">
          {title}
        </p>
        <p className="max-w-xl font-light text-gray-500 mb-10 text-sm md:text-base ">
          {subtitle}
        </p>

        {children}
      </section>
    </div>
  );
};

export default Section;
