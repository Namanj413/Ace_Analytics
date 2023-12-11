// // Tab1.js
// import React,{ useState ,useEffect} from 'react';
// import { Grid, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
// import axios from 'axios';
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
// import { deepOrange, deepPurple } from '@mui/material/colors';

// const Tab1 = () => {
//   const [dishes, setDishes] = useState( JSON.parse(localStorage.getItem("dishes")) ? JSON.parse(localStorage.getItem("dishes")) : []);
//   const [users, setUsers] = useState([]);
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [ranks, setRanks] = useState([]);
//   const [points, setPoints] = useState([]);

//   const handleVote = async (id, dish) => {

//     if (selectedItems.some(item => item.id === id)) {
//       setSelectedItems(selectedItems.filter(item => item.id !== id));
//       updateRanksAndPoints(selectedItems.filter(item => item.id !== id));
//      //  console.log(selectedItems);
//       const updatedDishes = dishes.map(item => {
//         if (item.id === id) {
//           return { ...item, selected: !item.selected };
//         }
//         return item;
//       });
//       setDishes(updatedDishes);
//       localStorage.setItem("dishes", JSON.stringify(updatedDishes));
//      //  console.log(updatedDishes);
//     }  else {
//      //  console.log("Item is already ranked or maximum items selected");
//     }

//   // if (selectedItems.length >3) {
//   //   updateRanksAndPoints(selectedItems.filter(item => item.id !== id));
//   //     const updatedDishes = dishes.map(item => {
//   //       if (item.id === id) {
//   //         return { ...item, selected: !item.selected };
//   //       }
//   //       return item;
//   //     });
//   //     setDishes(updatedDishes);
//   //     localStorage.setItem("dishes", JSON.stringify(updatedDishes));
//   //    //  console.log(updatedDishes);
//   // }
//   };
//   const handleRemove = (id) => {
//     setSelectedItems(selectedItems.filter(item => item.id !== id));
//     updateRanksAndPoints(selectedItems.filter(item => item.id !== id));
//   };

//  const updateRanksAndPoints = (updatedItems) => {
//   const newRanks = updatedItems.map((item, index) => index + 1);
//   const newPoints = updatedItems.map((item, index) => {
//     if (index === 0) {
//       return 30;
//     } else if (index === 1) {
//       return 20;
//     } else if (index === 2) {
//       return 10;
//     }
//     return 0; // Handle other cases as needed
//   });

//   // Set points to 0 for unselected items
//   dishes.forEach((dish) => {
//     if (!updatedItems.some((item) => item.id === dish.id)) {
//       newPoints[dish.id - 1] = 0;
//     }
//   });

//   setRanks(() => newRanks);
//   setPoints(() => newPoints);
// };
//   const Voted = async (e) => {
//    //  console.log(e);
//   };



//     useEffect(() => {
//       const fetchDishes = async () => {
//         try {
//           const response = await axios.get('https://script.googleusercontent.com/macros/echo?user_content_key=FJjVzluIu4UOWvH8qLa4GPQoLg0fZVmZNzG2crhcmbIy_gX3jOMBXIQqY8ugxBmC27KL4RcNBdQfdXOf0GjIsUXe_pzkW0L3m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnEcUxWP-5iPUAjjQNZQlRrk3PXdVbfrk7A3Zik5rLU37y9YP3YgYxLyb9fSlWDQeX0qHZOtOhrZkQs8gC_NTVh8dytMEXBVKqg&lib=MmHDehiyS-ks-74SZss74VwIm5ToQ0m3X');
//           const dishesWithSelectedField = await response.data.map(dish => ({ ...dish, selected: false }));
//     setDishes(dishesWithSelectedField);
//    //  console.log(dishesWithSelectedField);
//    const dishesWithSelectedFieldString = JSON.stringify(dishesWithSelectedField);
//     localStorage.setItem("dishes",dishesWithSelectedFieldString);
//           ////  console.log(response.data);
//         } catch (error) {
//           console.error('Error fetching dishes data:', error);
//         }
//       };

//      // Import user data directly (simulate fetching from a local database)
//      import('./usersData.json').then((userData) => setUsers(userData));
//   const localDishes = localStorage.getItem("dishes");

//   async function setLocalData(){
//     const data =   JSON.parse(localStorage.getItem("dishes"));
//    //  console.log(data);
//     setDishes(data);
//   }
//   if(!localDishes){
//     fetchDishes();
//   }else{
//     setLocalData()
//   }

//    }, []);

