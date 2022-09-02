import Layout from "../layout/Default";

import { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";

import Hero from "@/components/HeroHome";

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
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);
  return (
    <Layout>
      {loader ? (
        <div className="loader-wrapper absolute">
          <h1>Loader</h1>
          <h2>Coucou</h2>
        </div>
      ) : (
        <Hero label="Contact me" />
      )}
      {/* <div className="coucou">
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum{" "}
      </div> */}
    </Layout>
  );
}
