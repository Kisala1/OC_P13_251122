import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

/**
 * 
 * @param {boolean} param1 : becomes true after login, on User.jsx
 * @param {string} param2 : data that comes from User.jsx
 * @param {children} param3 : page content
 * @returns Header and Footer elements
 */


export function MainLayout({ loggedIn, firstName, children }) {
  return (
    <>
      <Header loggedIn={loggedIn} firstName={firstName} />
      {children}
      <Footer />
    </>
  );
}
