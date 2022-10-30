import { createContext, useContext, useEffect, useState } from "react";
import { ICountdownContextData } from "../interfaces/ICountdownContextData";
import { IProviderProps } from "../interfaces/IProviderProps";
import { ChallengesContext } from "./ChallengesContext";


export const CountdownContext = createContext({} as ICountdownContextData);

let countDownTimeout: NodeJS.Timeout;

export function CountdownProvider ({ children }: IProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountDown() {
    setIsActive(true);
  }

  function resetCountDown() {
    clearTimeout(countDownTimeout);
    setIsActive(false);
    setHasFinished(false);
    setTime(0.1 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false)
      startNewChallenge();
    }
  }, [isActive, time])

  return (
    <CountdownContext.Provider value={{
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountDown,
      resetCountDown
    }}>
      { children }
    </CountdownContext.Provider>
  )
}