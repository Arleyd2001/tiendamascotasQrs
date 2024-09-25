import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { auth, db } from "../configFirebase";
import { Link, useNavigate } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";


const Navbar = ({ setUser, user }) => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [isUserInUsuarios, setIsUserInUsuarios] = useState(false);
  const [userMessage, setUserMessage] = useState("");

  useEffect(() => {
    const checkUserInUsuarios = async () => {
      try {
        if (user && user.email) {
          const q = query(
            collection(db, "Usuarios"),
            where("correo", "==", user.email)
          );
          const userSnapshot = await getDocs(q);
          setIsUserInUsuarios(!userSnapshot.empty);
          setUserMessage(
            userSnapshot.empty
           
          );
        }
      } catch (error) {
        console.error(
          "Error al verificar el usuario en la colección Usuarios:",
          error
        );
      }
    };

    checkUserInUsuarios();
  }, [user]);
  

  const redirect = useNavigate();
  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("Cerró sesión exitosamente");
        setUser(false);
        redirect("/");
      })
      .catch((error) => {
        console.error("Error al cerrar sesión:", error);
      });
  };

  return (
    <>
      <div className="fixed w-full h-16 bg-gray-900 text-white z-20">
        <div className="flex justify-between md:gap-5 items-center max-w-screen-xl mx-auto px-8 h-full">
          <div className="hidden lg:flex items-center">
            <ul className="flex">
              <Link to="/">
                <li className="p-4 uppercase duration-300 hover:text-primary hover:scale-110 cursor-pointer">
                  Inicio
                </li>
              </Link>
              <Link to="/RegistroMascotas">
                <li
                  className={`p-4 uppercase duration-300 hover:text-primary hover:scale-110 cursor-pointer ${
                    user ? "" : "hidden"
                  }`}
                >
                  Registro
                </li>
              </Link>
              <Link to="/Contact">
                <li
                  className={`p-4 uppercase duration-300 hover:text-primary hover:scale-110 cursor-pointer ${
                    user ? "hidden" : ""
                  }`}
                >
                  Contacto
                </li>
              </Link>
              <Link to="/ListaMascotas">
                <li
                  className={`p-4 uppercase duration-300 hover:text-primary hover:scale-110 cursor-pointer ${
                    user ? "" : "hidden"
                  }`}
                >

                  Lista
                  
                </li>
              </Link>
              <Link to="/login">
                <li
                  className={`p-4 uppercase duration-300 hover:text-primary hover:scale-110 cursor-pointer ${
                    user ? "hidden" : ""
                  }`}
                >
                  Login
                </li>
              </Link>
              <li
                onClick={logout}
                className={`p-4 uppercase duration-300 hover:text-primary hover:scale-110 cursor-pointer ${
                  user ? "" : "hidden"
                }`}
              >
                Salir
              </li>
            </ul>
          </div>
          <div
            onClick={() => setIsMenuShown(!isMenuShown)}
            className="block lg:hidden cursor-pointer"
          >
            {isMenuShown ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
          <div className="text-white w-[20%] text-lg">
            <Link to="/">
              <h2>
                Pet<span className="text-primary">safe</span>
              </h2>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`fixed w-full text-white z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${
          isMenuShown
            ? "top-16 rounded-b-2xl bg-gray-900 opacity-95"
            : "top-[-100%]"
        }`}
      >
        <ul>
          <Link onClick={() => setIsMenuShown(!isMenuShown)} to="/">
            <li className="p-4 uppercase cursor-pointer duration-300 hover:text-thPrimary">
              Inicio
            </li>
          </Link>
          <Link onClick={() => setIsMenuShown(!isMenuShown)} to="/contact">
            <li
              className={`p-4 uppercase cursor-pointer duration-300 hover:text-thPrimary ${
                user ? "hidden" : ""
              }`}
            >
              Contacto
            </li>
          </Link>
          <Link onClick={() => setIsMenuShown(!isMenuShown)} to="/login">
            <li
              className={`p-4 uppercase cursor-pointer duration-300 hover:text-thPrimary ${
                user ? "hidden" : ""
              }`}
            >
              Login
            </li>
          </Link>

  


          <Link onClick={() => setIsMenuShown(!isMenuShown)} to="/RegistroMascotas">
            <li
              className={`p-4 uppercase cursor-pointer duration-300 hover:text-thPrimary ${
                user ? "" : "hidden"
              }`}
            >
              Registro
            </li>
          </Link>

          <Link
            onClick={() => setIsMenuShown(!isMenuShown)}
            to="/ListaMascotas"
          >
            <li
              className={`p-4 uppercase cursor-pointer duration-300 hover:text-thPrimary ${
                user ? "" : "hidden"
              }`}
            >
              Lista
            </li>
          </Link>

          <Link
            onClick={() => {
              setIsMenuShown(!isMenuShown);
              logout();
            }}
          >
            <li
              className={`p-4 uppercase cursor-pointer duration-300 hover:text-thPrimary ${
                user ? "" : "hidden"
              }`}
            >
              Salir
            </li>
          </Link>
        </ul>
      </div>
      <div className="fixed bottom-0 right-0 bg-black text-white p-4">
        {userMessage}
      </div>
    </>
  );
};

export default Navbar;
