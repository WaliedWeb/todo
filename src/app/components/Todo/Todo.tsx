import React from 'react';
import styles from './Todo.module.css';
import type { ReactNode } from 'react'
import classes from '../Title/Title.module.css'

type TodoProps = {
  isDone: boolean;
  title: string;
  description?: string;
};

export default function Todo({
  title,
  description,
  isDone,
}: TodoProps): JSX.Element {
  const conditionalStyles = isDone ? styles.done : '';

  return (
    <article className={`${styles.todo} ${conditionalStyles}`}>
      <h2 className={styles.title}>{title}</h2>
      <p>{description}</p>
    </article>
  );
}