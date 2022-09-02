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

export default function Projet({}) {
  // Get parameters of url
  const router = useRouter();
  const { title } = router.query;

  // Structure returned array with all projects informations
  const data = ProjectsData.map((data, i) => ({
    title: data.title,
    sectionTitle1: data.sectionTitle,
    tags: data.techno,
    content1: data.content1,
    content2: data.content2,
    images: data.images,
  }));

  // Get the right array of datas
  const projectData = data.find((project) => project.title === title);

  // Get projects - Next project section
  const allProjects = data.filter((project) => project.title !== title);

  if (title) {
    return (
      <Layout reducedFooter>
        <Hero title={projectData.title} tags={projectData.tags} />
        <Description
          title={projectData.content1.title}
          label={projectData.content1.label}
          subtitle={projectData.content1.subtitle}
          text1={projectData.content1.text1}
          text2={projectData.content1.text2}
        />
        <FullWidthImage src={projectData.images.fullwidth} />
        <ImageTwoColumns
          src={projectData.images.left}
          src2={projectData.images.right}
        />
        <Description
          title={projectData.content2.title}
          label={projectData.content2.label}
          subtitle={projectData.content2.subtitle}
          text1={projectData.content2.text1}
          text2={projectData.content2.text2}
        />
        <FullWidthImage src={projectData.images.fullwidth2} />
        <BottomProject projects={allProjects} />
      </Layout>
    );
  }
}
