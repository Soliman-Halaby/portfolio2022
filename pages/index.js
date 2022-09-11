import Layout from "../layout/Default";
import { useState, useRef, useEffect } from "react";
import Loader from "@/components/Loader";

// import styles from "../styles/Home.module.css";

import CustomCursor from "@/components/Cursor";
import Hero from "@/components/HeroHome";
import ProjectWork from "@/components/Work";
export default function Home() {
  const [loader, setLoader] = useState(true);

  const [timer, setTimer] = useState(3);

  const id = useRef(null);
  const clear = () => {
    window.clearInterval(id.current);
    setLoader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 10000000);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  return (
    <Layout>
      {/* <Loader/> */}
      {/* {loader ? (
        <div className="loader-wrapper absolute">
          <h1>Loader</h1>
          <h2>Coucou</h2>
        </div>
      ) : (
        <Hero title={`Soliman Al Halaby, \ncreative developer`} subtitle={`Looking for an \ninternship`} sectionTitle={`Based in paris, \nfrom cairo`} image="/home-hero-image.png" label="Contact me" />
        )} */}
      <Hero
        title={`Soliman Al Halaby, \ncreative developer`}
        subtitle={`Looking for an \ninternship`}
        sectionTitle={`Based in paris, \nfrom cairo`}
        image="/home-hero-image.png"
        label="Contact me"
      />
      <ProjectWork />
    </Layout>
  );
}
