import { MainLayout } from '../components/MainLayout/MainLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { InputsSignIn } from '../components/InputsSignIn/InputsSignIn';
import styles from '../sass/Sign-In.module.scss';
import styled from 'styled-components';

const MainBackground = styled.div`
  background-color: #12002b;
  display: flex;
  min-height: 85vh;
`;

/**
 * @returns SignIn element
 */

export function SignIn() {
  
  return (
    <MainLayout>
      <MainBackground>
        <section className={styles.signInContent}>
          <FontAwesomeIcon icon={faUserCircle} className={styles.signInIcon} />
          <h1>Sign In</h1>
          <InputsSignIn />
        </section>
      </MainBackground>
    </MainLayout>
  );
}
