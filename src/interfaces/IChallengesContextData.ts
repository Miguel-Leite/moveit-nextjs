import { IChallenge } from "./IChallenge";

export interface IChallengesContextData {
  level: number;
  currentExperience: number;
  experienceToNextLevel: number;
  challengesCompleted: number;
  activeCHallenge: IChallenge | null;
  levelUp: ()=> void;
  startNewChallenge: ()=> void;
  resetChallenge: () => void;
}