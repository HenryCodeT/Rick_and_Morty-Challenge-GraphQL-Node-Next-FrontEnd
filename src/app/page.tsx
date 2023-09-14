'use client'
import RecipeReviewCard from "@/components/CardCharacter";
import Characters from "@/components/Characters";
import { Container, FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material'
import { useEffect, useState } from "react";

export default function Home() {
  const [specie, setSpecie] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    const newValue = e.target.value as string; 
    setSpecie(newValue);
  };

  return (
    <main>
      <Box
        display="flex"
        justifyContent="center"
        minHeight="10vh"
        margin="1em"
      >
        <FormControl sx={{ width: '15rem' }}>
          <InputLabel id="demo-simple-select-label">Specie</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={specie}
            label="Specie"
            // @ts-ignore
            onChange={handleChange}
          >
            <MenuItem value={'Human'}>Human</MenuItem>
            <MenuItem value={'Alien'}>Alien</MenuItem>
          </Select>
        </FormControl>

      </Box>
      <Container maxWidth="xl">
        <Characters specie ={specie} />
      </Container>
    </main>
  )
}
