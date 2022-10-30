import {useContext, useEffect } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/CountDown.module.css';

export function CountDown() {
  const { minutes, seconds, hasFinished, isActive, startCountDown, resetCountDown } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  return (
    <div>
      <div className={styles.countDownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button
          disabled
          className={styles.countDownButton}>
          Circlo finalizado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              onClick={resetCountDown}
              className={`${styles.countDownButton} ${styles.countDownButtonActive}`}>
              Abandonar circlo
            </button>
          ) : (

            <button
              onClick={startCountDown}
              type='button'
              className={styles.countDownButton}>
              Iniciar um circlo
            </button>
          )}
        </>
      )}

    </div>
  )
}