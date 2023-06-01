import { createContext } from "react";

const CarritoContext = createContext("producto 0");

export function CarritoProvider({ children }) {
  return (
    <CarritoContext.Provider value="Está es una información de ambito global con el fin de  poder acceder a esta desde cualquier parte de mi página">
      {children}
    </CarritoContext.Provider>
  );
}
export default CarritoContext;