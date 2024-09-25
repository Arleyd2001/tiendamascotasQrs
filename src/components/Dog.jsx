import React from "react";
import Section from "@/components/Section";

import dog1 from "@/assets/dog/dog1.jpeg";
import dog2 from "@/assets/dog/dog2.jpeg";
import dog3 from "@/assets/dog/dog3.jpeg";
import dog4 from "@/assets/dog/dog4.jpeg";
import dog5 from "@/assets/dog/dog5.png";
import dog6 from "@/assets/dog/dog6.jpeg";
import dog7 from "@/assets/dog/dog7.jpeg";
import dog8 from "@/assets/dog/dog8.png";
import Slider from "@/components/Slider";

const Dog = () => {
  const coursesLink = [
    {
      id: 1,
      img: dog1,
      title: "Collar Con Dije QR Perro",
      description: "Asegura la protección de tu mascota con nuestro Collar con Dije QR para Perro. Este collar elegante y resistente incluye un dije QR que, al escanearlo, muestra la información de contacto del dueño. Ideal para identificar a tu perro rápidamente en caso de que se pierda.",
      price: "20.000",
      link: "https://wa.me/3046221615?text=Hola,%20estoy%20interesado%20en%20comprar%20este%20producto:%20Collar%20Con%20Dije%20QR%20Perro.",
    },
    {
      id: 2,
      img: dog2,
      title: "Juguete masticable para perro",
      description: "Nuestro juguete masticable para perros está hecho de caucho duradero, diseñado para soportar mordidas fuertes. Su textura especial ayuda a limpiar los dientes y masajear las encías, promoviendo una buena salud dental. ",
      price: "35.000",
      link: "https://wa.me/3046221615?text=Hola,%20estoy%20interesado%20en%20comprar%20este%20producto:%20Juguete%20masticable%20para%20perro.",
    },
    {
      id: 3,
      img: dog3,
      title: "Juguete estimulante para perro",
      description: "Mantén a tu perro activo y mentalmente estimulado con nuestra Pelota Estimulante para Perro. Esta pelota resistente se puede rellenar con golosinas o croquetas, proporcionando un desafío divertido y recompensante.",
      price: "17.000",
      link: "https://wa.me/3046221615?text=Hola,%20estoy%20interesado%20en%20comprar%20este%20producto:%20Juguete%20estimulante%20para%20perro.",
    },
    {
      id: 4,
      img: dog4,
      title: "Alimento Para Perro Adulto Dog Chow 22.7 Kg",
      description: "La selección de un alimento adecuado para tu mascota es muy importante para garantizar su crecimiento, desarrollo y salud. Con esta opción de Dog Chow podrás cubrir las necesidades nutricionales y energéticas de tu perro.",
      price: "211.000",
      link: "https://wa.me/3046221615?text=Hola,%20estoy%20interesado%20en%20comprar%20este%20producto:%20Alimento%20Para%20Perro%20Adulto%20Dog%20Chow%2022.7%20Kg.",
    },
    {
      id: 5,
      img: dog5,
      title: "Alimento para perro Proplan 3 Kg ",
      description: "Dale a tu perro una alimentación premium con las Croquetas Pro Plan. Formuladas con ingredientes de alta calidad, estas croquetas ofrecen una nutrición completa y equilibrada para promover una salud óptima.",
      price: "130.000 ",
      link: "https://wa.me/3046221615?text=Hola,%20estoy%20interesado%20en%20comprar%20este%20producto:%20Alimento%20para%20perro%20Proplan%203%20Kg.",
    },
    {
      id: 6,
      img: dog6,
      title: "Alimento para perro Chunky 9Kg",
      description: "Proporciona a tu perro la mejor nutrición con el Alimento para Perro Chunky. Hecho con ingredientes de alta calidad, este alimento balanceado ofrece una dieta completa y deliciosa para tu mascota.  ",
      price: "76.000",
      link: "https://wa.me/3046221615?text=Hola,%20estoy%20interesado%20en%20comprar%20este%20producto:%20Alimento%20para%20perro%20Chunky%209Kg.",
    },
    {
      id: 7,
      img: dog7,
      title: "Alimento para perro Pedigree",
      description: "Dale a tu perro una dieta equilibrada y sabrosa con el Alimento para Perro Pedigree. Formulado con ingredientes de alta calidad, Pedigree ofrece una nutrición completa con todas las vitaminas, minerales y proteínas esenciales.",
      price: "35.000",
      link: "https://wa.me/3046221615?text=Hola,%20estoy%20interesado%20en%20comprar%20este%20producto:%20Alimento%20para%20perro%20Pedigree.",
    },
    {
      id: 8,
      img: dog8,
      title: "Casa para Perro",
      description: "Ofrece a tu mascota un refugio cómodo y seguro con nuestra Casa para Perro. Fabricada con materiales duraderos y resistentes a la intemperie, esta casa proporciona un espacio acogedor para tu perro en cualquier estación del año. ",
      price: "170.000",
      link: "https://wa.me/3046221615?text=Hola,%20estoy%20interesado%20en%20comprar%20este%20producto:%20Casa%20para%20Perro.",
    },
  ];
  const handleComprar = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div>
      <Slider />
      <Section title="Productos para perros" className="lg:mx-56 lg:py-56 mx-2 py-6 flex-col relative">
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

export default Dog;
