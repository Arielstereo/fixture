import "../styles/globals.css";

import { NextUIProvider } from "@nextui-org/react";
import { AuthProvider } from "../utils/Store";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </AuthProvider>
  );
}

export default MyApp;
