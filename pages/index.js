import Layout from "../layout/Default";
import { useState, useRef, useEffect } from "react";

import image from "../public/index-hero.png";

import CustomCursor from "@/components/Cursor";
import Hero from "@/components/HeroHome";
import ProjectWork from "@/components/Work";

export default function Home() {
  return (
    <Layout number="03">
      {/* {loader ? (
        <div className="loader-wrapper absolute">
          <h1>Loader</h1>
          <h2>Coucou</h2>
        </div>
      ) : (
        <Hero title={`Soliman Al Halaby, \ncreative developer`} subtitle={`Looking for an \ninternship`} sectionTitle={`Based in paris, \nfrom cairo`} image="/home-hero-image.png" label="Contact me" />
        )} */}
      <Hero
        title={`Soliman Al Halaby,<br/>creative developer`}
        subtitle={`Looking for an <br/>internship`}
        sectionTitle={`Based in paris, <br/>from cairo`}
        image={image}
        label="Contact me"
      />
      <ProjectWork />
    </Layout>
  );
}
