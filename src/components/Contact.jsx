import React from "react";
import Section from "@/components/Section";
import Input from "@/components/Input";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdLibraryAdd } from "react-icons/md";

/**
 * Componente Contact.
 *
 * Este componente representa un formulario de contacto donde los usuarios pueden enviar
 * su nombre, correo electrónico y un mensaje. También incluye enlaces a redes sociales.
 *
 * @returns {JSX.Element} Componente que representa el formulario de contacto.
 */
const Contact = () => {
  return (
    <>
      <Section title="Formulario De Contacto">
        <div className="w-full shadow-md shadow-black p-6 rounded-xl">
          <form
            action="https://getform.io/f/8ba689d2-8bc8-4cae-8a12-c98354ce83ec"
            method="POST"
          >
            <Input label="Nombre" name="nombre" />
            <Input label="Correo" name="correo" />
            <Input label="Mensaje" name="mensaje" />
            <button className="flex items-center justify-center gap-4 w-full mt-10 text-white bg-black border-0 py-2 px-4 hover:bg-primary focus:outline-none hover:scale-105 duration-300 rounded">
              Enviar mensaje
              <MdLibraryAdd />
            </button>
          </form>
          <div className="flex justify-between items-center my-10">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-4xl hover:text-primary hover:scale-125 duration-300" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-4xl hover:text-primary hover:scale-125 duration-300" />
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-4xl hover:text-primary hover:scale-125 duration-300" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-4xl hover:text-primary hover:scale-125 duration-300" />
            </a>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;
