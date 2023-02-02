import { Link } from 'react-router-dom';
import Logo from '../../img/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserCircle,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';

export function Header({ loggedIn, firstName }) {
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
