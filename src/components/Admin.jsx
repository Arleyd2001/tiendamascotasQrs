import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/configFirebase";
import { MdLibraryAdd } from "react-icons/md";
import { toast } from "react-toastify";
import { storage } from "@/configFirebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import Loader from "@/components/Loader";

import Input from "@/components/Input";
import Section from "@/components/Section";

/**
 * Componente Admin.
 *
 * Este componente permite a los administradores crear un nuevo vehículo
 * y subir su información a la base de datos de Firebase. Incluye un
 * formulario para ingresar los detalles del vehículo y una funcionalidad
 * para subir una imagen del mismo.
 *
 * @returns {JSX.Element} Componente que permite crear vehículos.
 */
const Admin = () => {
  const [file, setFile] = useState({
    modelo: "",
    marca: "",
    color: "",
    referencia: "",
    precio: "",
    transmision: "",
    combustible: "",
    kilometraje: "",
    urlImagen: "",
  });
  const {
    modelo,
    marca,
    color,
    referencia,
    precio,
    transmision,
    combustible,
    kilometraje,
    urlImagen,
  } = file;

  const [upload, setUpload] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Maneja los cambios en los campos del formulario.
   *
   * @param {Event} e - El evento de cambio.
   */
  const handleChange = (e) => {
    setFile({ ...file, [e.target.name]: e.target.value });
  };

  /**
   * Sube un archivo a Firebase Storage y retorna la URL de descarga.
   *
   * @param {File} file - El archivo a subir.
   * @returns {Promise<string>} URL de descarga del archivo subido.
   */
  const uploadFile = async (file) => {
    const storageRef = ref(storage, v4());

    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
  };

  /**
   * Publica los detalles del vehículo en Firestore.
   *
   * @param {Event} e - El evento de envío del formulario.
   */
  const postFile = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const url = await uploadFile(upload);
    const newObj = { ...file, urlImagen: url };
    console.log(newObj);

    try {
      await addDoc(collection(db, "vehiculos"), newObj);
      toast.success("Vehiculo guardado en base de datos");
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
    }

    setFile({
      modelo: "",
      marca: "",
      color: "",
      referencia: "",
      precio: "",
      transmision: "",
      combustible: "",
      kilometraje: "",
      urlImagen: "",
    });
  };

  return (
    <>
      <Section title="Crear Vehiculo">
        {isLoading ? <Loader /> : ""}

        <form className="flex flex-col p-10 gap-4 w-full">
          <input
            type="file"
            name="urlImagen"
            onChange={(e) => setUpload(e.target.files[0])}
            className="file-input file-input-bordered file-input-primary w-full max-w-x hover:scale-105 duration-300"
          />
          <div className="grid grid-cols-2 gap-6 ">
            <Input
              label="Modelo"
              name="modelo"
              handleChange={handleChange}
              value={modelo}
            />
            <Input
              label="Marca"
              name="marca"
              handleChange={handleChange}
              value={marca}
            />
          </div>
          <Input
            label="Color"
            name="color"
            handleChange={handleChange}
            value={color}
          />
          <Input
            label="Referencia"
            name="referencia"
            handleChange={handleChange}
            value={referencia}
          />
          <div className="grid grid-cols-2 gap-6 ">
            <Input
              label="Precio"
              name="precio"
              handleChange={handleChange}
              value={precio}
            />
            <Input
              label="Transmision"
              name="transmision"
              handleChange={handleChange}
              value={transmision}
            />
          </div>
          <div className="grid grid-cols-2 gap-6 ">
            <Input
              label="Tipo de combustible"
              name="combustible"
              handleChange={handleChange}
              value={combustible}
            />
            <Input
              label="Kilometraje"
              name="kilometraje"
              handleChange={handleChange}
              value={kilometraje}
            />
          </div>

          <button
            onClick={postFile}
            className="flex items-center justify-center gap-4 mt-10 text-white bg-black border-0 py-2 px-4 w-[130px] focus:outline-none hover:scale-105 duration-300 rounded"
          >
            Agregar
            <MdLibraryAdd />
          </button>
        </form>
      </Section>
    </>
  );
};

export default Admin;
