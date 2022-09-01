import Layout from "layout/Default";

import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import Hero from "@/components/HeroProject";
import Description from "@/components/ContentTwoColumns";
import FullWidthImage from "@/components/ImageFullWidth";
import ImageTwoColumns from "@/components/ImageTwoColumns";
import BottomProject from "@/components/BottomProject";

import ProjectsData from "/utils/projects.json";
import { useRouter } from "next/router";

export default function Projet() {
  const router = useRouter();
  const { title } = router.query;
  //   console.log(ProjectsData);
  //   console.log(title);

  const data = ProjectsData.map((data, i) => ({
    title: data.title,
    sectionTitle1: data.sectionTitle,
    pinLabel1: data.label,
    sectionSubtitle1: data.sectionSubtitle,
    text1: data.text1,
    text2: data.text2,
  }));

  const projectsData = data.find((project) => project.title === title);
  console.log("finalData", projectsData);

  const tags = [
    {
      content: "PHP",
      // rounaded: true,
    },
    {
      content: "Vanilla JS",
    },
  ];

  const projects = [
    {
      name: "Eclipse",
      to: "/eclipse",
    },
    {
      name: "Selfer App",
      to: "/selfer-app",
    },
    // {
    //   name: "GTA Virtual Moduling",
    //   to: "/eclipse",
    // },
    // {
    //   name: "Selfer App",
    //   to: "/selfer-app",
    // },
    // {
    //   name: "Eclipse",
    //   to: "/eclipse",
    // },
    // {
    //   name: "Selfer App",
    //   to: "/selfer-app",
    // },
  ];
  return (
    <Layout reducedFooter>
      <Hero title="Movie react" tags={tags} />
      <Description
        title="Titre de la section"
        label="Hire me"
        subtitle="Sous-titre de la section"
        text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
        text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
      />
      <FullWidthImage src="project-img-1.png" />
      <ImageTwoColumns src="project-img-2.png" src2="project-img-3.png" />
      <Description
        title="Titre de la section"
        label="Hire me"
        subtitle="Sous-titre de la section"
        text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
        text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
      />
      <FullWidthImage src="project-img-1.png" />
      <BottomProject projects={projects} />
    </Layout>
  );
}
