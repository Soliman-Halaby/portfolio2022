import Layout from "../../layout/Default";

import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import MatterComponent from "@/components/Matter";
import Footer from "@/components/Footer";

import { useIsMobile } from "hook";
export default function Contact() {
  const isMobile = useIsMobile();
  return (
    <Layout
      title="Soliman Al Halaby - About me"
      description="I'm Soliman, a twenty one years old fullstack developer currently based in Paris. Discover my different projects by visiting my Portfolio!"
      noFooter
      fullPage
    >
      <MatterComponent
        pageTitle={
          isMobile
            ? "Get to<br/>know me<br/>better"
            : "Get to know<br/>me better"
        }
      />
    </Layout>
  );
}
