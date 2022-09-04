import { App } from "./style";

import Header from "components/Header";
import Footer from "components/Footer";
import FooterReduced from "components/FooterReduced";

export default function Layout({
  children,
  reducedFooter = false,
  noFooter = true,
}) {
  return (
    <App>
      <Header />
      {children}
      {!noFooter ? null : reducedFooter ? <FooterReduced /> : <Footer />}
    </App>
  );
}
