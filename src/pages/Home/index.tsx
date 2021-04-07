import React from 'react';
import Challenge from '../../components/Challenge';
import CompletedChallenges from '../../components/CompletedChallenge';
import Countdown from '../../components/Countdown';
import ExperienceBar from '../../components/ExperienceBar';
import Profile from '../../components/Profile';
import CountdownProvider from '../../contexts/CountdownContext';

import './style.css';

const Home = () => {
  return (
    <div className="container">
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <CountdownProvider>
            <Countdown />
          </CountdownProvider>
        </div>
        <div>
          <Challenge />
        </div>
      </section>
    </div>
  );
};

export default Home;
