import React from "react";
import classes from "./hero.module.css";
import Link from "next/link";
import Head from "next/head";

const Hero = () => {
  return (
    <>
      <Head>
        <title>Yahya Shannat | Projects</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <main className={classes.main}>
        <div className={classes.container}>
          <h1 className={classes.title}>Explore My Projects!</h1>
          <h3 className={classes.subTitle}>
            Discover captivating projects and immerse yourself in compelling
            content.
          </h3>
          <div className={classes.buttonContainer}>
            <button className={classes.Pbutton}>
              <Link className={classes.link} href="/posts">
                See Projects
              </Link>
            </button>
            <button className={classes.Sbutton}>
              <a
                className={classes.link}
                href="https://yahyashannat-portfolio.netlify.app/"
                target="_blank"
              >
                My portofolio
              </a>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
