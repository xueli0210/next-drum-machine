'use client'
import React from 'react';

import Header from '../components/Header';

import './styles.css';

export const SoundEnabledContext = React.createContext();

function RootLayout({ children }) {
  const [soundEnabled, setSoundEnabled] = React.useState(true);
  const value = { soundEnabled, setSoundEnabled };
  return (
    <html lang="en">
      <SoundEnabledContext.Provider value={value}>
        <body>
          <Header />
          {children}
          <footer>
            <img src="/ie-badge.gif" width={100} />
            <span>Thanks for visiting!</span>
          </footer>
        </body>
      </SoundEnabledContext.Provider>
    </html>
  );
}

export default RootLayout;
