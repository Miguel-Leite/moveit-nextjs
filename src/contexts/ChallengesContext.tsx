import { createContext, useEffect, useState } from "react";
// import Cookies from 'js-cookie';

import challenges from '../../challenges.json';
import { IChallenge } from "../interfaces/IChallenge";

import { IChallengesContextData } from "../interfaces/IChallengesContextData";
import { IProviderProps } from "../interfaces/IProviderProps";

export const ChallengesContext = createContext({} as IChallengesContextData);

export function ChallengesProvider ({ children }: IProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  useEffect(()=> {
    Notification.requestPermission();
  }, [])

  // useEffect(() => {
  //   Cookies.set('level', String(level))
  //   Cookies.set('currentExperience', String(currentExperience))
  //   Cookies.set('challengesCompleted', String(challengesCompleted))
  // }, [level, currentExperience, challengesCompleted])
  
  function levelUp () {
    setLevel(level + 1)
  }

  function startNewChallenge () {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge)

    new Audio('/notification.mp3').play()

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio \u{1F947}', {
        body: `Valendo ${challenge.amount}xp!`
      })
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge () {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp()
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1)
  }

  return (
    <ChallengesContext.Provider value={{ 
      level, 
      currentExperience, 
      challengesCompleted, 
      levelUp,
      startNewChallenge,
      activeChallenge,
      resetChallenge,
      experienceToNextLevel,
      completeChallenge,
      }}>
      {children}
    </ChallengesContext.Provider>
  )
}

