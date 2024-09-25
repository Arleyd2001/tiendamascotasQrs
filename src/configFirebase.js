import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

/**
 * Configuración de Firebase para la aplicación.
 * Contiene las claves y identificadores necesarios para conectar con el proyecto Firebase.
 * 
 * @constant {Object} firebaseConfig - Configuración de Firebase.
 * @property {string} apiKey - La clave de la API para autenticar las solicitudes.
 * @property {string} authDomain - El dominio de autenticación para la aplicación.
 * @property {string} projectId - El ID del proyecto en Firebase.
 * @property {string} storageBucket - El bucket de almacenamiento de Firebase.
 * @property {string} messagingSenderId - El ID del remitente para el servicio de mensajería.
 * @property {string} appId - El ID de la aplicación en Firebase.
 * @property {string} measurementId - El ID de medición para Google Analytics.
 */
const firebaseConfig = {
  apiKey: "AIzaSyB2B_0uZlrCBRNi0g-_ptS_PDz3vtP_jHU",
  authDomain: "petsafe-a2cff.firebaseapp.com",
  projectId: "petsafe-a2cff",
  storageBucket: "petsafe-a2cff.appspot.com",
  messagingSenderId: "232783336193",
  appId: "1:232783336193:web:104bc1303aa19087484100",
  measurementId: "G-D9TJXPL9CN",
};

/**
 * Inicializa la aplicación Firebase utilizando la configuración proporcionada.
 * 
 * @constant {Object} appFirebase - La instancia de la aplicación Firebase.
 */
const appFirebase = initializeApp(firebaseConfig);

/**
 * Exporta el objeto de autenticación de Firebase.
 * Permite gestionar la autenticación de usuarios.
 * 
 * @constant {Object} auth - El objeto de autenticación de Firebase.
 */
export const auth = getAuth(appFirebase);

/**
 * Exporta la instancia de Firestore para la gestión de la base de datos.
 * Permite realizar operaciones de lectura y escritura en Firestore.
 * 
 * @constant {Object} db - La instancia de Firestore.
 */
export const db = getFirestore(appFirebase);

/**
 * Exporta la instancia de almacenamiento de Firebase.
 * Permite gestionar el almacenamiento de archivos en Firebase Storage.
 * 
 * @constant {Object} storage - La instancia de almacenamiento de Firebase.
 */
export const storage = getStorage(appFirebase);
