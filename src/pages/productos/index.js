import { useState, useEffect, useContext } from "react";
import { Alert } from "flowbite-react";
import { ProductoCard } from "./components/productoCars";
import { AlertaExito } from "../components/alertas";
import { Layout } from "../layouts/layout";
import CarritoContext from "../contexts/carritoContexts";

export default function Productos() {
  const [productos, actualizarProductos] = useState(null);
  const [alerta, actualizarAlerta] = useState(false);
  const { agregarAlCarritoGlobal, carritoProductosGlobal } = useContext(CarritoContext);

  // const valorDelContexto = useContext(CarritoContext);

  useEffect(() => {
    async function llamarProductos() {
      const solicitud = await fetch("./productos.json");
      const respuesta = await solicitud.json();

      actualizarProductos(respuesta.productos);
    }
    llamarProductos();
    console.log(productos);
  }, []);

  function agregarAlCarrito(producto) {
  
    agregarAlCarritoGlobal(producto);
    actualizarAlerta(true);
    console.log(carritoProductosGlobal);

  }
  return (
    <Layout>
      <div className="text-center ">
        {alerta ? (
          <AlertaExito mensaje="Agregado al carrito"></AlertaExito>
        ) : (
          <></>
        )}
        <div className="flex flex-wrap justify-center space-x-10">
          {productos ? (
            productos.map((producto, index) => {
              return (
                <ProductoCard
                  key={index}
                  producto={producto}
                  agregarAlCarrito={agregarAlCarrito}
                ></ProductoCard>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </Layout>
  );
}
