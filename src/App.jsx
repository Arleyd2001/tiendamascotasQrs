/**
 * Componente principal de la aplicación que define las rutas y el comportamiento general.
 * Administra el estado de autenticación del usuario, controla la navegación y muestra
 * las distintas secciones de la aplicación.
 *
 * @component
 */
import Register from "@/components/Register";
import Login from "@/components/Login";
import Home from "@/components/Home";
import Contact from "@/components/Contact";
import Dog from "@/components/Dog";
import Cat from "@/components/Cat";
import Roudents from "@/components/Roudents";
import UserProfile from "@/components/UserProfile";
import Navbar from "@/components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "@/configFirebase";
import { onAuthStateChanged } from "firebase/auth";
import Admin from "@/components/Admin";
import EditarMascota from "@/components/Editarmascotas";
import ListaMascotas from "@/components/ListaMascotas";
import RegistroMascotas from "@/components/RegistroMascotas";

/**
 * Componente `App` que define la estructura principal de la aplicación y la lógica de autenticación.
 *
 * @function
 * @returns {JSX.Element} Retorna la estructura de rutas y componentes de la aplicación.
 */
const App = () => {
  /**
   * Estado para gestionar si el usuario está autenticado.
   *
   * @type {boolean}
   */
  const [user, setUser] = useState(false);

  /**
   * Estado para almacenar el correo electrónico del usuario autenticado.
   *
   * @type {string}
   */
  const [email, setEmail] = useState("");

  /**
   * Efecto que escucha los cambios en el estado de autenticación del usuario.
   * Si el usuario está autenticado, almacena su correo electrónico.
   *
   * @function
   */
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setUser(true);
        setEmail(user.email);
      } else {
        setEmail("");
      }
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <ToastContainer position="bottom-center" />
        <Navbar setUser={setUser} user={user} email={email} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dog" element={<Dog />} />
          <Route path="/cat" element={<Cat />} />
          <Route path="/roudents" element={<Roudents />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Financing" element={<RegistroMascotas email={email} />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/ListaMascotas" element={<ListaMascotas />} />
          <Route exact path="/Mascotas/:id" element={<UserProfile />} />
          <Route path="/RegistroMascotas" element={<RegistroMascotas />} />
          <Route path="/editar/:id" element={<EditarMascota />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
