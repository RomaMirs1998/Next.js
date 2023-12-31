import { StoreProvider } from "../context/store-context";
import "../styles/globals.css";



function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
