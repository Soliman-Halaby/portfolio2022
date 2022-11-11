import Layout from "../layout/Default";
import { useState, useRef, useEffect } from "react";

import image from "../public/project2-img.png";

import CustomCursor from "@/components/Cursor";
import Hero from "@/components/HeroHome";
import ProjectWork from "@/components/Work";

export default function Home() {
  const [timer, setTimer] = useState(3);

  const id = useRef(null);
  const clear = () => {
    window.clearInterval(id.current);
    setLoader(false);
  };

  // useEffect(() => {
  //   setLoaderDisplay(sessionStorage.getItem("loader"));
  //   id.current = window.setInterval(() => {
  //     setTimer((timer) => timer - 1);
  //   }, 10000000);
  // }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  return (
    <Layout display="wide">
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
        sectionTitle={`Based in paris, \nfrom cairo`}
        image={image}
        label="Contact me"
      />
      <ProjectWork />
    </Layout>
  );
}
