import Image from 'next/image';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="/avatar.jpg" alt="Miguel Leite" />
      <div>
        <strong>Miguel Leite</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level 1
        </p>
      </div>
    </div>
  )
}