import styles from '../styles/Components/CompletedChallenges.module.css';

export function CompletedChallenges() {
  return (
    <div className={styles.completedChallengesContainer}>
      <span>
        Desafios completos
      </span>
      <span>
        00
      </span>
    </div>
  );
}