import { useState, useEffect } from "react";
import { Alert } from "flowbite-react";
import { ProductoCard } from "./components/productoCars";
import { AlertaExito } from "../components/alertas";
import { Layout } from "../layouts/layout";

export default function Productos() {
  const [productos, actualizarProductos] = useState(null);
  const [alerta, actualizarAlerta] = useState(false);
  useEffect(() => {
    async function llamarProductos() {
      const solicitud = await fetch("./productos.json");
      const respuesta = await solicitud.json();

      actualizarProductos(respuesta.productos);
    }
    llamarProductos();
    console.log(productos);
  }, []);

  function agregarAlCarrito() {
    actualizarAlerta(true);
  }
  return (
    <Layout>
    <div className="text-center">
      {alerta ? (
        <AlertaExito mensaje="Se ha enviado el producto al carrito"></AlertaExito>
      ) : (
        <></>
      )}
      <div className="flex flex-wrap justify-center ">
        {productos ? (
          productos.map((producto) => {
            return (
              <ProductoCard
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
