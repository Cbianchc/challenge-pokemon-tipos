import React from 'react';
import { Card, CardContent, CardMedia, Typography, Divider, LinearProgress } from '@mui/material';

const getColoresPorTipo= (type) => {
  switch (type) {
    case 'electrico':
      return '#F8D030';
    case 'fuego':
      return '#F08030';
    case 'agua':
      return '#6890F0';
    case 'planta':
      return '#78C850';
    case 'normal':
      return '#A8A878';
    case 'veneno':
      return '#A040A0';
    default:
      return '#A8A878'; 
  }
};

const CardFull = ({ pokemon }) => {
  const hpValue = pokemon.hp *10;
  const attackValue = pokemon.attack * 10; 
  const defenseValue = pokemon.defense * 10;
  const speedValue = pokemon.speed * 10;
  const typeColor = getColoresPorTipo(pokemon.type);


  return (
    <Card 
      sx={{   
        minHeight: 530,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'left',
        boxShadow: 8,
        borderRadius: 4,
        paddingBottom: '40px',
        marginBottom: 3,
        border: '6px solid #FFD700',
        background: `linear-gradient(145deg, ${typeColor}, #ffffff)`, // Gradient background based on type
      }}>
      <CardMedia
        component="img"
        alt={pokemon.name}
        height="140"
        image={pokemon.imageUrl}
        sx={{
          width: '80%', 
          height: 'auto',
          maxHeight: '80%', 
          objectFit: 'contain', 
          margin: '0 auto', 
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
          {pokemon.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" fontWeight="bold" marginBottom={1}>
          {pokemon.type}
        </Typography>

        <Divider />

{/* Habilidades del pokemon */}
        <Typography 
          variant="body1" 
          color="text.primary" 
          fontWeight="bold"
          sx={{ marginBottom: '5px'}}
        >  
          HP
        </Typography>
        <LinearProgress  
          variant="determinate" 
          value={hpValue}
          sx={{
            height: 12,
            borderRadius: 5,
            '& .MuiLinearProgress-bar': {
                backgroundColor: '#83ff61', 
                borderRadius: 15,
              },
            marginBottom: 1,
          }}
        />
        
        <Typography 
          variant="body1" 
          color="text.primary" 
          fontWeight="bold"
          sx={{ marginBottom: '5px'}}
        >  
          Attack
        </Typography>
        <LinearProgress  
          variant="determinate" 
          value={attackValue}
          sx={{
            height: 12,
            borderRadius: 5,
            '& .MuiLinearProgress-bar': {
                backgroundColor: '#83ff61', 
                borderRadius: 15,
              },
            marginBottom: 1,
          }}
        />

        <Typography 
          variant="body1" 
          color="text.primary" 
          fontWeight="bold"
          sx={{ marginBottom: '5px'}}
        >  
          Defense
        </Typography>
        <LinearProgress  
          variant="determinate" 
          value={defenseValue}
          sx={{
            height: 12,
            borderRadius: 5,
            '& .MuiLinearProgress-bar': {
                backgroundColor: '#83ff61', 
                borderRadius: 15,
              },
            marginBottom: 1,
          }}
        />

        <Typography 
          variant="body1" 
          color="text.primary" 
          fontWeight="bold"
          sx={{ marginBottom: '5px'}}
        >  
          Speed
        </Typography>
        <LinearProgress  
          variant="determinate" 
          value={speedValue}
          sx={{
            height: 12,
            borderRadius: 5,
            '& .MuiLinearProgress-bar': {
                backgroundColor: '#83ff61', 
                borderRadius: 15,
              },
            marginBottom: 1,
          }}
        />

      </CardContent>
    </Card>
  );
};

export default CardFull;
