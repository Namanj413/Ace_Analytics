// App.js
import React, { useState, useEffect } from 'react';
import { Grid, Card, CardActions, CardContent, CardMedia, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

function Dashboard() {
  const navigate = useNavigate();
  const [dishes, setDishes] = useState([]);
  const [users, setUsers] = useState([]);
  const [tab, setTab] = useState(1);

async function Logout(){

  localStorage.removeItem("token");
  window.location.reload();
  // navigate("/login")

}

  return (
    <>

      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box sx={{ Maxheight: "200vh", width: "98vw", marginTop: "5vh" }}>
            <br />
            <Box component="div" sx={{  width: "95%", display: "flex", height: "auto" ,justifyContent:"center"}}>
            <Button
                  size="small"
                  variant="contained"
                  color= {tab ===1 ? "secondary":"primary" }
                  sx={{ width: "20%" }}
                onClick={() =>Logout()}
                >
                 Logout
                </Button>
            </Box>
            <br/>
            <Box component="div" sx={{  width: "95%", display: "flex", height: "auto" }}>
              <Box component="div" sx={{  width: "29%", display: "flex", justifyContent: "center" }}>
                <Button
                  size="small"
                  variant="contained"
                  color= {tab ===1 ? "secondary":"primary" }
                  sx={{ width: "40%" }}
                onClick={() =>setTab(1)}
                >
                  Tab 1
                </Button>
              </Box>
              <Box component="div" sx={{ width: "29%", display: "flex", justifyContent: "center" }}>
                <Button
                  size="small"
                  variant="contained"
                  color={tab ===2 ? "secondary":"primary" }
                  sx={{ width: "40%" }}
                  onClick={() =>setTab(2)}
                >
                  Tab 2
                </Button>
              </Box>
              
              
              <Box component="div" sx={{ width: "29%", display: "flex", justifyContent: "center" }}>
               
              {localStorage.getItem("role")==="admin" ? (<><Button
                  size="small"
                  variant="contained"
                  color={tab ===3 ? "secondary":"primary" }
                  sx={{ width: "40%" }}
                  onClick={() =>setTab(3)}
                >
                  Tab 3
                </Button></>) : (null)}
                
              </Box>


            </Box>
            <Box sx={{ height: "auto", width: "99%", marginTop: "5vh" }}>
   {tab===1 && <Tab1/>}
   {tab===2 && <Tab2/>}
   
   {localStorage.getItem("role")==="admin" ? (<>{tab===3 && <Tab3/>} </>) : (null) }
   
              </Box>

          </Box>

        </Grid>
        
      </Grid>

    </>
  );
}

export default Dashboard;
