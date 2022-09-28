import Layout from "../../layout/Default";

import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";

import FourOhFour from "@/components/404";
import Footer from "@/components/Footer";
import Hero from "@/components/HeroHome";
export default function FourOhFourPage() {
  return (
    <Layout noFooter={false}>
      <FourOhFour />
    </Layout>
  );
}