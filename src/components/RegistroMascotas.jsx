import React, { useState } from "react";
import { toast } from "react-toastify";
import QRCode from "qrcode.react";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../configFirebase";
import Section from "@/components/Section";

/**
 * Genera un ID único para la mascota.
 *
 * @returns {string} ID único generado.
 */
const generateId = () => {
  const timestamp = Date.now().toString(36);
  const randomPart = Math.random().toString(36).substr(2, 5);
  return `${timestamp}-${randomPart}`;
};

/**
 * Componente para registrar mascotas.
 *
 * Este componente permite a los usuarios registrar una nueva mascota proporcionando
 * detalles como el nombre del dueño, nombre de la mascota, raza, dirección, teléfono,
 * correo y descripción. Al enviar el formulario, se genera un código QR que contiene
 * un enlace a la información de la mascota.
 *
 * @param {Object} props - Props del componente.
 * @param {string} props.email - Correo electrónico del usuario.
 * 
 * @returns {JSX.Element} Componente de registro de mascotas.
 */
const RegistroMascotas = ({ email }) => {
  const [id, setId] = useState(generateId());
  const [NombreDueño, setNombreDueño] = useState("");
  const [NombreMascota, setNombreMascota] = useState("");
  const [Direccion, setDireccion] = useState("");
  const [Raza, setRaza] = useState("");
  const [Descripcion, setDescripcion] = useState("");
  const [Correo, setCorreo] = useState("");
  const [Telefono, setTelefono] = useState("");
  const [qrLink, setQrLink] = useState("");

  /**
   * Maneja el envío del formulario y guarda la información de la mascota en Firestore.
   *
   * @param {React.FormEvent} e - Evento de formulario.
   */
  const calcularSolicitud = async (e) => {
    e.preventDefault(); // Previene la recarga de la página al enviar el formulario

    // Validación de los campos
    if (!NombreDueño || !NombreMascota || !Direccion || !Raza || !Telefono || !Correo || !Descripcion) {
      toast.error("Por favor, completa todos los campos antes de enviar.");
      return;
    }

    try {
      const solicitudesCollectionRef = collection(db, "Mascotas");
      const solicitudDocRef = doc(solicitudesCollectionRef, id);
      await setDoc(solicitudDocRef, {
        id,
        NombreDueño,
        NombreMascota,
        Raza,
        Direccion,
        Telefono,
        Correo,
        Descripcion,
        email: email || Correo, // Usa el email prop si está definido, sino usa Correo del estado
      });
      setQrLink(`https://pet-safe-app-git-main-arleyd2001s-projects.vercel.app/Mascotas/${id}`); // Actualiza con tu URL base
      toast.success("Procesando Solicitud...");
    } catch (error) {
      console.error("Error al guardar la información: ", error);
      toast.error("Error al guardar la información");
    }
  };

  return (
    <>
      <Section title="REGISTRAR MASCOTA">
        <div className="pt-10">
          <form className="flex flex-col mx-10 gap-4 my-16 p-20 shadow-lg rounded-lg shadow-black" onSubmit={calcularSolicitud}>
            <label className="ml-4">ID</label>
            <span className="ml-4">{id}</span>
            <label className="ml-4">Nombre del dueño</label>
            <input
              type="text"
              className="input input-primary w-full p-2"
              name="Nombre del dueño"
              onChange={(e) => setNombreDueño(e.target.value)}
              value={NombreDueño}
            />
            <label className="ml-4">Nombre de mascota</label>
            <input
              type="text"
              className="input input-primary w-full p-2"
              name="Nombre de mascota"
              onChange={(e) => setNombreMascota(e.target.value)}
              value={NombreMascota}
            />
            <label className="ml-4">Animal/Raza</label>
            <input
              type="text"
              className="input input-primary w-full p-2"
              name="Raza"
              onChange={(e) => setRaza(e.target.value)}
              value={Raza}
            />
            <label className="ml-4">Direccion</label>
            <input
              type="text"
              className="input input-primary w-full p-2"
              name="Domicilio"
              onChange={(e) => setDireccion(e.target.value)}
              value={Direccion}
            />
            <label className="ml-4">Teléfono</label>
            <input
              type="text"
              className="input input-primary w-full p-2"
              name="Teléfono"
              onChange={(e) => setTelefono(e.target.value)}
              value={Telefono}
            />
            <label className="ml-4">Correo</label>
            <input
              type="email"
              className="input input-primary w-full p-2"
              name="Correo"
              onChange={(e) => setCorreo(e.target.value)}
              value={Correo}
            />
            <label className="ml-4">Descripcion</label>
            <input
              type="text"
              className="input input-primary w-full p-10"
              name="Descripcion"
              onChange={(e) => setDescripcion(e.target.value)}
              value={Descripcion}
            />
            <button className="btn btn-primary mt-4" type="submit">
              Generar QR
            </button>
          </form>
          {qrLink && (
            <div className="flex flex-col items-center mt-6">
              <h2>Código QR</h2>
              <QRCode value={qrLink} />
            </div>
          )}
        </div>
      </Section>
    </>
  );
};

export default RegistroMascotas;
