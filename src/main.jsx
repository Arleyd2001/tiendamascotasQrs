// Importa la librería de React, necesaria para crear componentes de React.
import React from 'react'

// Importa la librería de ReactDOM, que permite renderizar componentes de React en el DOM del navegador.
import ReactDOM from 'react-dom/client'

// Importa el componente principal de la aplicación desde el archivo 'App.jsx'.
import App from './App.jsx'

// Importa el archivo CSS para los estilos globales de la aplicación.
import './index.css'

// Crea un punto de entrada en el DOM donde se montará la aplicación.
// Utiliza el método 'createRoot' para crear una raíz de renderizado de React en el elemento con ID 'root'.
ReactDOM.createRoot(document.getElementById('root')).render(
  // 'React.StrictMode' es una herramienta que activa verificaciones y advertencias adicionales
  // durante el desarrollo, pero no afecta al comportamiento en producción.
  <React.StrictMode>
    {/* Renderiza el componente principal 'App' dentro de la raíz del DOM. */}
    <App />
  </React.StrictMode>,
)
