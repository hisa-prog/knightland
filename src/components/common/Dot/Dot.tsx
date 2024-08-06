import React from 'react';
import styles from './styles.module.css';

interface IProps {
  color: string;
}

const Dot = ({color: backgroundColor}: IProps) => {
  return (
    <div className={styles.root} style={{backgroundColor}}/>
  )
}

export default Dot;