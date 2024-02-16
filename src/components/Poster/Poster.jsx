import React from 'react'

import styles from '../../styles/Home.module.css';
import BG from '../../images/computer.png';
import {findMaxDiscount} from '../../features/usefullFunc';

export const Poster = ({products = []}) => {
  // console.log('постер с пропсов', products)
  if (products.length > 1) {
    let mainPoster = findMaxDiscount(products);
    // console.log('мейн постер', mainPoster);
    return (
      <section className={styles.home}>
        <div className={styles.title}>SALE {mainPoster.discount} %</div>
        <div className={styles.product}>
          <div className={styles.text}>
            <div className={styles.subtitle}>The Bestseller Of the Month</div>
            <h1 className={styles.head}>{mainPoster.title}</h1>
            <button className={styles.button}> By NOW </button>
          </div>
          <div className={styles.image}>
            <img src={BG} alt="will be soon..." />
          </div>
        </div>
      </section>
    )
  }
}
