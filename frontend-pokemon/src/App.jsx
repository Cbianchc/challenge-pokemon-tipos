import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from './components/PokemonCard';
import { Container, Grid, Button, Typography, Box, Alert } from '@mui/material';
import CardFull from './components/CardFull';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import CardGhost from './components/CardGhost';
import { red } from '@mui/material/colors';

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [opponent, setOpponent] = useState(null);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    // Fetch a la lista de pokemons que esta en el back
    axios.get('http://localhost:3000/pokemon')
      .then(response => {
        setPokemons(response.data);
      })
      .catch(error => {
        console.error('Error en fetch Pokemon:', error);
      });
  }, []);

  const handleBattle = () => {
    if (!selectedPokemon) {
      alert('Hay que elegir un pokemon');
      return;
    }
    const filtroPokemon = pokemons.filter(pokemon => pokemon.id !== selectedPokemon.id);


    const opponentId = filtroPokemon[Math.floor(Math.random() * filtroPokemon.length)].id;
    setOpponent(pokemons.find(p => p.id === opponentId));

    axios.get(`http://localhost:3000/pokemon/battle/${selectedPokemon.id}/${opponentId}`)
      .then(response => {
        setWinner(response.data.winner);
      })
      .catch(error => {
        console.error('Error en inicio de batalla:', error);
      });
  };


  return (
    <Container 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'left',
      }}>
      <Typography variant="h4" gutterBottom sx={{ marginY: 3, textAlign: 'left'}}>
        Battle of Pokemon
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ marginBottom: 3 }}>
        Select your pokemon
      </Typography>

{/* Container que lista los pokemon */}
      <Grid 
        container 
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={1} 
        
        >
        {pokemons.map(pokemon => (
          <Grid item  key={pokemon.id} sx={{ maxWidth: '100%' }}>
            <PokemonCard pokemon={pokemon} onClick={() => setSelectedPokemon(pokemon)} />
          </Grid>
        ))}
      </Grid>

{/* Display ganador */}
      {winner && (
        <Typography  
          icon={false}
          variant="filled" 
          severity="success"
          sx={{
            marginY: 4,
            padding: 2,
            backgroundColor: 'azure',
            fontSize: '20px', 
            color: 'black',
            border: '2px solid black', 
            boxShadow: 8,
            borderRadius: 2,
          }}
          >
          {winner.name} wins!
        </Typography >
      )}
{/* Container Batalla       */}
        <Grid2 
          container 
          sx={{  
            marginBottom: 2,
            alignItems: 'center'
          }}>
          <Grid2 item xs={12} sm={4} md={4} sx={{display: 'flex', justifyContent: 'center'}}>
            {selectedPokemon ? <CardFull pokemon={selectedPokemon} /> : <CardGhost titulo={"Click en un pokemon"} />}
          </Grid2>
          <Grid2 item xs={12} sm={4} md={4} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Button 
                variant="contained" 
                color="success" 
                onClick={handleBattle}
                sx={{
                  paddingY: 1.2,
                  textTransform: 'none',
                  fontSize: '16px',
                  color: '#f9fcff', 
                  marginBottom: 3 
                }}>
                Start Battle
              </Button>
          </Grid2>
          <Grid2 item xs={12} sm={4} md={4} sx={{display: 'flex', justifyContent: 'center'}}>
            {opponent ? <CardFull pokemon={opponent} /> : <CardGhost titulo={"Rival aleatorio!"} />}
          </Grid2>        
        </Grid2> 
    </Container>
  );
};

export default App;
