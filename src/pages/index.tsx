import { GetServerSideProps } from "next";
import Head from "next/head";

import { ChallengeBox } from "../components/ChallengeBox";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CountdownProvider } from "../contexts/CountdownContext";

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  // console.log(props)
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>

      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div className="">
            <Profile />
            <CompletedChallenges />
            <CountDown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  )
}

// export const getServerSideProps: GetServerSideProps = async (ctx) => {

//   const { level, currentExperience, challengeCompleted } = ctx.req.cookies;
//   return {
//     props: {
//       level,
//       currentExperience,
//       challengeCompleted
//     }
//   }
// }