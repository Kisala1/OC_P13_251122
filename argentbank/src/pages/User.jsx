import { MainLayout } from '../components/MainLayout/MainLayout';
import { Button } from '../components/Buttons/Button';
import styles from '../sass/User.module.scss';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setName, editName } from '../feature/nameReducer';

const MainBackground = styled.div`
  background-color: #12002b;
  min-height: 85vh;
`;
export function User() {
  const [isOpen, setOpen] = useState(false);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useSelector(
    (state) => state.user.firstName + ' ' + state.user.lastName + ' !'
  );
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);

  useEffect(() => {
    /* Si pas le bon token, redirige vers /signIn */
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
      dispatch(setName([result.body.firstName, result.body.lastName]))
    );

  const inputFirstName = useRef();
  const inputLastName = useRef();

  const handleEdit = () => {
    setOpen(!isOpen);

    const data = {
      firstName: inputFirstName.current.value,
      lastName: inputLastName.current.value,
    };

    fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => dispatch(editName([data.firstName, data.lastName])))
      .catch((err) => console.log(err));
  };

  return (
    <MainLayout loggedIn={true} firstName={firstName}>
      <MainBackground>
        <div className={styles.header}>
          {isOpen ? (
            <div className={styles.containerEdit}>
              <h1>Welcome back</h1>
              <div className={styles.containerInput}>
                <input
                  ref={inputFirstName}
                  type="text"
                  className={styles.input}
                  placeholder={firstName}
                />
                <input
                  ref={inputLastName}
                  type="text"
                  className={styles.input}
                  placeholder={lastName}
                />
              </div>
              <div className={styles.containerButtons}>
                <button className={styles.button} onClick={() => handleEdit()}>
                  Save
                </button>
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
            <>
              <h1>
                Welcome back
                <br />
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
            </>
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
