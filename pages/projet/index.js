import Layout from "layout/Default";

import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";

import Hero from "@/components/HeroProject";

export default function Projet() {
  return (
    <Layout reducedFooter>
      <Hero/>
    </Layout>
  );
}
