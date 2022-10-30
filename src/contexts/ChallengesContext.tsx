import { createContext, useState } from "react";

import challenges from '../../challenges.json';
import { IChallenge } from "../interfaces/IChallenge";

import { IChallengesContextData } from "../interfaces/IChallengesContextData";
import { IChallengesProviderProps } from "../interfaces/IChallengesProviderProps";

export const ChallengesContext = createContext({} as IChallengesContextData);

export function ChallengesProvider ({ children }: IChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const [activeCHallenge, setActiveChallenge] = useState(null)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)
  
  function levelUp () {
    setLevel(level + 1)
  }

  function startNewChallenge () {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge)
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  return (
    <ChallengesContext.Provider value={{ 
      level, 
      currentExperience, 
      challengesCompleted, 
      levelUp,
      startNewChallenge,
      activeCHallenge,
      resetChallenge,
      experienceToNextLevel,
      }}>
      {children}
    </ChallengesContext.Provider>
  )
}

