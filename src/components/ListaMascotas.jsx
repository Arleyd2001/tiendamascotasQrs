import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../configFirebase";
import Section from "@/components/Section";
import { useNavigate } from 'react-router-dom'; // Importa useNavigate en lugar de useHistory

const ListaMascotas = () => {
  const [mascotas, setMascotas] = useState([]);
  const navigate = useNavigate(); // Utiliza useNavigate para acceder al objeto navigate

  useEffect(() => {
    const obtenerMascotas = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Mascotas"));
        const mascotasData = querySnapshot.docs.map((doc) => doc.data());
        setMascotas(mascotasData);
      } catch (error) {
        console.error("Error al obtener las mascotas: ", error);
      }
    };

    obtenerMascotas();
  }, []);

  const handleEdit = (id) => {
    navigate(`/Editar/${id}`); // Utiliza navigate para redirigir
  };

  return (
    <Section title="LISTA DE MASCOTAS REGISTRADAS">
      <div className="pt-10 mx-10">
        {mascotas.length > 0 ? (
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2">ID</th>
                <th className="border px-4 py-2">Nombre</th>
                <th className="border px-4 py-2">Raza</th>
                <th className="border px-4 py-2">Dueño</th>
                <th className="border px-4 py-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {mascotas.map((mascota) => (
                <tr key={mascota.id}>
                  <td className="border px-4 py-2">{mascota.id}</td>
                  <td className="border px-4 py-2">{mascota.NombreMascota}</td>
                  <td className="border px-4 py-2">{mascota.Raza}</td>
                  <td className="border px-4 py-2">{mascota.NombreDueño}</td>
                  <td className="border px-4 py-2">
                    <button
                      className="btn btn-primary"
                      onClick={() => handleEdit(mascota.id)}
                    >
                      Editar Información
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No hay mascotas registradas.</p>
        )}
      </div>
    </Section>
  );
};

export default ListaMascotas;