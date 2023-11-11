import "../styles/globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { AuthProvider } from "../contexts/AuthContext";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
  <AuthProvider>
  <Component {...pageProps} />;
  </AuthProvider>)
}

export default MyApp;