//   return (
//     <Grid container spacing={2}>
//       {dishes?.map((dish) => (
//         <Grid item key={dish.id} xs={12} sm={6} md={4} lg={3}>
//           <Card sx={{ maxWidth: 345 }}>
//             <CardMedia
//               sx={{ height: 140 }}
//               image={dish.image}
//               alt={dish.dishName}
//             />
//             <br />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//                 {dish.dishName}
//               </Typography>
//               <Typography variant="body2" color="text.secondary" sx={{ height: 70 }}>
//                 {dish.description}
//               </Typography>
//             </CardContent>
//             <CardActions sx={{ display: "flex", justifyContent: "center" }}>

//             <Stack direction="row" spacing={2}>
//       <Avatar>1</Avatar>
//       <Avatar>2</Avatar>
//       <Avatar>3</Avatar>
//       <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>

//     </Stack>
//             </CardActions>
//           </Card>
//         </Grid>
//       ))}
//       <br/>
//       <Button
//                 size="small"
//                 variant="contained"
//                 color="primary"
//                 // id={dish.id}
//                 sx={{position:"fixed",marginLeft:"42%",marginTop:"45%",width:"20%"}}
//                 // onClick={() => handleVote(dish.id, dish)}
//               >
//                Save Now
//               </Button>
//     </Grid>
//   );
// };

// export default Tab1;

// Tab1.js
import React, { useState, useEffect } from 'react';
import { Grid, Card, CardActions, CardContent, CardMedia, Button, Typography, Box } from '@mui/material';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';

