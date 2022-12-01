import Layout from "../../layout/Default";

import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import MatterComponent from "@/components/Matter";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <Layout
      title="Soliman Al Halaby - About me"
      description="I'm Soliman, a twenty one years old fullstack developer currently based in Paris. Discover my different projects by visiting my Portfolio!"
      noFooter
    >
      <MatterComponent />
    </Layout>
  );
}
