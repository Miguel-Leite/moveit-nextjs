
export interface IChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  levelUp: ()=> void;
  startNewChallenge: ()=> void;
}