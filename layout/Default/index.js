import { App } from "./style";

import Header from "components/Header";
import Footer from "components/Footer"

export default function Layout({ children }) {
  return (
    <App>
      <Header />
        {children}
      <Footer/>
    </App>
  );
}
