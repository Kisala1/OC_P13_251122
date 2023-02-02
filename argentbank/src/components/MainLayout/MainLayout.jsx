import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export function MainLayout({ loggedIn, firstName, children }) {
  return (
    <>
      <Header loggedIn={loggedIn} firstName={firstName} />
      {children}
      <Footer />
    </>
  );
}
