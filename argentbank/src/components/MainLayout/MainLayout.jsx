import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

// TODO add nameUser venant de l'api envoyé depuis User.jsx
export function MainLayout({ loggedIn, children }) {
  return (
    <>
    {/* nameUser={name} */}
      <Header loggedIn={loggedIn} />
      {children}
      <Footer />
    </>
  );
}
