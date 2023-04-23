import React from 'react';
import Box from '@mui/material/Box/Box';
import styles from './welcomePage.module.scss';
import { motion } from 'framer-motion';

const welcomeText = 'Welcome OpenX, Enjoy the Design Adventure';

const createStyles = (index: number): CSSProperties => {
  return {
    animationDelay: `${0.5 * index}s`,
  } as CSSProperties;
};

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, display: 'none' }}
      transition={{
        duration: 0.3,
        ease: 'easeOut',
        delay: 0.7,
      }}
      animate={{ opacity: 1, display: 'flex' }}
      exit={{ opacity: 0, transition: { delay: 0, duration: 0 } }}
      style={{ height: '100%', width: '100% ' }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className={styles.wrapper}>
          <div className={styles.textContainer}>
            {welcomeText.split(' ').map((word, i) => (
              <div key={i} style={{ position: 'relative' }}>
                <div className={styles.text}>
                  <p style={createStyles(i, word)}>{word}</p>
                </div>
                <div className={styles.text1}>
                  <p>{word}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Box>
    </motion.div>
  );
};
