import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/configFirebase";
import { toast } from "react-toastify";
import Reset from "@/components/Reset";
import Loader from "@/components/Loader";
import { useNavigate } from "react-router-dom";

/**
 * Componente para registrar un nuevo usuario.
 *
 * Este componente permite a los usuarios registrarse proporcionando su correo
 * electrónico y una contraseña. Al enviar el formulario, se valida que las
 * contraseñas coincidan y se crea un nuevo usuario en Firebase. También se
 * puede restablecer la contraseña a través de un enlace.
 *
 * @returns {JSX.Element} Componente de registro.
 */
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [reset, setReset] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const redirect = useNavigate();

  /**
   * Genera un ID único.
   *
   * @returns {string} ID único generado.
   */
  const generateId = () => {
    const timestamp = Date.now().toString(36);
    const randomPart = Math.random().toString(36).substr(2, 5);
    return `${timestamp}-${randomPart}`;
  };

  /**
   * Maneja el registro de un nuevo usuario en Firebase.
   *
   * @param {React.FormEvent} e - Evento de formulario.
   */
  const registrarUsuarioBD = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (password !== cPassword) {
      toast.error("Las contraseñas no coinciden");
      setIsLoading(false);
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsLoading(false);
        toast.success("Usuario creado en la base de datos");
        redirect("/");
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
      });
  };

  /**
   * Captura el valor del campo de correo electrónico.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - Evento de cambio del input.
   */
  const capturarInputEmail = (e) => {
    setEmail(e.target.value);
  };

  /**
   * Captura el valor del campo de contraseña.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - Evento de cambio del input.
   */
  const capturarInputPassword = (e) => {
    setPassword(e.target.value);
  };

  /**
   * Captura el valor del campo de confirmación de contraseña.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - Evento de cambio del input.
   */
  const capturarInputCPassword = (e) => {
    setCPassword(e.target.value);
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
          <img src="/dog.png" className="w-[300px] lg:w-[600px] " />
        </div>

        <div className="divider lg:divider-horizontal" />

        <div className="flex items-center justify-center lg:w-1/2">
          <div className="flex flex-col gap-4 w-[300px] lg:w-[500px] items-center shadow-lg shadow-gray-500 rounded-xl p-6 ">
            <h1 className="w-full text-center font-bold text-2xl ">
              Regístrate
            </h1>
            <input
              type="text"
              placeholder="Correo"
              className="input input-primary w-full"
              onChange={capturarInputEmail}
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="input input-primary w-full"
              onChange={capturarInputPassword}
            />
            <input
              type="password"
              placeholder="Confirma Contraseña"
              className="input input-primary w-full"
              onChange={capturarInputCPassword}
            />
            <button
              className="btn btn-secondary capitalize w-full"
              onClick={registrarUsuarioBD}
            >
              Regístrate
            </button>
          </div>
        </div>
      </section>
      {reset ? <Reset setReset={setReset} /> : ""}
    </>
  );
};

export default Register;
