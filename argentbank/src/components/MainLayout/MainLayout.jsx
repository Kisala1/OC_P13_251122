import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setName } from '../../feature/nameReducer';

/**
 *
 * @param {boolean} param1 : becomes true after login, on User.jsx
 * @param {string} param2 : data that comes from User.jsx
 * @param {children} param3 : page content
 * @returns Header and Footer elements
 */

export function MainLayout({ loggedIn, children }) {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const dispatch = useDispatch();

  /* UseSelector */
  const firstName = useSelector((state) => state.user.firstName);

  useEffect(() => {
    /* If not the right token, redirects to /signIn */
    if (!token) {
      navigate('/signIn');
    }
    /* retrieves the data from the request and dispatches the data to setName */
    fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'POST',
      headers: new Headers({ Authorization: `Bearer ${token}` }),
    })
      .then((res) => res.json())
      .then((result) =>
        dispatch(setName([result.body.firstName, result.body.lastName]))
      );
  }, []);

  return (
    <>
      <Header loggedIn={loggedIn} firstName={firstName} />
      {children}
      <Footer />
    </>
  );
}
