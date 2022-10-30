import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const { activeCHallenge, resetChallenge } = useContext(ChallengesContext);

  return (
    <div className={styles.challengeBoxContainer}>
      {activeCHallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeCHallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeCHallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeCHallenge.description}</p>
          </main>

          <footer>
            <button type='button' onClick={resetChallenge} className={styles.challengeFaildButton}>Falhei</button>
            <button type='button' className={styles.challengeSucceededButton}>Completei</button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio.</strong>
          <p>
            <img src="icons/level-up.svg" alt="level up" />
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  )
}