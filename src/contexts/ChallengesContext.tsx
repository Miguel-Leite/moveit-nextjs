import { createContext, useState } from "react";

import { IChallengesContextData } from "../interfaces/IChallengesContextData";
import { IChallengesProviderProps } from "../interfaces/IChallengesProviderProps";

export const ChallengesContext = createContext({} as IChallengesContextData);

export function ChallengesProvider ({ children }: IChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  
  function levelUp () {
    setLevel(level + 1)
  }

  function startNewChallenge () {
    console.log('New challenge')
  }

  return (
    <ChallengesContext.Provider value={{ 
      level, 
      currentExperience, 
      challengesCompleted, 
      levelUp,
      startNewChallenge,
      }}>
      {children}
    </ChallengesContext.Provider>
  )
}

