"use client";

import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import { Box } from '@mui/material';

// Import your Lottie JSON file
// You can find free Lottie animations at https://lottiefiles.com/
import loadingAnimation from '../../public/loading.json';

const LoadingAnimation = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000', // Match your site's background
        zIndex: 9999,
      }}
    >
      <Box sx={{ width: { xs: '80%', sm: '50%', md: '30%' }, maxWidth: '300px' }}>
        <Lottie
          animationData={loadingAnimation}
          loop={true}
          autoplay={true}
        />
      </Box>
    </Box>
  );
};

export default LoadingAnimation;
