import { Link } from 'react-router-dom';
import Logo from '../../img/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserCircle,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import { displayFirstName } from '../../feature/nameReducer';
import { useDispatch, useSelector } from 'react-redux';

// TODO add name venant de l'api envoyé depuis MainLayout.jsx
export function Header({ loggedIn }) {
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  const firstName = useSelector((state) => state.user.firstName);
  fetch('http://localhost:3001/api/v1/user/profile', {
    method: 'POST',
    headers: new Headers({ Authorization: `Bearer ${token}` }),
  })
    .then((res) => res.json())
    .then((result) => dispatch(displayFirstName(result.body.firstName)));

  return (
    <div className={styles.mainNav}>
      {loggedIn ? (
        <>
          <Link className={styles.mainNavLogo} to={'/'}>
            <img
              className={styles.mainNavLogoImage}
              src={Logo}
              alt="Argent Bank Logo"
            />
          </Link>
          <div className={styles.logInNavItem}>
            <Link className={styles.mainNavItem} to={'/User'}>
              <FontAwesomeIcon icon={faUserCircle} className={styles.icon} />
              {/* TODO {name} qui remplace Tony*/}
              {firstName}
            </Link>
            <Link className={styles.mainNavItem} to={'/'}>
              <FontAwesomeIcon
                icon={faRightFromBracket}
                className={styles.icon}
              />
              Sign Out
            </Link>
          </div>
        </>
      ) : (
        <>
          <Link className={styles.mainNavLogo} to={'/'}>
            <img
              className={styles.mainNavLogoImage}
              src={Logo}
              alt="Argent Bank Logo"
            />
          </Link>
          <div>
            <Link className={styles.mainNavItem} to={'/SignIn'}>
              <FontAwesomeIcon icon={faUserCircle} className={styles.icon} />
              Sign In
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
