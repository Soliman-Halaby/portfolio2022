import Layout from "layout/Default";

import Head from "next/head";
import Image from "next/image";

import Hero from "@/components/HeroProject";
import FourOhFour from "@/components/404";
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
    index: i,
    slug: data.slug,
    title: data.title,
    info: data.info,
    with: data?.with,
    color: data?.color,
    link: data.link,
    description: data.description,
    sectionTitle1: data.sectionTitle,
    tags: data.techno,
    content1: data.content1,
    content2: data.content2,
    content3: data?.content3,
    images: data.images,
  }));

  // Get the right array of datas
  const projectData = data.find((project) => project.slug === slug);

  // Get projects - Next project section
  const allProjects = data.filter((project) => project.slug !== slug);

  if (slug && projectData) {
    return (
      <Layout reducedFooter>
        <Hero
          title={projectData.title}
          team={projectData.with}
          content="Using"
          ctaLabel="See it live"
          infos={projectData.info}
          img={projectData.images.hero}
          tags={projectData.tags}
          description={projectData.description}
          to={projectData.link}
        />
        <Description
          number="01"
          title={projectData.content1.title}
          label={projectData.content1.label}
          subtitle={projectData.content1.subtitle}
          text1={projectData.content1.text1}
          text2={projectData.content1.text2}
        />
        <FullWidthImage
          color={projectData?.color}
          src={projectData.images.fullwidth}
        />
        {projectData.images.left && projectData.images.right && (
          <ImageTwoColumns
            color={projectData?.color}
            src={projectData.images.left}
            src2={projectData.images.right}
          />
        )}
        {projectData.images.left && !projectData.images.right && (
          <FullWidthImage
            color={projectData?.color}
            src={projectData.images.left}
          />
        )}
        <Description
          number="02"
          title={projectData.content2.title}
          label={projectData.content2.label}
          subtitle={projectData.content2.subtitle}
          text1={projectData.content2.text1}
          text2={projectData.content2.text2}
        />
        {projectData.images.fullwidth2 && (
          <FullWidthImage
            color={projectData?.color}
            src={projectData.images.fullwidth2}
          />
        )}
        {projectData.images.right2 && projectData.images.left2 && (
          <ImageTwoColumns
            color={projectData?.color}
            src={projectData.images.left2}
            src2={projectData.images.right2}
          />
        )}
        {projectData.images.left2 && !projectData.images.right2 && (
          <FullWidthImage
            color={projectData?.color}
            src={projectData.images.left2}
          />
        )}
        {projectData.content3 && (
          <Description
            number="03"
            title={projectData.content3.title}
            label={projectData.content3.label}
            subtitle={projectData.content3.subtitle}
            text1={projectData.content3.text1}
            text2={projectData.content3.text2}
          />
        )}
        {projectData.images.fullwidth3 && (
          <FullWidthImage
            color={projectData?.color}
            src={projectData.images.fullwidth3}
          />
        )}
        {projectData.images.right3 && projectData.images.left3 && (
          <ImageTwoColumns
            color={projectData?.color}
            src={projectData.images.left3}
            src2={projectData.images.right3}
          />
        )}
        {projectData.images.fullwidth4 && (
          <FullWidthImage
            color={projectData?.color}
            src={projectData.images.fullwidth4}
          />
        )}
        <BottomProject title="More projects" projects={allProjects} />
      </Layout>
    );
  }

  if (slug && !projectData) {
    return (
      <Layout noFooter={true}>
        <FourOhFour />
      </Layout>
    );
  }
}
