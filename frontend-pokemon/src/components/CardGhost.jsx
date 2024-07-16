import React from 'react';
import { Card, CardContent, CardMedia, Typography, Divider } from '@mui/material';
import pokemonbolaGhost from "../assets/pokebolaGhost.png";

const CardGhost = ({ titulo }) => {
  return (
    <Card 
      sx={{   
        height: 530,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: 8,
        borderRadius: 2,
        paddingBottom: '40px',
        marginBottom: 3,
        backgroundColor: '#f0f0f0', 
      }}>
      <CardMedia
        component="img"
        alt="No Pokémon"
        height="140"
        image= {pokemonbolaGhost} 
        sx={{
          width: '80%', 
          height: 'auto',
          maxHeight: '80%', 
          objectFit: 'contain', 
          margin: '0 auto', 
          opacity: "0.7"
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" textAlign={'center'} component="div" fontWeight="bold" color="text.secondary">
          {titulo}
        </Typography>
        <Divider />
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', marginTop: 2 }}>
          Selecciona un Pokémon para comenzar la batalla.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardGhost;
