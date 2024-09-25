import { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Image11 from "@/assets/slider/img6.png";
import Image7 from "@/assets/slider/img7.png";
import Image8 from "@/assets/slider/img8.png";
import Image9 from "@/assets/slider/img9.png";
import Image10 from "@/assets/slider/img10.png";

const Slider = () => {
  const slides = [
    {
      id: 1,
      name: "",
      description:
        "",
      image: Image11,
      from: "from-[#000000]",
    },
    {
      id: 2,
      name: "",
      description:
        "",
      image: Image7,
      from: "from-[#000000]",
    },
    {
      id: 3,
      name: "",
      description:
        "",
      image: Image8,
      from: "from-[#000000]",
    },
    {
      id: 4,
      name: "",
      description:
        "",
      image: Image10,
      from: "from-[#000000]",
    },
    {
      id: 5,
      name: "",
      description:
        "",
      image: Image9,
      from: "from-[#000000]",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    // Establecer un intervalo para cambiar automáticamente el slide cada 3 segundos
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    // Limpiar el intervalo cuando el componente se desmonta o el índice cambia manualmente
    return () => clearInterval(intervalId);
  }, [currentIndex]); // Dependencia para el useEffect
  return (
    <div className="relative h-[600px] mt-50 overflow-hidden pt-10   ">
      {/* Contenedor de puntos y descripción */}
      <div className="absolute z-40 flex mx-auto w-full bottom-0 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className="flex flex-col items-center  justify-center "
          >
            <div
              onClick={() => goToSlide(slideIndex)}
              className={` ${
                slideIndex === currentIndex ? "bg-primary" : "bg-white"
              }  rounded-full h-10 w-10 cursor-pointer flex items-center mx-2 mt-6 justify-center font-bold`}
            >
              <p className="text-black">{slideIndex + 1}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Contenido del slide */}
      <div className="z-10 text-white text-left absolute inset-0 flex flex-col items-start justify-center pl-5">
        <div
          className={`z-80 bg-gradient-to-r to-transparent ${slides[currentIndex].from} `}
          style={{
            width: "70%", // Ajusta el porcentaje para determinar la anchura del gradiente
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1, // Coloca el gradiente detrás del contenido
          }}
          ></div>
          <div className=" ml-0">
            <p className="font-bold text-7xl max-w-[1000px] mb-6">
              {slides[currentIndex].name}
            </p>
            <p className="max-w-[500px]">{slides[currentIndex].description}</p>
            <div className="mt-6 flex items-center gap-2 hover:text-primary">
              <p className="uppercase font-bold "></p>
              <BsChevronCompactRight />
            </div>
          </div>
        </div>

      {/* Flechas de navegación */}
      <div
        onClick={prevSlide}
        className="z-30 absolute left-5 top-[50%] transform -translate-y-1/2 text-2xl rounded-full p-2 bg-white cursor-pointer"
      >
        <BsChevronCompactLeft className="text-black" size={20} />
      </div>
      <div
        onClick={nextSlide}
        className="z-30 absolute right-5 top-[50%] transform -translate-y-1/2 text-2xl rounded-full p-2 bg-white  cursor-pointer"
      >
        <BsChevronCompactRight className="text-black" size={20} />
      </div>

      {/* Imagen de fondo */}
      <img
        src={slides[currentIndex].image}
        alt={slides[currentIndex].name}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
};

export default Slider;
