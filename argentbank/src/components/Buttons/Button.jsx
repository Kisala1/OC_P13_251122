import styles from './Button.module.scss';

export function Button({ children }) {
  return <button className={styles.button}>{children}</button>;
}
