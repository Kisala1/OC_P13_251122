import styles from './Button.module.scss';

/**
 * 
 * @param {children} contents of the button 
 * 
 * @returns button style element for the user page
 */

export function Button({ children }) {
  return <button className={styles.button}>{children}</button>;
}
