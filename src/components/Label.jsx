import React from "react";

/**
 * Componente que muestra una etiqueta y su correspondiente dato.
 *
 * Este componente está diseñado para mostrar un par de elementos de texto,
 * donde el primero es una etiqueta (label) que destaca en negrita y el
 * segundo es el dato relacionado (dataLabel).
 *
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.label - El texto de la etiqueta que se mostrará en negrita.
 * @param {string} props.dataLabel - El texto del dato asociado a la etiqueta.
 * @returns {JSX.Element} Componente de etiqueta con su dato.
 */
const Label = ({ label, dataLabel }) => {
  return (
    <div className="flex items-start flex-col">
      <p className="text-primary font-bold">{label}</p>
      <p>{dataLabel}</p>
    </div>
  );
};

export default Label;
