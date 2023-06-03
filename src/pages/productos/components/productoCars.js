import { Button, Card } from "flowbite-react";

export function ProductoCard({ producto, agregarAlCarrito }) {

// function agregarAlCarrito(producto){
//   // console.log(producto);
//   // console.log("se hizo click");
// }

  return (
    <Card horizontal imgSrc={producto.imagen} className="my-5">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>{producto.nombre}</p>
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <p>{producto.descripcion}</p>
      </p>

      <Button onClick={() => agregarAlCarrito(producto)} gradientDuoTone="purpleToBlue" outline>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
        <p>Anadir al carrito</p>
      </Button>
    </Card>
  );
}
