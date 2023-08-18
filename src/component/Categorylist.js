import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/speakers.module.css';

export default function CategoryList({ categories, selectCategory }) {
  return (
    <ul className={styles.speakers_product_all_list}>
      {categories.map((item) => (
        <li
          key={item.index}
          onClick={() => selectCategory(item.text)}
          className={`${styles.categoryItem} ${selectCategory === item.text ? styles.selectedCategory : ''}`}
        >
          <Link to={`/category/${item.text}`}>{item.text}</Link>
        </li>
      ))}
    </ul>
  );
}