import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/configFirebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "@/components/Loader";
import Reset from "@/components/Reset";

/**
 * Componente de inicio de sesión para la aplicación.
 *
 * Este componente permite a los usuarios iniciar sesión utilizando su correo
 * electrónico y contraseña. También ofrece una opción para restablecer la
 * contraseña.
 *
 * @returns {JSX.Element} Componente de inicio de sesión.
 */
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Estado para mostrar dinámicamente el formulario de inicio de sesión o el de restablecimiento
  const [reset, setReset] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const redirect = useNavigate();

  /**
   * Maneja el evento de inicio de sesión del usuario.
   *
   * Este método verifica las credenciales del usuario y, si son correctas,
   * redirige a la página principal. En caso de error, muestra un mensaje
   * de error.
   *
   * @param {Event} e - Evento del formulario.
   */
  const iniciarSesion = (e) => {
    e.preventDefault();
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("Inicio de sesión exitoso");
        redirect("/");
        setIsLoading(false);
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
      });
  };

  return (
    <>
      {isLoading ? <Loader /> : ""}
      <section
        className={`flex flex-col w-full gap-8 lg:flex-row pt-20 md:px-20 px-4 ${
          reset ? "hidden" : ""
        }`}
      >
        <div className="flex items-center justify-center lg:w-1/2 ">
          <img src="/pets.png" className="w-[150px] lg:w-[300px] " />
        </div>

        <div className="divider lg:divider-horizontal" />

        <div className="flex items-center justify-center lg:w-1/2">
          <form className="flex flex-col gap-4 w-[300px] lg:w-[500px] items-center shadow-lg shadow-gray-500 rounded-xl p-6 ">
            <h1 className="w-full text-center font-bold text-2xl ">
              Inicio de Sesión
            </h1>
            <input
              type="text"
              placeholder="Correo"
              className="input input-primary w-full"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="input input-primary w-full"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="btn btn-secondary capitalize w-full"
              onClick={iniciarSesion}
            >
              Ingresar
            </button>
            <div
              className="link link-primary w-full text-center lg:text-left "
              onClick={() => setReset(true)}
            >
              Cambiar Contraseña
            </div>
          </form>
        </div>
      </section>
      {reset ? <Reset setReset={setReset} /> : ""}
    </>
  );
};

export default Login;
