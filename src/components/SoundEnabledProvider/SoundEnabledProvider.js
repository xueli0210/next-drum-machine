"use client";
import React from "react";

export const SoundEnabledContext = React.createContext();

function SoundEnabledProvider({ children }) {
  const [soundEnabled, setSoundEnabled] = React.useState(true);
  const value = { soundEnabled, setSoundEnabled };

  return (
    <SoundEnabledContext.Provider value={value}>
      {children}
    </SoundEnabledContext.Provider>
  );
}

export default SoundEnabledProvider;
