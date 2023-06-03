import CarritoContext from "@/pages/contexts/carritoContexts";
import { Button, Modal, Spinner } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { ProductoMiniCard } from "./productoMiniCard";
import { useRouter } from "next/router";

export function CarritoModal({ mMostrarModal }) {
  const { carritoProductosGlobal } = useContext(CarritoContext);
  const [total, setTotal] = useState(0);
  const router = useRouter();
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    let sumaPrecio = 0;
    carritoProductosGlobal.forEach((producto) => {
      sumaPrecio += producto.precio;
    });
    setTotal(sumaPrecio);
  }, [carritoProductosGlobal]);

  return (
    <Modal
      className="carrito-modal"
      show="true"
      onClose={() => mMostrarModal(false)}
    >
      <Modal.Header>Carrito de compras</Modal.Header>
      <Modal.Body>
        {carritoProductosGlobal &&
          carritoProductosGlobal.map((producto, index) => {
            return (
              <ProductoMiniCard
                producto={producto}
                key={index}
              ></ProductoMiniCard>
            );
          })}
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            setCargando(true);
            router.push("/pagos")
          }}
        >
          Total a Pagar $ {total}{" "}
          {cargando && (
            <Spinner
              className="ms-2"
              aria-label="Success spinner example"
              color="success"
            />
          )}
        </Button>
        <Button color="gray">
          <p>Decline</p>
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
