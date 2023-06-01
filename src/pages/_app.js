import "./globals.css";
import { CarritoProvider } from "./contexts/carritoContexts";

export default function MyApp({ Component, pageProps }) {
  return;
  <CarritoProvider>
    <Component {...pageProps} />;
  </CarritoProvider>;
}
