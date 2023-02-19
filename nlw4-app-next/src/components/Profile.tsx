import styles from '../styles/Components/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/alisson-olv.png" alt="Imagem avatar" />
      <div>
        <strong>
          Alisson Souza
        </strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}