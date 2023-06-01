import { createContext } from "react";

const carritoContext = createContext("producto 0");

export function carritoProvider({ children }) {
  return (
    <carritoContext.Provider value="Está es una información de ambito global con el fin de  poder acceder a esta desde cualquier parte de mi página">
      {children}
    </carritoContext.Provider>
  );
}
export default carritoContext;