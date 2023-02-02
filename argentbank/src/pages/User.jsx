import { MainLayout } from '../components/MainLayout/MainLayout';
import { Button } from '../components/Buttons/Button';
import styles from '../sass/User.module.scss';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayName } from '../feature/nameReducer';

const MainBackground = styled.div`
  background-color: #12002b;
  min-height: 85vh;
`;
export function User() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  const name = useSelector(
    (state) => state.user.firstName + ' ' + state.user.lastName + '!'
  );

  useEffect(() => {
    if (!token) {
      navigate('/signIn');
    }
  }, []);

  fetch('http://localhost:3001/api/v1/user/profile', {
    method: 'POST',
    headers: new Headers({ Authorization: `Bearer ${token}` }),
  })
    .then((res) => res.json())
    .then((result) =>
      dispatch(displayName([result.body.firstName, result.body.lastName]))
    );

  const [isOpen, setOpen] = useState(false);

  return (
    // TODO nameUser = name des données
    <MainLayout loggedIn={true}>
      <MainBackground>
        <div className={styles.header}>
          <h1>
            Welcome back
            <br />
            {/* TODO  firstName + lastName des données qui remplace Tony Jarvis*/}
            {name}
          </h1>
          <button
            className={styles.buttonEdit}
            onClick={() => {
              setOpen(!isOpen);
            }}
          >
            Edit Name
          </button>
          {isOpen ? (
            <div className={styles.containerEdit}>
              <h1>Welcome back</h1>
              <div className={styles.containerInput}>
                {/* TODO value = nom / prénom précédemment enregistrés */}
                <input type="text" className={styles.input} />
                <input type="text" className={styles.input} />
              </div>
              <div className={styles.containerButtons}>
                {/* TODO Save => met à jour les données */}
                {/* TODO Cancel => Ne change pas les données */}
                <button className={styles.button}>Save</button>
                <button
                  className={styles.button}
                  onClick={() => {
                    setOpen(!isOpen);
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <h2 className={styles.srOnly}>Accounts</h2>
        <section className={styles.account}>
          <div className={styles.accountContentWrapper}>
            <h3 className={styles.accountTitle}>
              Argent Bank Checking (x8349)
            </h3>
            <p className={styles.accountAmount}>$2,082.79</p>
            <p className={styles.accountAmountDescription}>Available Balance</p>
          </div>
          <div className={styles.cta}>
            <Button>
              <strong className={styles.contentButton}>
                View transactions
              </strong>
            </Button>
          </div>
        </section>
        <section className={styles.account}>
          <div className={styles.accountContentWrapper}>
            <h3 className={styles.accountTitle}>Argent Bank Savings (x6712)</h3>
            <p className={styles.accountAmount}>$10,928.42</p>
            <p className={styles.accountAmountDescription}>Available Balance</p>
          </div>
          <div className={styles.cta}>
            <Button className={styles.transactionButton}>
              <strong className={styles.contentButton}>
                View transactions
              </strong>
            </Button>
          </div>
        </section>
        <section className={styles.account}>
          <div className={styles.accountContentWrapper}>
            <h3 className={styles.accountTitle}>
              Argent Bank Credit Card (x8349)
            </h3>
            <p className={styles.accountAmount}>$184.30</p>
            <p className={styles.accountAmountDescription}>Current Balance</p>
          </div>
          <div className={styles.cta}>
            <Button className={styles.transactionButton}>
              <strong className={styles.contentButton}>
                View transactions
              </strong>
            </Button>
          </div>
        </section>
      </MainBackground>
    </MainLayout>
  );
}
