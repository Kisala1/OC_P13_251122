import styles from './Footer.module.scss';

/**
 * 
 * @returns div for mainLayout
 */

export function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.footerText}>Copyright 2020 Argent Bank</p>
    </div>
  );
}