const Tab1 = () => {
  const [dishes, setDishes] = useState(JSON.parse(localStorage.getItem("dishes")) ? JSON.parse(localStorage.getItem("dishes")) : []);
  const [rank1, setRank1] = useState(JSON.parse(localStorage.getItem("Rank1")) || []);
  const [rank2, setRank2] = useState(JSON.parse(localStorage.getItem("Rank2")) || []);
  const [rank3, setRank3] = useState(JSON.parse(localStorage.getItem("Rank3")) || []);
  const [editRank, setEditRank] = useState(false);


  async function rankAlignFunction(dish_id, dish, rankName) {

    if (rankName === "Rank1") {
      if (rank2.id === dish_id || rank1.id != dish_id || rank3.id === dish_id) {

        setRank1(dish)
        const rank1Stringify = JSON.stringify(dish);
        localStorage.setItem("Rank1", rank1Stringify)
        if (rank2.id === dish_id) {
          setRank2([])
          if (localStorage.getItem("Rank2")) {
            localStorage.removeItem("Rank2");
          }
        }
        if (rank3.id === dish_id) {
          setRank3([])
          if (localStorage.getItem("Rank3")) {
            localStorage.removeItem("Rank3");
          }
        }
      }
    }


    if (rankName === "Rank2") {
      if (rank1.id === dish_id || rank2.id != dish_id || rank3.id === dish_id) {

        setRank2(dish)
        const rank2Stringify = JSON.stringify(dish);
        localStorage.setItem("Rank2", rank2Stringify)
        if (rank1.id === dish_id) {
          setRank1([])
          if (localStorage.getItem("Rank1")) {
            localStorage.removeItem("Rank1");
          }
        }
        if (rank3.id === dish_id) {
          setRank3([])
          if (localStorage.getItem("Rank3")) {
            localStorage.removeItem("Rank3");
          }
        }
      }
    }
    if (rankName === "Rank3") {
      if (rank1.id === dish_id || rank3.id != dish_id || rank2.id === dish_id) {
        const rank3Stringify = JSON.stringify(dish);
        localStorage.setItem("Rank3", rank3Stringify)
        setRank3(dish)
        if (rank1.id === dish_id) {
          setRank1([])
          if (localStorage.getItem("Rank1")) {
            localStorage.removeItem("Rank1");
          }
        }
        if (rank2.id === dish_id) {
          setRank2([])
          if (localStorage.getItem("Rank2")) {
            localStorage.removeItem("Rank2");
          }
        }
      }
    }

    if (rankName === "NoRank") {
      if (rank1.id === dish_id || rank3.id === dish_id || rank2.id === dish_id) {
        if (rank3.id === dish_id) {
          setRank3([])
        }

        if (rank1.id === dish_id) {
          setRank1([])
        }
        if (rank2.id === dish_id) {
          setRank2([])
        }
      }
    }


  }
  async function saveRankFunction() {
    // setRank1({ ...rank1, mypoints: 30 }); // Add mypoints field with value 30
    // setRank2({ ...rank2, mypoints: 20 }); // Add mypoints field with value 30
    // setRank3({ ...rank3, mypoints: 10 }); // Add mypoints field with value 30
    const user = localStorage.getItem("username");
    setEditRank(false);
    const allSelectedRank = [{ ...rank1, mypoints: 30, Rank: 1 }, { ...rank2, mypoints: 20, Rank: 2 }, { ...rank3, mypoints: 10, Rank: 3 }]
    const previousList = JSON.parse(localStorage.getItem("UserWiseList"))

    const allSelectedRankByUser = { ...previousList, [user]: allSelectedRank }
    //  console.log(allSelectedRankByUser);
    ////  console.log(allSelectedRank);
    const stringifyRanks = JSON.stringify(allSelectedRank);
    localStorage.setItem("AllRanked", stringifyRanks)


    const stringifyRanksUserWise = JSON.stringify(allSelectedRankByUser);
    localStorage.setItem("UserWiseList", stringifyRanksUserWise)

  }

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await axios.get('https://script.googleusercontent.com/macros/echo?user_content_key=FJjVzluIu4UOWvH8qLa4GPQoLg0fZVmZNzG2crhcmbIy_gX3jOMBXIQqY8ugxBmC27KL4RcNBdQfdXOf0GjIsUXe_pzkW0L3m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnEcUxWP-5iPUAjjQNZQlRrk3PXdVbfrk7A3Zik5rLU37y9YP3YgYxLyb9fSlWDQeX0qHZOtOhrZkQs8gC_NTVh8dytMEXBVKqg&lib=MmHDehiyS-ks-74SZss74VwIm5ToQ0m3X');
        setDishes(response);
        const dishesWithSelectedFieldString = JSON.stringify(response);
        localStorage.setItem("dishes", dishesWithSelectedFieldString);
        ////  console.log(response.data);
      } catch (error) {
        console.error('Error fetching dishes data:', error);
      }
    };

    // Import user data directly (simulate fetching from a local database)
    // import('./usersData.json').then((userData) => setUsers(userData));
    const localDishes = localStorage.getItem("dishes");

    async function setLocalData() {
      const data = JSON.parse(localStorage.getItem("dishes"));
      //  console.log(data);
      setDishes(data);
    }
    if (!localDishes) {
      fetchDishes();
    } else {
      setLocalData()
    }

  }, []);
  useEffect(() => {
    //  console.log(rank1);
  }, [rank1])

  return (
    <Grid container spacing={2}>
      <Box component="div" sx={{ width: "95%", display: "flex", height: "auto" }}>
        <Box component="div" sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Button
            size="small"
            variant="contained"
            color={editRank ? "error" : "success"}
            sx={{ width: "20%" }}
            onClick={() => setEditRank(!editRank)}
          >
            {editRank ? "Cancle" : "Edit Ranks"}

          </Button>
        </Box>
      </Box>
      {dishes?.map((dish) => (
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
              <Typography variant="body2" color="text.secondary" sx={{ height: 70 }}>
                {dish.description}
              </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>

              <Stack direction="row" spacing={2}>
                <Avatar sx={{ bgcolor: rank1.id === dish.id ? deepOrange[500] : "null" }} onClick={() => (editRank ? (rankAlignFunction(dish.id, dish, "Rank1")) : (null))}>1</Avatar>
                <Avatar sx={{ bgcolor: rank2.id === dish.id ? deepOrange[500] : "null" }} onClick={() => (editRank ? (rankAlignFunction(dish.id, dish, "Rank2")) : (null))}>2</Avatar>
                <Avatar sx={{ bgcolor: rank3.id === dish.id ? deepOrange[500] : "null" }} onClick={() => (editRank ? (rankAlignFunction(dish.id, dish, "Rank3")) : (null))}>3</Avatar>
                <Avatar sx={{ bgcolor: deepPurple[500] }} onClick={() => (rankAlignFunction(dish.id, dish, "NoRank"))}>No</Avatar>

              </Stack>
            </CardActions>
          </Card>
        </Grid>
      ))}
      <br />
      {editRank ? (<Button
        size="small"
        variant="contained"
        color="success"
        // id={dish.id}
        sx={{ position: "fixed", marginLeft: "42%", marginTop: "70vh", width: "20%" }}
        onClick={() => saveRankFunction()}
      >
        Save Now
      </Button>) : (null)}

    </Grid>
  );
};

export default Tab1;