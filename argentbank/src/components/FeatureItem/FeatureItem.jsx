import styles from './FeatureItem.module.scss';

/**
 * 
 * @param {string} param 1,2,3,4
 * 
 * @returns div containing the element structure 
 * for the home page information
 */

export function FeatureItem({ img, alt, title, text }) {
  return (
    <div className={styles.featureItem}>
      <img src={img} alt={alt} className={styles.featureIcon} />
      <h3 className={styles.featureItemTitle}>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
