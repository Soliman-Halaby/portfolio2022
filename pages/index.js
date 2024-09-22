import Layout from "../layout/Default";
import { useState, useRef, useEffect } from "react";

import image from "../public/index-hero.jpg";

import { useIsMobile } from "hook";
import CustomCursor from "@/components/Cursor";
import Hero from "@/components/HeroHome";
import ProjectWork from "@/components/Work";

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <Layout
      title="Soliman Al Halaby - Home"
      description="Soliman Al Halaby is a creative developer based in Paris, France. He is available for freelance project."
      number="03"
    >
      {/* {loader ? (
        <div className="loader-wrapper absolute">
          <h1>Loader</h1>
          <h2>Coucou</h2>
        </div>
      ) : (
        <Hero title={`Soliman Al Halaby, \ncreative developer`} subtitle={`Looking for an \ninternship`} sectionTitle={`Based in paris, \nfrom cairo`} image="/home-hero-image.png" label="Contact me" />
        )} */}
      <Hero
        title={
          isMobile
            ? `Soliman Al<br/>Halaby, creative<br/>developer`
            : `Soliman Al Halaby,<br/>creative developer`
        }
        subtitle={`Freelance developer,<br/>available for projects`}
        sectionTitle={`Based in paris, <br/>from cairo`}
        image={image}
        label="Contact me"
      />
      <ProjectWork />
    </Layout>
  );
}
