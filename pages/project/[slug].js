import Layout from "layout/Default";

import Head from "next/head";
import Image from "next/image";

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
  const { slug } = router.query;

  // Structure returned array with all projects informations
  const data = ProjectsData.map((data, i) => ({
    slug: data.slug,
    title: data.title,
    info: data.info,
    link: data.link,
    description: data.description,
    sectionTitle1: data.sectionTitle,
    tags: data.techno,
    content1: data.content1,
    content2: data.content2,
    images: data.images,
  }));

  // Get the right array of datas
  const projectData = data.find((project) => project.slug === slug);

  // Get projects - Next project section
  const allProjects = data.filter((project) => project.slug !== slug);

  if (slug) {
    return (
      <Layout reducedFooter>
        <Hero
          title={projectData.title}
          content="Using"
          ctaLabel="See it live"
          infos={projectData.info}
          img={projectData.images.hero}
          tags={projectData.tags}
          description={projectData.description}
          to={projectData.link}
        />
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
        <BottomProject title="More projects" projects={allProjects} />
      </Layout>
    );
  }
}
