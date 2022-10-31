import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";

import { ChallengeBox } from "../components/ChallengeBox";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { CountdownProvider } from "../contexts/CountdownContext";
import { IGetServerSideProps } from "../interfaces/IGetServerSideProps";

import styles from '../styles/pages/Home.module.css';

export default function Home({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  
  return (
    <ChallengesProvider level={data.level} currentExperience={data.currentExperience} challengeCompleted={data.challengeCompleted} >
      <div className={styles.container}>
        <Head>
          <title>Inicio | move.it</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
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
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps<{ data: IGetServerSideProps }> = async (ctx) => {
  const { level, currentExperience, challengeCompleted } = ctx.req.cookies;

  const data: IGetServerSideProps = {
    level: Number(level),
    currentExperience: Number(currentExperience),
    challengeCompleted: Number(challengeCompleted)
  }
  return {
    props: {
      data,
    }
  }
}