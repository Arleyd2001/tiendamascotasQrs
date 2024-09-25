import React from "react";
import Section from "@/components/Section";
import Slider from "@/components/Slider";

import cat1 from "@/assets/cat/img1.png";
import cat2 from "@/assets/cat/img2.png";
import cat3 from "@/assets/cat/img3.png";
import cat4 from "@/assets/cat/img4.png";
import cat5 from "@/assets/cat/img5.png";
import cat6 from "@/assets/cat/img6.png";
import cat8 from "@/assets/cat/img8.png";
import cat9 from "@/assets/cat/img9.png";
import cat10 from "@/assets/cat/img10.png";
import qr from "@/assets/cat/qr.png";

const Cat = () => {
  const coursesLink = [
    {
      id: 1,
      img: qr,
      title: "Collar Con Dije QR Gato",
      description: "Asegura la protección de tu mascota con nuestro Collar con Dije QR para Gato. Este collar elegante y resistente incluye un dije QR que, al escanearlo, muestra la información de contacto del dueño. Ideal para identificar a tu perro rápidamente en caso de que se pierda.",
      price: "20.000",
      link: "https://wa.me/3046221615?text=Hola,%20estoy%20interesado%20en%20comprar%20este%20producto:%20Collar%20Con%20Dije%20QR%20Gato.",
    },
    {
      id: 2,
      img: cat2,
      title: "Alimento para gato Donkat Gatitos 14 Kg",
      description: "Es un alimento completo que satisface todos los requerimientos nutricionales de crecimiento, desarrollo, mantenimiento y lactancia para gatos de todas las razas. sus ingredientes incluyen 32% de proteína de pollo, carne o pescado.",
      price: "135.000",
      link: "https://wa.me/3046221615?text=Hola,%20estoy%20interesado%20en%20comprar%20este%20producto:%20Alimento%20para%20gato%20Donkat%20Gatitos%2014%20Kg.",
    },
    {
      id: 3,
      img: cat3,
      title: "Alimento para Gatos Dali Carne 1 Kg",
      description: "alimento premium especial desarrollado para atender las necesidades de gatos. contiene Cartinina, además de control en la energía ofertada, para el mantenimiento saludable del peso de los felinos",
      price: "17.000",
      link: "https://wa.me/3046221615?text=Hola,%20estoy%20interesado%20en%20comprar%20este%20producto:%20Alimento%20para%20Gatos%20Dali%20Carne%201%20Kg.",
    },
    {
      id: 4,
      img: cat4,
      title: "Alimento Húmedo para Gato Whiskas 85g",
      description: "La comida húmeda para gatos de whiskas con sabor a carne en salsa será una deliciosa y nutritiva opción de alimentación para gatos adultos. Gracias a su consistencia suave y rico sabor será un alimento ideal para suministrar solo o mezclado con el concentrado regular.",
      price: "3.500",
      link: "https://wa.me/3046221615?text=Hola,%20estoy%20interesado%20en%20comprar%20este%20producto:%20Alimento%20H%C3%BAmedo%20para%20Gato%20Whiskas%2085g.",
    },
    {
      id: 5,
      img: cat5,
      title: "Petstages Gato rascador - Hamaca 710 CM",
      description: "Esta robusta y básica hamaca seguramente será la percha y el rascado favoritos de tu gatito.",
      price: "130.000 ",
      link: "https://wa.me/3046221615?text=Hola,%20estoy%20interesado%20en%20comprar%20este%20producto:%20Petstages%20Gato%20rascador%20-%20Hamaca%20710%20CM.",
    },
    {
      id: 6,
      img: cat6,
      title: "Rascador para Gatos 75 cm de alto Casa y cama para Gatos",
      description: " Cama y Rascador para Gatos Medidas 40cmx40cmx75cm $ Producto de Calidad Sisal Natural 100% Juguetes para Gatos y Cama para Gato Casa para Gato, Cama y Rascador -Todo en 1 El Hogar Perfecto para tu Gato",
      price: "176.000",
      link: "https://wa.me/3046221615?text=Hola,%20estoy%20interesado%20en%20comprar%20este%20producto:%20Rascador%20para%20Gatos%2075%20cm%20de%20alto%20Casa%20y%20cama%20para%20Gatos.",
    },
    {
      id: 7,
      img: cat9,
      title: "Arena para Gatos Freemiau 4.5 kg",
      description: "Alta capacidad de absorción. Neutraliza los malos olores. Solidifica heces y orina. Facilidad y comodidad para el manejo de los residuos. Presentación granulada para la comodidad del gato. Empaque con válvula dosificadora y sistema de agarre.",
      price: "35.000",
      link: "https://wa.me/3046221615?text=Hola,%20estoy%20interesado%20en%20comprar%20este%20producto:%20Arena%20para%20Gatos%20Freemiau%204.5%20kg.",
    },
    {
      id: 8,
      img: cat8,
      title: "Alimento húmedo para Gato HILL'S PRESCRIPTION DIET I/D",
      description: "La salud digestiva de su gato se puede ver afectada negativamente por muchas cosas y cuando su gato tiene problemas digestivos, es una experiencia desagradable pata todos los involucrados. La buena noticia es que puede ayudar a su gato a sentirse mejor con un alimento que está formulado para proporcionarle los cuidados digestivos que necesita. Los nutriólogos y veterinarios de Hill's ®",
      price: "17.000",
      link: "https://wa.me/3046221615?text=Hola,%20estoy%20interesado%20en%20comprar%20este%20producto:%20Alimento%20h%C3%BAmedo%20para%20Gato%20HILL'S%20PRESCRIPTION%20DIET%20I/D.",
    },
  ];

  const handleComprar = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div>
      <Slider />
      <Section title="Productos para gatos" className="lg:mx-56 lg:py-56 mx-2 py-6 flex-col relative">
        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
          <h2 className="font-bold text-4xl my-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#00CEF5] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl capitalize ">
           
            <br className="sm:block hidden" />
          </h2>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full gap-10 mb-16">
          {coursesLink.map(({ id, img, title, description, price, link }) => (
            <div key={id} className="rounded-2xl hover:shadow-xl hover:shadow-gray-600 flex flex-col justify-between p-4">
              <img src={img} alt={title} />

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
                  <button className="bg-primary px-12 py-2 rounded-full text-white text-xl w-full hover:bg-[#00315A]" onClick={() => handleComprar(link)}>
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Cat;
