import styles from './Transaction.module.scss';

export function Transaction({ title, amount, description }) {
  return (
    <>
      <h3 className={styles.accountTitle}>{title}</h3>
      <p className={styles.accountAmount}>{amount}</p>
      <p className={styles.accountAmountDescription}>{description}</p>
    </>
  );
}
