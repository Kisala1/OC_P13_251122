import { MainLayout } from '../components/MainLayout/MainLayout';
import { Banner } from '../components/Banner/Banner';
import IconChat from '../img/icon-chat.png';
import IconMoney from '../img/icon-money.png';
import IconSecurity from '../img/icon-security.png';
import { FeatureItem } from '../components/FeatureItem/FeatureItem';
import styles from '../sass/Home.module.scss';

const src = [
  {
    srcImg: IconChat,
    alt: 'Chat Icon',
    title: 'You are our #1 priority',
    text: 'Need to talk to a representative ? You can get in touch through our 24//7 chat or through a phone call in less than 5 minutes.',
  },
  {
    srcImg: IconMoney,
    alt: 'Money Icon',
    title: 'More savings means higher rates',
    text: 'The more you save with us, the higher your interest rate will be !',
  },
  {
    srcImg: IconSecurity,
    alt: 'Security Icon',
    title: 'Security you can trust',
    text: ' We use top of the line encryption to make sure your data and money is always safe.',
  },
];

/**
 * @returns Home element
 */

export function Home() {
  return (
    <MainLayout>
      <Banner />
      <section className={styles.features}>
        <h2 className={styles.srOnly}>Features</h2>
        {src.map((el, index) => (
          <FeatureItem
            key={index}
            img={el.srcImg}
            alt={el.alt}
            title={el.title}
            text={el.text}
          />
        ))}
      </section>
    </MainLayout>
  );
}
