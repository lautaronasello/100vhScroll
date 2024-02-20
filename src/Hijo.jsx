import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { Fade } from '@mui/material';

export default function Hijo({ text, isActive, idComponent }) {
  return (
    <div on>
      <Fade
        in={isActive}
        style={{ transformOrigin: '0 0 0' }}
        {...(isActive ? { timeout: 5000 } : {})}
      >
        <Typography variant='h1' color={'white'}>
          {text}
        </Typography>
      </Fade>
    </div>
  );
}
