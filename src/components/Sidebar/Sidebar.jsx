import React from 'react'

import { NavLink } from 'react-router-dom';

import styles from '../../styles/Sidebar.module.css';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const { list } = useSelector(({ categories }) => categories);
  // console.log(list);
  return (
    <section className={styles.sidebar}>
      <div className={styles.sidebar}>
        <div className={styles.title}>CATEGORIES</div>
        <nav>
          <ul className={styles.menu}>
            {list.map(({ id, name }) => (
              <li key={id}>
                <NavLink to={`/categories/${id}`}
                  className={({isActive}) => `${styles.link} ${isActive ? styles.active : ""}`}>
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={styles.footer}>
        <a href="/help" target="_blank" rel="noreferrer" className={styles.link}>
          Help
        </a>
        <a href="/terms" target="_blank" rel="noreferrer" className={styles.link} style={{textDecoration : "underline"}}>
          Terms & Conditions
        </a>
      </div>
    </section>
  );
};

export default Sidebar;