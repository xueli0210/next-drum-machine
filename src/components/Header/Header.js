'use client';
import React from 'react';
import { Volume2, VolumeX } from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { useSoundEnabled } from '../SoundEnabledProvider/SoundEnabledProvider';

import styles from './Header.module.css';

function Header() {
  const id = React.useId();

  // TODO: Global state?
  const { soundEnabled, setSoundEnabled } = useSoundEnabled();

  return (
    <header className={styles.wrapper}>
      <MaxWidthWrapper
        className={styles.innerWrapper}
      >
        <a href="/">Kool Website</a>

        <button
          onClick={() => {
            // TODO: flip `soundEnabled`
            setSoundEnabled(!soundEnabled);
          }}
        >
          {soundEnabled ? (
            <Volume2 />
          ) : (
            <VolumeX />
          )}
          <VisuallyHidden>
            {soundEnabled
              ? 'Disable sound effects'
              : 'Enable sound effects'}
          </VisuallyHidden>
        </button>
      </MaxWidthWrapper>
    </header>
  );
}

export default Header;
