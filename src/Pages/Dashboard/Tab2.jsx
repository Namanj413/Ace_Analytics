// Tab2.js

import React, { useState, useEffect } from 'react';
import { Grid, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';


const Tab2 = () => {
  const [dishes, setDishes] = useState(JSON.parse(localStorage.getItem("AllRanked")) || []);

  useEffect(() => {
    async function setLocalData() {
      const data = JSON.parse(localStorage.getItem("AllRanked"));
      //  console.log(data);
      setDishes(data);
    }

    setLocalData()

  }, [])
  return (
    <>
      <Grid container spacing={2}>
        {dishes
          ?.sort((a, b) => a.Rank - b.Rank)
          .map((dish) => (
            <Grid item key={dish.id} xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={dish.image}
                  alt={dish.dishName}
                />
                <br />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {dish.dishName}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    Points : {dish.Points}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    Card Id : {dish.id}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    Rank : {dish.Rank}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    Ranked Points : {dish.mypoints}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ height: 70 }}>
                    {dish.description}
                  </Typography>
                </CardContent>
              
              </Card>
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default Tab2;
