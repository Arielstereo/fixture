import { NextUIProvider } from "@nextui-org/react";
import { AuthProvider } from "../utils/Store";
import { Toaster } from "react-hot-toast";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <NextUIProvider>
      <Toaster/>
        <Component {...pageProps} />
      </NextUIProvider>
    </AuthProvider>
  );
}

export default MyApp;
