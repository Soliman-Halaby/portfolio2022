import { App, Container} from "./style";

import Header from "components/Header";
import Footer from "components/Footer";
import FooterReduced from "components/FooterReduced";

import { SmoothScrollProvider } from "contexts/SmoothScroll.context";

export default function Layout({ children, reducedFooter = false }) {
  
  return (
    <App>
      <Header />
      <SmoothScrollProvider options={{ smooth: true }}>
      <Container data-scroll-container className="container">
        {children}
      </Container>
      </SmoothScrollProvider>
      {reducedFooter ? <FooterReduced /> : <Footer />}
    </App>
  );
}
