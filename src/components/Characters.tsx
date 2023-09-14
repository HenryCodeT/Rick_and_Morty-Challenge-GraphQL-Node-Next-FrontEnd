import React, { useEffect, useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardCharacter from './CardCharacter';
import { fetchAllCharacters } from '@/api/rickAndMorty';
import { Character } from '@/interfaces/Character';

// server component
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Characters({ specie }: { specie: string }) {
  const [filterData, setFilterData] = useState<Character[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchAllCharacters();
      if (specie === 'Human') {
        const filteredCharacters = data.results.filter(
          (character: Character) => character.species === 'Human'
        );
        setFilterData(filteredCharacters);
      } else if (specie === 'Alien') {
        const filteredCharacters = data.results.filter(
          (character: Character) => character.species === 'Alien'
        );
        setFilterData(filteredCharacters);
      }
    }
    fetchData();
  }, [specie]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, sm: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {filterData?.map((character: Character, index: number) => (
          <Grid item xs={4} sm={4} md={4} key={index}>
            <CardCharacter character={character} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}