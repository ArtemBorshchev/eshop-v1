import React from 'react'

import styles from '../../styles/Home.module.css';
import BG from '../../images/computer.png';

export const Poster = () => {
  return (
    <section className={styles.home}>
      <div className={styles.title}>SALE 29%</div>
      <div className={styles.product}>
        <div className={styles.text}>
          <div className={styles.subtitle}>The Bestseller Of 2023</div>
          <h1 className={styles.head}>Supercomputer Nshmidia 0001</h1>
          <button className={styles.button}> By NOW </button>
        </div>
        <div className={styles.image}>
          <img src={BG} alt="will be soon..." />
        </div>
      </div>
    </section>
  )
}
