import { Button } from '../Buttons/Button';
import { Transaction } from './Transaction/Transaction';
import styles from './Transactions.module.scss';

const datas = [
  {
    title: 'Argent Bank Checking (x8349)',
    amount: '$2,082.79',
    description: 'Available Balance',
  },
  {
    title: 'Argent Bank Savings (x6712)',
    amount: '$10,928.42',
    description: 'Available Balance',
  },
  {
    title: 'Argent Bank Credit Card (x8349)',
    amount: '$184.30',
    description: 'Current Balance',
  },
];

export function Transactions() {
  return (
    <>
      {datas.map((el, index) => (
        <section key={index} className={styles.account}>
          <div className={styles.accountContentWrapper}>
            <Transaction
              key={index}
              title={el.title}
              amount={el.amount}
              description={el.description}
            />
          </div>
          <div>
            <Button className={styles.cta}>
              <strong className={styles.contentButton}>
                View transactions
              </strong>
            </Button>
          </div>
        </section>
      ))}
    </>
  );
}
