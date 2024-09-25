import React from "react";

/**
 * Componente de entrada de texto con etiqueta.
 *
 * Este componente se utiliza para renderizar un campo de entrada de texto
 * con una etiqueta descriptiva. Permite a los usuarios introducir datos
 * de forma sencilla.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.label - El texto de la etiqueta que se mostrará junto al campo de entrada.
 * @param {string} props.name - El nombre del campo de entrada, utilizado para la identificación en formularios.
 * @param {function} props.handleChange - Función que se llamará cuando el valor del campo cambie.
 * @param {string} props.value - El valor actual del campo de entrada.
 * @returns {JSX.Element} Componente de entrada de texto con etiqueta.
 */
const Input = ({ label, name, handleChange, value }) => {
  return (
    <div className="flex flex-col items-start">
      <p className="font-semibold ml-1">{label}</p>
      <input
        type="text"
        name={name}
        onChange={handleChange}
        className="mt-2 input w-full input-bordered"
        value={value}
      />
    </div>
  );
};

export default Input;
