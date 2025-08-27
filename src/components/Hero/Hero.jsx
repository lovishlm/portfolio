import React from "react";

import styles from "./Hero.module.css";
import profile from "../../assets/profile.jpg"


export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Lovish</h1>
        <p className={styles.description}>
          I’m a full-stack developer skilled in React and Node.js, passionate about building scalable and user-friendly applications.
        </p>
        <a href="mailto:miglanilovish5224@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={profile}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
