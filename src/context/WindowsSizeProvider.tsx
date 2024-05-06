import React, { createContext, useContext, useState, useEffect } from 'react';
import { WindowSizeContextType } from '../models/window-size.model';

const WindowSizeContext = createContext<WindowSizeContextType>({
  windowSize: { width: 0, height: 0 },
  isMobile: false,
});

export const useWindowSize = () => useContext(WindowSizeContext);

export const WindowSizeProvider = ({ children } : { children: React.ReactNode }) => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowSize.width < 1024;

  return (
    <WindowSizeContext.Provider value={{ windowSize, isMobile }}>
      {children}
    </WindowSizeContext.Provider>
  );
};
