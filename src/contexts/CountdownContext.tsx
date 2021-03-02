import React, { createContext, ReactNode, useEffect, useState } from 'react';

interface CountdownContextData {
  minutes: number;
  seconds: number;

  startCountdown: () => void;
  resetCountdown: () => void;
}
interface CountdownProviderProps {
  children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

const CountdownProvider = ({ children }: CountdownProviderProps) => {
  let countdownTimeout: NodeJS.Timeout;

  const [time, setTime] = useState(0.05 * 60);
  const [isActive, setIsActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    setIsActive(false);
    clearTimeout(countdownTimeout);
    setTime(0.05 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setIsActive(false);
    }
  }, [isActive, time]);

  return (
    <CountdownContext.Provider
      value={{
        seconds,
        minutes,
        startCountdown,
        resetCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
};

export default CountdownProvider;
