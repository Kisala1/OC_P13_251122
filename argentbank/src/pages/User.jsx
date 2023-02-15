import { MainLayout } from '../components/MainLayout/MainLayout';
import { Transactions } from '../components/Transactions/Transactions';
import { Edit } from '../components/Inputs/Edit/Edit';
import styles from '../sass/User.module.scss';
import styled from 'styled-components';
import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editName } from '../feature/nameReducer';

const MainBackground = styled.div`
  background-color: #12002b;
  min-height: 85vh;
`;

/**
 * @returns User element
 */

export function User() {
  const token = localStorage.getItem('token');

  const [isOpen, setOpen] = useState(false);

  const dispatch = useDispatch();

  /* All UseSelector */
  const name = useSelector(
    (state) => state.user.firstName + ' ' + state.user.lastName + ' !'
  );
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);

  /* Hook useRef() : allows to keep the value between the renderings */
  const inputFirstName = useRef();
  const inputLastName = useRef();

  const inputs = [
    {
      ref: inputFirstName,
      placeholder: firstName,
    },
    {
      ref: inputLastName,
      placeholder: lastName,
    },
  ];

  const handleEdit = () => {
    setOpen(!isOpen);

    const data = {
      /* current is the element object returned by useRef() */
      firstName: inputFirstName.current.value,
      lastName: inputLastName.current.value,
    };

    /* updates the data written in the inputs and dispatch the changes to editName */
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
    <MainLayout loggedIn={true}>
      <MainBackground>
        <div className={styles.header}>
          {isOpen ? (
            <div className={styles.containerEdit}>
              <h1>Welcome back</h1>
              <div className={styles.containerInput}>
                {inputs.map((input, index) => (
                  <Edit
                    key={index}
                    inputRef={input.ref}
                    name={input.placeholder}
                  />
                ))}
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
        <Transactions />
      </MainBackground>
    </MainLayout>
  );
}
