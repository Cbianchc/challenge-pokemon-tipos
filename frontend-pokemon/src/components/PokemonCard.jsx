import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const PokemonCard = ({ pokemon, onClick }) => {
  return (
    <Card 
    sx={{
      width: 160,
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      boxShadow: 8,
      cursor: 'pointer',
      borderRadius: 2,
      paddingBottom: '40px',
      position: 'relative',
      marginBottom: 3,
    }}
    onClick={onClick}
    className="pokemon-card"
    >
      <CardMedia
        component="img"
        alt={pokemon.name}
        image={pokemon.imageUrl}
        sx={{
          width: '80%', 
          height: 'auto',
          maxHeight: '80%', 
          objectFit: 'contain', 
          margin: '0 auto', 
        }}
        
      />
      <CardContent
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          position: 'absolute',
          bottom: 0,
          left: 0,
          padding: '8px',
          boxSizing: 'border-box',  
         }}
      >
        <Typography  variant="body" component="div" fontWeight="bold" >
          {pokemon.name}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Attack: {pokemon.attack}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Defense: {pokemon.defense}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          HP: {pokemon.hp}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Speed: {pokemon.speed}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Type: {pokemon.type}
        </Typography> */}
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
