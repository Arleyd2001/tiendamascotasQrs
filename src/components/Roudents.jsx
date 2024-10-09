/**
 * Componente de React para mostrar una lista de productos para gatos.
 * El componente muestra los productos en una cuadrícula con imagen, título, descripción y precio,
 * y ofrece un botón para realizar la compra. Utiliza el componente `Slider` para mostrar una
 * barra deslizante de productos.
 *
 * @component
 */
import React from "react";
import Slider from "@/components/Slider";

import roudents1 from "@/assets/Roudents/roudents1.png";
import roudents2 from "@/assets/Roudents/roudents2.png";
import roudents3 from "@/assets/Roudents/roudents3.png";
import roudents4 from "@/assets/Roudents/roudents4.png";
import roudents5 from "@/assets/Roudents/roudents5.png";
import roudents6 from "@/assets/Roudents/roudents6.png";
import roudents9 from "@/assets/Roudents/roudents7.png";
import roudents10 from "@/assets/Roudents/roudents8.png";

/**
 * Función principal del componente `Roudents`. Muestra una lista de productos
 * y su información correspondiente.
 *
 * @function
 * @returns {JSX.Element} Componente Roudents que muestra productos de gatos.
 */
const Roudents = () => {
  /**
   * Array de objetos que contiene los detalles de cada producto como imagen, título,
   * descripción, precio y un link para comprar.
   *
   * @type {Array<{id: number, img: string, title: string, description: string, price: string, link: string}>}
   */
  const coursesLink = [
    {
      id: 1,
      img: roudents1,
      title: "Alimento para gato Cat",
      description: "descripcion producto 1",
      price: "500.000",
      link: "",
    },
    {
      id: 2,
      img: roudents2,
      title: "Alimento para Gato Don Kat",
      description: "descripcion",
      price: "500.000",
      link: "",
    },
    {
      id: 3,
      img: roudents3,
      title: "Alimento para gato Dali",
      description: "descripcion",
      price: "500.000",
      link: "",
    },
    {
      id: 4,
      img: roudents4,
      title: "Alimento para gato Whiskas",
      description: "descripcion",
      price: "500.000",
      link: "",
    },
    {
      id: 5,
      img: roudents5,
      title: "Juguete para gato",
      description: "descripcion",
      price: "500.000",
      link: "",
    },
    {
      id: 6,
      img: roudents6,
      title: "Juguete para gato",
      description: "descripcion",
      price: "500.000",
      link: "",
    },
    {
      id: 7,
      img: roudents9,
      title: "Arena para Gatos",
      description: "descripcion",
      price: "500.000",
      link: "",
    },
    {
      id: 8,
      img: roudents10,
      title: "Arena para Gatos",
      description: "descripcion",
      price: "500.000",
      link: "",
    },
  ];

  return (
    <div>
      <Slider />
      <section title="Productos para Gatos" className="lg:mx-56 lg:py-56 mx-2 py-6 flex-col relative">
        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
          <h2 className="font-bold text-4xl my-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#00CEF5] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl capitalize">
            Productos para Gatos
            <br className="sm:block hidden" />
          </h2>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full gap-10 mb-16">
          {coursesLink.map(({ id, img, title, description, price }) => (
            <div
              key={id}
              className="rounded-2xl hover:shadow-xl hover:shadow-gray-600 flex flex-col justify-between p-4"
            >
              <img src={img} alt={title} className="" />

              <div className="w-full">
                <div>
                  <h2 className="font-bold text-[#5F5F5F]">{title}</h2>
                  <p>{description}</p>
                </div>
                <div className="mt-12 flex flex-col justify-center items-center">
                  <p className="flex items-center justify-start text-[#00315A] w-full text-xl font-medium mb-3">
                    <span className="mr-1">$</span>
                    {price}
                  </p>
                  <button className="bg-primary px-12 py-2 rounded-full text-white text-xl w-full hover:bg-[#00315A]">
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Roudents;
