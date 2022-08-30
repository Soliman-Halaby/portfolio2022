import Layout from "layout/Default";

import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";

import Hero from "@/components/HeroProject";
import Description from "@/components/ContentTwoColumns";

export default function Projet() {
  return (
    <Layout reducedFooter>
      <Hero />
      <Description
        title="Titre de la section"
        subtitle="Sous-titre de la section"
        text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
        text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
      />
    </Layout>
  );
}
