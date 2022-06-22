import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './styles/Detail.module.css';

const Detail = () => {
  const params = useParams();

  return <div className={styles.container}>detail component {params.id}</div>;
};
export default Detail;
