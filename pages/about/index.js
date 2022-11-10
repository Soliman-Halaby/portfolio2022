import Layout from "../../layout/Default";

import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import MatterComponent from "@/components/Matter";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <Layout noFooter>
      <MatterComponent />
    </Layout>
  );
}
