import { App, Container } from "./style";

import {useRef} from "react"
import Header from "components/Header";
import Footer from "components/Footer";
import FooterReduced from "components/FooterReduced";
import CustomCursor from "@/components/Cursor";
export default function Layout({
  children,
  reducedFooter = false,
  noFooter = true,
}) {
  return (
    <App>
      <CustomCursor/>
      <Header />
      {children}
      {!noFooter ? null : reducedFooter ? <FooterReduced /> : <Footer />}
    </App>
  );
}
