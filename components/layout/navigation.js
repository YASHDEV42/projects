import React from "react";
import classes from "./navigation.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
const Navigation = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className={scrolling ? classes.nav : classes.main}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <h2>
            <Link className={classes.link} href="/">
              YA<span>SH</span>
            </Link>
          </h2>
        </div>
        <ul className={classes.navbar}>
          <li>
            <Link href="/projects" className={classes.link}>
              Projects
            </Link>
          </li>

          <li>
            <a
              href="https://yahyashannat-portfolio.netlify.app/#contact"
              className={classes.link}
              target="_blank"
            >
              contact me
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Navigation;
