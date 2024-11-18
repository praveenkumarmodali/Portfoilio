import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Praveen kumar</h1>
        <p className={styles.description}>
          A passionate Front-end Developer with over 2 years of experience
          building dynamic, responsive, and user-friendly web applications using
          React.js, Next.js, Redux, and Tailwind CSS. Explore more about me....
        </p>
        <a href="mailto:modalikumar@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/me.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
