import styles from './Edit.module.scss';

export function Edit({ inputRef, name }) {
  return (
    <input
      /* ref allows access to this element in the DOM */
      ref={inputRef}
      type="text"
      className={styles.input}
      placeholder={name}
    />
  );
}
