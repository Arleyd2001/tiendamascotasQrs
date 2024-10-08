import React from "react";
import { Link } from "react-router-dom";

/**
 * Componente para la funcionalidad de restablecimiento de contraseña.
 *
 * Este componente permite a los usuarios ingresar su dirección de correo electrónico
 * para recibir un enlace de restablecimiento de contraseña. También proporciona un
 * enlace para volver a la página de inicio de sesión.
 *
 * @param {Object} props - Props del componente.
 * @param {Function} props.setReset - Función para cambiar el estado de restablecimiento.
 * 
 * @returns {JSX.Element} Componente de restablecimiento de contraseña.
 */
const Reset = ({ setReset }) => {
  return (
    <>
      <section className="flex flex-col w-full gap-8 lg:flex-row pt-20 md:px-20 px-4">
        <div className="flex items-center justify-center lg:w-1/2 ">
          <img src="/forgot.png" className="w-[300px] lg:w-[600px] " />
        </div>

        <div className="divider lg:divider-horizontal" />

        <div className="flex items-center justify-center lg:w-1/2">
          <form className="flex flex-col gap-6 w-[300px] lg:w-[500px] items-center shadow-lg shadow-gray-500 rounded-xl p-8 ">
            <h1 className="w-full text-center font-bold text-2xl">
              Cambiar Contraseña
            </h1>
            <input
              type="text"
              placeholder="Email"
              className="input  input-primary  w-full"
            />

            <button className="btn btn-secondary capitalize  w-full">
              Enviar Correo
            </button>

            <Link
              onClick={() => setReset(false)}
              className="link link-primary w-full "
            >
              Login
            </Link>
          </form>
        </div>
      </section>
    </>
  );
};

export default Reset;
