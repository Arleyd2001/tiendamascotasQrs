import Register from "@/components/Register";
import Login from "@/components/Login";
import Home from "@/components/Home";
import Contact from "@/components/Contact";
import Dog from "@/components/Dog";
import Cat from "@/components/Cat";
import UserProfile from "@/components/UserProfile";
import Navbar from "@/components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "@/configFirebase";
import { onAuthStateChanged } from "firebase/auth";
import Admin from "@/components/Admin";
import RegistroMascotas from "@/components/RegistroMascotas";

/**
 * Componente principal de la aplicación.
 * Maneja la autenticación de usuarios y la navegación entre diferentes rutas de la aplicación.
 * 
 * @returns {JSX.Element} Componente de la aplicación.
 */
const App = () => {
  /** 
   * Estado que indica si el usuario está autenticado.
   * 
   * @type {boolean}
   */
  const [user, setUser] = useState(false);

  /** 
   * Estado que almacena el correo electrónico del usuario autenticado.
   * 
   * @type {string}
   */
  const [email, setEmail] = useState("");

  /** 
   * Hook que se ejecuta al montar el componente.
   * Escucha los cambios en el estado de autenticación del usuario.
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
        {/* Navbar que permite navegar entre las diferentes secciones de la aplicación. */}
        <Navbar setUser={setUser} user={user} email={email} />
        <Routes>
          {/* Rutas de la aplicación */}
          <Route path="/" element={<Home />} />
          <Route path="/dog" element={<Dog />} />
          <Route path="/cat" element={<Cat />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Financing" element={<RegistroMascotas email={email} />} />
          <Route path="/admin" element={<Admin />} />
          <Route exact path="/Mascotas/:id" element={<UserProfile />} />
          <Route path="/RegistroMascotas" element={<RegistroMascotas />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
