import React from 'react'
import { Box, Link as UILink } from "@mui/material";
import Link from 'next/link';

export default function Header() {
  return (
    <header >
      <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', p: 2,m:0 }}>
        <Link href={'/'}>Home</Link>
      </Box>
    </header>
  )
}
