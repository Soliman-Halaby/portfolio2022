import { App } from "./style";

import Header from "components/Header";

export default function Layout({ children }) {
  return (
    <App>
      <Header />
      {children}
    </App>
  );
}
