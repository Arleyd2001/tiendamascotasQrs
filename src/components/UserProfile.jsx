import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "@/configFirebase";
import { doc, getDoc } from "firebase/firestore";
import Loader from "@/components/Loader";
import { Link } from "react-router-dom";
import Section from "@/components/Section";

const UserProfile = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const docRef = doc(db, "Mascotas", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          setError("No se encontró información para este ID.");
        }
      } catch (err) {
        setError("Error al obtener la información.");
      }
      setLoading(false);
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Section title="Perfil">
        <h1 className="flex flex-col gap-4 w-[300px] lg:w-[500px] items-center shadow-lg shadow-gray-500 rounded-xl p-6">
          Perfil de Mascota
        </h1>
        <div className="flex items-center justify-center lg:w-1/2">
          <div>
            <div className="flex items-center justify-center lg:w-10/12">
              <img src="/as.png" className="rounded-full w-[800px] lg:w-[900px] object-cover" />
            </div>
          </div>
        </div>
        <form className="flex flex-col gap-4 w-[300px] lg:w-[500px] items-center shadow-lg shadow-gray-500 rounded-xl p-6">
        <div className="mb-4">
            <label className="block text-gray-700 mb-2">ID</label>
            <input type="email" className="input input-primary form-input w-full border rounded-md px-2 py-2" value={data.id} readOnly />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Nombre del dueño</label>
            <input type="text" className="input input-primary form-input w-full border rounded-md px-2 py-2" value={data.NombreDueño} readOnly />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Nombre de mascota</label>
            <input type="text" className="input input-primary form-input w-full border rounded-md px-2 py-2" value={data.NombreMascota} readOnly />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Direccion</label>
            <input type="email" className="input input-primary form-input w-full border rounded-md px-2 py-2" value={data.Direccion} readOnly />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Raza</label>
            <input type="text" className="input input-primary form-input w-full border rounded-md px-2 py-2" value={data.Raza} readOnly />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Número de contacto</label>
            <input type="tel" className="input input-primary form-input w-full border rounded-md px-2 py-2" value={data.Telefono} readOnly />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Correo electrónico</label>
            <input type="email" className="input input-primary form-input w-full border rounded-md px-2 py-2" value={data.Correo} readOnly />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Descripcion</label>
            <input type="text" className="input input-primary form-input w-full border rounded-md px-2 py-2" value={data.Descripcion} readOnly />
          </div>
          
        </form>
      </Section>
    </>
  );
};

export default UserProfile;