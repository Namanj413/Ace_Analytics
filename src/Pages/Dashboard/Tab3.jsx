// // Tab2.js

// import React, { useState, useEffect } from 'react';
// import { Grid, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
// import { deepOrange, deepPurple } from '@mui/material/colors';


// const Tab3 = () => {
//   const [dishes, setDishes] = useState(JSON.parse(localStorage.getItem("UserWiseList")) || []);
//   // const [rank1, setRank1] = useState( JSON.parse(localStorage.getItem("Rank1")) || []);
//   // const [rank2, setRank2] = useState(JSON.parse(localStorage.getItem("Rank2")) || []);
//   // const [rank3, setRank3] = useState(JSON.parse(localStorage.getItem("Rank3")) || []);
//   const [rank1, setRank1] = useState(JSON.parse(localStorage.getItem("Rank1")) || []);
//   const [rank2, setRank2] = useState(JSON.parse(localStorage.getItem("Rank2")) || []);
//   const [rank3, setRank3] = useState(JSON.parse(localStorage.getItem("Rank3")) || []);
//   const [editRank, setEditRank] = useState(false);
//   const [userData, setUserData] = useState([])
//   const [userDataEdit, setUserDataEdit] = useState("")

//   async function EditTeamsCallling(username, userData) {
//     console.log(userDataEdit, username)
//     if (userDataEdit != username) {
//       setUserDataEdit(username);
//     }

//     setUserData(userData)

//   }
//   async function rankAlignFunction(dish_id, dish, rankName, index, key, value) {

//     console.log("user whole data");
//     console.log(userData);
//     console.log(`dishid ${dish_id}, userData: ${dish}, rankName: ${rankName},index: ${index}, Key : ${key}`)
//     console.log(dish);
//     // const updatedDishes = Object.fromEntries(
//     //   Object.entries(dishes).map(([key, value]) => {
//     //     const updatedValue = value.map(item => {
//     //       if (item.id === nex) {
//     //         return { ...item, Rank: 50 };
//     //       }
//     //       return item;
//     //     });
//     //     return [key, updatedValue];
//     //   })
//     // );

//     // console.log(dishes(["naman",0]));
//     // console.log(updatedDishes);

//     if (rankName === "Rank1") {
//       if (rank2.id === dish_id || rank1.id != dish_id || rank3.id === dish_id) {
//         if (index === 0) {
//           if (userData[1].Rank != 1 && userData[2].Rank != 1) {

//         setRank1(userData[index])
//         setUserData(prevUserData => {
//           const updatedUserData = [...prevUserData];
//           updatedUserData[index] = { ...updatedUserData[index], Rank: 1 };
//           return updatedUserData;
//         });

//         const rank1Stringify = JSON.stringify(dish);
//         localStorage.setItem("Rank1", rank1Stringify)
//         if (rank2.id === dish_id) {
//           setRank2([])
//           if (localStorage.getItem("Rank2")) {
//             localStorage.removeItem("Rank2");
//           }
//         }
//         if (rank3.id === dish_id) {
//           setRank3([])
//           if (localStorage.getItem("Rank3")) {
//             localStorage.removeItem("Rank3");
//           }
//         }
//       }
//     }

//     if (index === 1) {
//       if (userData[0].Rank != 1 && userData[2].Rank != 1) {

//     setRank1(userData[index])
//     setUserData(prevUserData => {
//       const updatedUserData = [...prevUserData];
//       updatedUserData[index] = { ...updatedUserData[index], Rank: 1 };
//       return updatedUserData;
//     });

//     const rank1Stringify = JSON.stringify(dish);
//     localStorage.setItem("Rank1", rank1Stringify)
//     if (rank2.id === dish_id) {
//       setRank2([])
//       if (localStorage.getItem("Rank2")) {
//         localStorage.removeItem("Rank2");
//       }
//     }
//     if (rank3.id === dish_id) {
//       setRank3([])
//       if (localStorage.getItem("Rank3")) {
//         localStorage.removeItem("Rank3");
//       }
//     }
//   }
// }


// if (index === 2) {
//   if (userData[0].Rank != 1 && userData[1].Rank != 1) {

// setRank1(userData[index])
// setUserData(prevUserData => {
//   const updatedUserData = [...prevUserData];
//   updatedUserData[index] = { ...updatedUserData[index], Rank: 1 };
//   return updatedUserData;
// });

// const rank1Stringify = JSON.stringify(dish);
// localStorage.setItem("Rank1", rank1Stringify)
// if (rank2.id === dish_id) {
//   setRank2([])
//   if (localStorage.getItem("Rank2")) {
//     localStorage.removeItem("Rank2");
//   }
// }
// if (rank3.id === dish_id) {
//   setRank3([])
//   if (localStorage.getItem("Rank3")) {
//     localStorage.removeItem("Rank3");
//   }
// }
// }
// }




//   }
// }


//     if (rankName === "Rank2") {
//       if (rank1.id === dish_id || rank2.id != dish_id || rank3.id === dish_id) {
//         if (index === 0) {
//           if (userData[1].Rank != 2 && userData[2].Rank != 2) {
//             setRank2(userData[index])
//             setUserData(prevUserData => {
//               const updatedUserData = [...prevUserData];
//               updatedUserData[index] = { ...updatedUserData[index], Rank: 2 };
//               return updatedUserData;
//             });
//             const rank2Stringify = JSON.stringify(dish);
//             localStorage.setItem("Rank2", rank2Stringify)
//             if (rank1.id === dish_id) {
//               setRank1([])
//               if (localStorage.getItem("Rank1")) {
//                 localStorage.removeItem("Rank1");
//               }
//             }
//             if (rank3.id === dish_id) {
//               setRank3([])
//               if (localStorage.getItem("Rank3")) {
//                 localStorage.removeItem("Rank3");
//               }
//             }
//           }
//         }
//         if (index === 1) {
//           if (userData[0].Rank != 2 && userData[2].Rank != 2) {
//             setRank2(userData[index])
//             setUserData(prevUserData => {
//               const updatedUserData = [...prevUserData];
//               updatedUserData[index] = { ...updatedUserData[index], Rank: 2 };
//               return updatedUserData;
//             });
//             const rank2Stringify = JSON.stringify(dish);
//             localStorage.setItem("Rank2", rank2Stringify)
//             if (rank1.id === dish_id) {
//               setRank1([])
//               if (localStorage.getItem("Rank1")) {
//                 localStorage.removeItem("Rank1");
//               }
//             }
//             if (rank3.id === dish_id) {
//               setRank3([])
//               if (localStorage.getItem("Rank3")) {
//                 localStorage.removeItem("Rank3");
//               }
//             }
//           }
//         }

//         if (index === 2) {
//           if (userData[0].Rank != 2 && userData[1].Rank != 2) {
//             setRank2(userData[index])
//             setUserData(prevUserData => {
//               const updatedUserData = [...prevUserData];
//               updatedUserData[index] = { ...updatedUserData[index], Rank: 2 };
//               return updatedUserData;
//             });
//             const rank2Stringify = JSON.stringify(dish);
//             localStorage.setItem("Rank2", rank2Stringify)
//             if (rank1.id === dish_id) {
//               setRank1([])
//               if (localStorage.getItem("Rank1")) {
//                 localStorage.removeItem("Rank1");
//               }
//             }
//             if (rank3.id === dish_id) {
//               setRank3([])
//               if (localStorage.getItem("Rank3")) {
//                 localStorage.removeItem("Rank3");
//               }
//             }
//           }
//         }
//       }
//     }

//     if (rankName === "Rank3") {
//       if (rank1.id === dish_id || rank3.id != dish_id || rank2.id === dish_id) {
//         const rank3Stringify = JSON.stringify(dish);
//         localStorage.setItem("Rank3", rank3Stringify)
//         setRank3(userData[index])
//         setUserData(prevUserData => {
//           const updatedUserData = [...prevUserData];
//           updatedUserData[index] = { ...updatedUserData[index], Rank: 3 };
//           return updatedUserData;
//         });
//         if (rank1.id === dish_id) {
//           setRank1([])
//           if (localStorage.getItem("Rank1")) {
//             localStorage.removeItem("Rank1");
//           }
//         }
//         if (rank2.id === dish_id) {
//           setRank2([])
//           if (localStorage.getItem("Rank2")) {
//             localStorage.removeItem("Rank2");
//           }
//         }
//       }
//     }

//     if (rankName === "NoRank") {
//       if (rank1.id === dish_id || rank3.id === dish_id || rank2.id === dish_id) {
//         if (rank3.id === dish_id) {
//           setRank3([])
//           if (index === 0) {

//               setUserData(prevUserData => {
//                 const updatedUserData = [...prevUserData];
//                 updatedUserData[index] = { ...updatedUserData[index], Rank: 0 };
//                 return updatedUserData;
//               });
//         }
//         if (index === 1) {

//           setUserData(prevUserData => {
//             const updatedUserData = [...prevUserData];
//             updatedUserData[index] = { ...updatedUserData[index], Rank: 0 };
//             return updatedUserData;
//           });
//     }
//     if (index === 2) {

//       setUserData(prevUserData => {
//         const updatedUserData = [...prevUserData];
//         updatedUserData[index] = { ...updatedUserData[index], Rank: 0 };
//         return updatedUserData;
//       });
// }
//       }
//         if (rank1.id === dish_id) {
//           setRank1([])
//           if (index === 0) {

//             setUserData(prevUserData => {
//               const updatedUserData = [...prevUserData];
//               updatedUserData[index] = { ...updatedUserData[index], Rank: 0 };
//               return updatedUserData;
//             });
//       }
//       if (index === 1) {

//         setUserData(prevUserData => {
//           const updatedUserData = [...prevUserData];
//           updatedUserData[index] = { ...updatedUserData[index], Rank: 0 };
//           return updatedUserData;
//         });
//   }
//   if (index === 2) {

//     setUserData(prevUserData => {
//       const updatedUserData = [...prevUserData];
//       updatedUserData[index] = { ...updatedUserData[index], Rank: 0 };
//       return updatedUserData;
//     });
// }
//         }
//         if (rank2.id === dish_id) {
//           setRank2([])
//           if (index === 0) {

//             setUserData(prevUserData => {
//               const updatedUserData = [...prevUserData];
//               updatedUserData[index] = { ...updatedUserData[index], Rank: 0 };
//               return updatedUserData;
//             });
//       }
//       if (index === 1) {

//         setUserData(prevUserData => {
//           const updatedUserData = [...prevUserData];
//           updatedUserData[index] = { ...updatedUserData[index], Rank: 0 };
//           return updatedUserData;
//         });
//   }
//   if (index === 2) {

//     setUserData(prevUserData => {
//       const updatedUserData = [...prevUserData];
//       updatedUserData[index] = { ...updatedUserData[index], Rank: 0 };
//       return updatedUserData;
//     });
// }
//         }
//       }
//     }


//   }
//   async function saveRankFunction() {
//     // setRank1({ ...rank1, mypoints: 30 }); // Add mypoints field with value 30
//     // setRank2({ ...rank2, mypoints: 20 }); // Add mypoints field with value 30
//     // setRank3({ ...rank3, mypoints: 10 }); // Add mypoints field with value 30
//     const user = "rohan";
//     // setEditRank(false);
//     const allSelectedRank = [{ ...rank1, mypoints: 30, Rank: 1 }, { ...rank2, mypoints: 20, Rank: 2 }, { ...rank3, mypoints: 10, Rank: 3 }]
//     const previousList = JSON.parse(localStorage.getItem("UserWiseList"))
//     console.log(allSelectedRank);
//     const allSelectedRankByUser = { ...previousList, [user]: allSelectedRank }

//   }

//   useEffect(() => {
//     async function setLocalData() {
//       const data = JSON.parse(localStorage.getItem("UserWiseList"));
//       console.log(data);
//       // setDishes(data);
//     }

//     setLocalData()

//   }, [])
//   return (
//     <>
//       <Grid container spacing={1}>
//         <Grid item xs={12} sm={12} md={12} lg={12}>
//           {/* {dishes?.map((dish,index) => ( 
// {dish}

//     ))} */}
//           <br />

//           {Object.entries(dishes).map(([key, value]) => (
//             <div key={key}>
//               <h3>{key}</h3>
//               <Button
//                 size="small"
//                 variant="contained"

//                 color={userDataEdit === key ? "error" : "success"}
//                 // id={dish.id}
//                 sx={{ width: "20%" }}
//                 onClick={() => userDataEdit === key ? (setUserDataEdit("")) : (EditTeamsCallling(key, value))}
//               >
//                 {userDataEdit === key ? "Cancle" : "Edit Ranks"}

//               </Button>
//               <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
//                 {value.map((item, index) => (
//                   <div key={index}>
//                     {/* <div>{item.id}</div>
//           <div>{item.dishName}</div>
//           <div>{item.description}</div>
//           <div> <img src={item.image} /></div>
//           Render other properties here */}


//                     <Card sx={{ maxWidth: 345 }}>
//                       <CardMedia
//                         sx={{ height: 140 }}
//                         image={item.image}
//                         alt={item.dishName}
//                       />
//                       <br />
//                       <CardContent>
//                         <Typography gutterBottom variant="h5" component="div">
//                           {item.dishName}
//                         </Typography>

//                         <Typography gutterBottom variant="h5" component="div">
//                           Points : {item.Points}
//                         </Typography>
//                         <Typography gutterBottom variant="h5" component="div">
//                           Rank : {item.Rank}
//                         </Typography>
//                         <Typography gutterBottom variant="h5" component="div">
//                           Ranked Points : {item.mypoints}
//                         </Typography>
//                         <Typography variant="body2" color="text.secondary" sx={{ height: 70 }}>
//                           {item.description}
//                         </Typography>
//                       </CardContent>
//                       <CardActions sx={{ display: "flex", justifyContent: "center" }}>

//                         <Stack direction="row" spacing={2}>
//                           {/* <Avatar sx={{ bgcolor: rank1.id === item.id ? deepOrange[500] : "null" }} onClick={() => (  editRank ? (rankAlignFunction(item.id, item, "Rank1")):(null))}>1</Avatar>
//   <Avatar sx={{ bgcolor: rank2.id === item.id ? deepOrange[500] : "null" }} onClick={() => ( editRank ? (rankAlignFunction(item.id, item, "Rank2")):(null))}>2</Avatar>
//   <Avatar sx={{ bgcolor: rank3.id === item.id ? deepOrange[500] : "null" }} onClick={() => (editRank ? (rankAlignFunction(item.id, item, "Rank3")):(null))}>3</Avatar>
//   <Avatar sx={{ bgcolor: deepPurple[500] }} onClick={() => (rankAlignFunction(dish.id, dish, "NoRank"))}>No</Avatar> */}
//                           {userDataEdit === key ? (<>
//                             <Avatar sx={{ bgcolor: userData[index].Rank === 1 ? deepOrange[500] : "null" }} onClick={() => ((rankAlignFunction(item.id, item, "Rank1", index, key, value)))}>1</Avatar>
//                             <Avatar sx={{ bgcolor: userData[index].Rank === 2 ? deepOrange[500] : "null" }} onClick={() => ((rankAlignFunction(item.id, item, "Rank2", index, key, value)))}>2</Avatar>
//                             <Avatar sx={{ bgcolor: userData[index].Rank === 3 ? deepOrange[500] : "null" }} onClick={() => ((rankAlignFunction(item.id, item, "Rank3", index, key, value)))}>3</Avatar>
//                             <Avatar sx={{ bgcolor: deepPurple[500] }} onClick={() => (rankAlignFunction(item.id, item,  "NoRank", index, key, value))}>No</Avatar>
//                           </>) : (<>
//                             <Avatar sx={{ bgcolor: item.Rank === 1 ? deepOrange[500] : "null" }} onClick={() => ((rankAlignFunction(item.id, item, "Rank1", index, key, value)))}>1</Avatar>
//                             <Avatar sx={{ bgcolor: item.Rank === 2 ? deepOrange[500] : "null" }} onClick={() => ((rankAlignFunction(item.id, item, "Rank2", index, key, value)))}>2</Avatar>
//                             <Avatar sx={{ bgcolor: item.Rank === 3 ? deepOrange[500] : "null" }} onClick={() => ((rankAlignFunction(item.id, item, "Rank3", index, key, value)))}>3</Avatar>
//                             <Avatar sx={{ bgcolor: deepPurple[500] }} onClick={() => (rankAlignFunction(item.id, item,  "NoRank", index, key, value))}>No</Avatar>
//                           </>)}



//                         </Stack>
//                       </CardActions>
//                     </Card>

//                   </div>

//                 ))}
//               </div>


//             </div>
//           ))}
//         </Grid>
//         <Button
//           size="small"
//           variant="contained"
//           color="success"
//           // id={dish.id}
//           sx={{ position: "fixed", marginLeft: "42%", marginTop: "70vh", width: "20%" }}
//           onClick={() => saveRankFunction()}
//         >
//           Save Now
//         </Button>
//       </Grid>
//     </>
//   );
// };

// export default Tab3;

// Tab2.js

import React, { useState, useEffect } from 'react';
import { Grid, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';


const Tab3 = () => {
  const [dishes, setDishes] = useState(JSON.parse(localStorage.getItem("UserWiseList")) || []);
  // const [rank1, setRank1] = useState( JSON.parse(localStorage.getItem("Rank1")) || []);
  // const [rank2, setRank2] = useState(JSON.parse(localStorage.getItem("Rank2")) || []);
  // const [rank3, setRank3] = useState(JSON.parse(localStorage.getItem("Rank3")) || []);
  const [rank1, setRank1] = useState(JSON.parse(localStorage.getItem("Rank1")) || []);
  const [rank2, setRank2] = useState(JSON.parse(localStorage.getItem("Rank2")) || []);
  const [rank3, setRank3] = useState(JSON.parse(localStorage.getItem("Rank3")) || []);
  const [editRank, setEditRank] = useState(false);
  const [userData, setUserData] = useState([])
  const [userDataEdit, setUserDataEdit] = useState("")

  async function EditTeamsCallling(username, userData) {
    console.log(userDataEdit, username)
    if (userDataEdit != username) {
      setUserDataEdit(username);
    }

    setRank1(userData[0]);
    setRank2(userData[1]);
    setRank3(userData[2]);
    setUserData(userData);

  }

  async function rankAlignFunction(dish_id, dish, rankName, index, key, value, currentRank) {
    console.log("current rank");
    console.log(currentRank);
    console.log("user dish");
    console.log(dish);
    console.log("user whole data");
    console.log(userData);
    console.log(`dishid ${dish_id}, userData: ${dish}, rankName: ${rankName},index: ${index}, Key : ${key}`)
    console.log(dish);
    // const updatedDishes = Object.fromEntries(
    //   Object.entries(dishes).map(([key, value]) => {
    //     const updatedValue = value.map(item => {
    //       if (item.id === nex) {
    //         return { ...item, Rank: 50 };
    //       }
    //       return item;
    //     });
    //     return [key, updatedValue];
    //   })
    // );

    // console.log(dishes(["naman",0]));
    // console.log(updatedDishes);
    if (rankName === "Rank1") {
      if (rank2.id === dish_id || rank1.id != dish_id || rank3.id === dish_id) {
        console.log("inside rank 1")
        console.log(dish)
        console.log("old data above")
        setRank1(dish)
        console.log(rank1);

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
        console.log("no rank called");
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


    /*
        if (rankName === "Rank1") {
          if (rank2.id === dish_id || rank1.id != dish_id || rank3.id === dish_id) {
            if (index === 0) {
              if (userData[1].Rank != 1 && userData[2].Rank != 1) {
    
                setRank1(userData[index])
                setUserData(prevUserData => {
                  const updatedUserData = [...prevUserData];
                  updatedUserData[index] = { ...updatedUserData[index], Rank: 1 };
                  return updatedUserData;
                });
    
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
    
            if (index === 1) {
              if (userData[0].Rank != 1 && userData[2].Rank != 1) {
    
                setRank1(userData[index])
                setUserData(prevUserData => {
                  const updatedUserData = [...prevUserData];
                  updatedUserData[index] = { ...updatedUserData[index], Rank: 1 };
                  return updatedUserData;
                });
    
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
    
    
            if (index === 2) {
              if (userData[0].Rank != 1 && userData[1].Rank != 1) {
    
                setRank1(userData[index])
                setUserData(prevUserData => {
                  const updatedUserData = [...prevUserData];
                  updatedUserData[index] = { ...updatedUserData[index], Rank: 1 };
                  return updatedUserData;
                });
    
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
    
    
    
    
          }
        }
    
    
        if (rankName === "Rank2") {
          if (rank1.id === dish_id || rank2.id != dish_id || rank3.id === dish_id) {
            if (index === 0) {
              if (userData[1].Rank != 2 && userData[2].Rank != 2) {
                setRank2(userData[index])
                setUserData(prevUserData => {
                  const updatedUserData = [...prevUserData];
                  updatedUserData[index] = { ...updatedUserData[index], Rank: 2 };
                  return updatedUserData;
                });
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
            if (index === 1) {
              if (userData[0].Rank != 2 && userData[2].Rank != 2) {
                setRank2(userData[index])
                setUserData(prevUserData => {
                  const updatedUserData = [...prevUserData];
                  updatedUserData[index] = { ...updatedUserData[index], Rank: 2 };
                  return updatedUserData;
                });
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
    
            if (index === 2) {
              if (userData[0].Rank != 2 && userData[1].Rank != 2) {
                setRank2(userData[index])
                setUserData(prevUserData => {
                  const updatedUserData = [...prevUserData];
                  updatedUserData[index] = { ...updatedUserData[index], Rank: 2 };
                  return updatedUserData;
                });
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
          }
        }
    
        if (rankName === "Rank3") {
          if (rank1.id === dish_id || rank3.id != dish_id || rank2.id === dish_id) {
            const rank3Stringify = JSON.stringify(dish);
            localStorage.setItem("Rank3", rank3Stringify)
            setRank3(userData[index])
            setUserData(prevUserData => {
              const updatedUserData = [...prevUserData];
              updatedUserData[index] = { ...updatedUserData[index], Rank: 3 };
              return updatedUserData;
            });
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
    
            setRank3([])
            if (index === 0) {
    
              setUserData(prevUserData => {
                const updatedUserData = [...prevUserData];
                updatedUserData[index] = { ...updatedUserData[index], Rank: 0 };
                return updatedUserData;
              });
    
              if (index === 1) {
    
                setUserData(prevUserData => {
                  const updatedUserData = [...prevUserData];
                  updatedUserData[index] = { ...updatedUserData[index], Rank: 0 };
                  return updatedUserData;
                });
              }
              if (index === 2) {
    
                setUserData(prevUserData => {
                  const updatedUserData = [...prevUserData];
                  updatedUserData[index] = { ...updatedUserData[index], Rank: 0 };
                  return updatedUserData;
                });
              }
            }
    
            setRank1([])
            if (index === 0) {
    
              setUserData(prevUserData => {
                const updatedUserData = [...prevUserData];
                updatedUserData[index] = { ...updatedUserData[index], Rank: 0 };
                return updatedUserData;
              });
    
              if (index === 1) {
    
                setUserData(prevUserData => {
                  const updatedUserData = [...prevUserData];
                  updatedUserData[index] = { ...updatedUserData[index], Rank: 0 };
                  return updatedUserData;
                });
              }
              if (index === 2) {
    
                setUserData(prevUserData => {
                  const updatedUserData = [...prevUserData];
                  updatedUserData[index] = { ...updatedUserData[index], Rank: 0 };
                  return updatedUserData;
                });
              }
            }
    
            setRank2([])
            if (index === 0) {
    
              setUserData(prevUserData => {
                const updatedUserData = [...prevUserData];
                updatedUserData[index] = { ...updatedUserData[index], Rank: 0 };
                return updatedUserData;
              });
    
              if (index === 1) {
    
                setUserData(prevUserData => {
                  const updatedUserData = [...prevUserData];
                  updatedUserData[index] = { ...updatedUserData[index], Rank: 0 };
                  return updatedUserData;
                });
              }
              if (index === 2) {
    
                setUserData(prevUserData => {
                  const updatedUserData = [...prevUserData];
                  updatedUserData[index] = { ...updatedUserData[index], Rank: 0 };
                  return updatedUserData;
                  });
                  }
            }
          }
        }
    */

  }
  async function saveRankFunction() {



    const NewUpdateddata = [{ ...rank1, mypoints: 30, Rank: 1 }, { ...rank2, mypoints: 20, Rank: 2 }, { ...rank3, mypoints: 10, Rank: 3 }]
    console.log("new data in array");
    console.log(NewUpdateddata);
    const temp = localStorage.getItem("UserWiseList");
    //     const jsonObject = JSON.parse(temp);
    // console.log("Json object");
    // console.log(jsonObject);




    const updateUserData = (userName, newData) => {
      console.log("old data");
      console.log(dishes);
      if (dishes.hasOwnProperty(userName)) {
        console.log("inside dishe update 910 lines");
        const old = { ...dishes, [userName]: newData }
        // setDishes(prevData => ({
        //   ...prevData,
        //   [userName]: newData
        // }));
        console.log("updated mixed data");
        // localStorage.removeItem("UserWiseList");
        const stringifyRanks = JSON.stringify(old);
        localStorage.setItem("UserWiseList", stringifyRanks)

        console.log(old);
        setDishes(old)
        console.log("new data");
        console.log(dishes);
      }
    };
    // setUserData(prevUserData => ({
    //   ...prevUserData,
    //   [userName]: newData
    // }))
    const user = localStorage.getItem("username");
    updateUserData(user, NewUpdateddata);


    /*
// Extract values and create an array
const dataArray = Object.values(jsonObject);
    // setRank1({ ...rank1, mypoints: 30 }); // Add mypoints field with value 30
    // setRank2({ ...rank2, mypoints: 20 }); // Add mypoints field with value 30
    // setRank3({ ...rank3, mypoints: 10 }); // Add mypoints field with value 30
    const user = "rohan";
    // setEditRank(false);
    const allSelectedRank = [{ ...rank1, mypoints: 30, Rank: 1 }, { ...rank2, mypoints: 20, Rank: 2 }, { ...rank3, mypoints: 10, Rank: 3 }]
    const previousList = JSON.parse(localStorage.getItem("UserWiseList"))
    console.log(allSelectedRank);
    const allSelectedRankByUser = { ...previousList, [user]: allSelectedRank }
*/
    setUserDataEdit("")
  }

  useEffect(() => {
    async function setLocalData() {
      const data = JSON.parse(localStorage.getItem("UserWiseList"));
      console.log(data);
      // setDishes(data);
    }

    setLocalData()

  }, [])
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          {/* {dishes?.map((dish,index) => ( 
{dish}

    ))} */}
          <br />

          {Object.entries(dishes).map(([key, value]) => (
            <div key={key}>
              <br />
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <br />
                <div>  <h3>User Name :&nbsp;{key}</h3></div>
                <Button
                  size="small"
                  variant="contained"

                  color={userDataEdit === key ? "error" : "success"}
                  // id={dish.id}
                  sx={{ width: "20%" }}
                  onClick={() => userDataEdit === key ? (setUserDataEdit("")) : (EditTeamsCallling(key, value))}
                >
                  {userDataEdit === key ? "Cancle" : "Edit Ranks"}

                </Button>
              </div>
              <br />
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
                {userDataEdit === key ? (<>
                  {userData.map((item, index) => (
                    <div key={index}>
                      {/* <div>{item.id}</div>
          <div>{item.dishName}</div>
          <div>{item.description}</div>
          <div> <img src={item.image} /></div>
          Render other properties here */}


                      <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                          sx={{ height: 140 }}
                          image={item.image}
                          alt={item.dishName}
                        />
                        <br />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {item.dishName}
                          </Typography>

                          <Typography gutterBottom variant="h5" component="div">
                            Points : {item.Points}
                          </Typography>
                          <Typography gutterBottom variant="h5" component="div">
                            Card Id : {item.id}
                          </Typography>
                          <Typography gutterBottom variant="h5" component="div">
                            Rank : {item.Rank}
                          </Typography>
                          <Typography gutterBottom variant="h5" component="div">
                            Ranked Points : {item.mypoints}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ height: 70 }}>
                            {item.description}
                          </Typography>
                        </CardContent>
                        <CardActions sx={{ display: "flex", justifyContent: "center" }}>

                          <Stack direction="row" spacing={2}>
                            {/* <Avatar sx={{ bgcolor: rank1.id === item.id ? deepOrange[500] : "null" }} onClick={() => (  editRank ? (rankAlignFunction(item.id, item, "Rank1")):(null))}>1</Avatar>
  <Avatar sx={{ bgcolor: rank2.id === item.id ? deepOrange[500] : "null" }} onClick={() => ( editRank ? (rankAlignFunction(item.id, item, "Rank2")):(null))}>2</Avatar>
  <Avatar sx={{ bgcolor: rank3.id === item.id ? deepOrange[500] : "null" }} onClick={() => (editRank ? (rankAlignFunction(item.id, item, "Rank3")):(null))}>3</Avatar>
  <Avatar sx={{ bgcolor: deepPurple[500] }} onClick={() => (rankAlignFunction(dish.id, dish, "NoRank"))}>No</Avatar> */}

                            <Avatar sx={{ bgcolor: rank1.id === item.id ? deepOrange[500] : "null" }} onClick={() => ((rankAlignFunction(item.id, item, "Rank1", index, key, value, item.Rank)))}>1</Avatar>
                            <Avatar sx={{ bgcolor: rank2.id === item.id ? deepOrange[500] : "null" }} onClick={() => ((rankAlignFunction(item.id, item, "Rank2", index, key, value)))}>2</Avatar>
                            <Avatar sx={{ bgcolor: rank3.id === item.id ? deepOrange[500] : "null" }} onClick={() => ((rankAlignFunction(item.id, item, "Rank3", index, key, value)))}>3</Avatar>
                            <Avatar sx={{ bgcolor: deepPurple[500] }} onClick={() => (rankAlignFunction(item.id, item, "NoRank", index, key, value))}>No</Avatar>




                          </Stack>
                        </CardActions>
                      </Card>

                    </div>

                  ))}</>) : (<> {value.map((item, index) => (
                    <div key={index}>
                      {/* <div>{item.id}</div>
          <div>{item.dishName}</div>
          <div>{item.description}</div>
          <div> <img src={item.image} /></div>
          Render other properties here */}


                      <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                          sx={{ height: 140 }}
                          image={item.image}
                          alt={item.dishName}
                        />
                        <br />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {item.dishName}
                          </Typography>

                          <Typography gutterBottom variant="h5" component="div">
                            Points : {item.Points}
                          </Typography>
                          <Typography gutterBottom variant="h5" component="div">
                            Card Id : {item.id}
                          </Typography>
                          <Typography gutterBottom variant="h5" component="div">
                            Rank : {item.Rank}
                          </Typography>
                          <Typography gutterBottom variant="h5" component="div">
                            Ranked Points : {item.mypoints}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ height: 70 }}>
                            {item.description}
                          </Typography>
                        </CardContent>
                        <CardActions sx={{ display: "flex", justifyContent: "center" }}>

                          <Stack direction="row" spacing={2}>
                            {/* <Avatar sx={{ bgcolor: rank1.id === item.id ? deepOrange[500] : "null" }} onClick={() => (  editRank ? (rankAlignFunction(item.id, item, "Rank1")):(null))}>1</Avatar>
  <Avatar sx={{ bgcolor: rank2.id === item.id ? deepOrange[500] : "null" }} onClick={() => ( editRank ? (rankAlignFunction(item.id, item, "Rank2")):(null))}>2</Avatar>
  <Avatar sx={{ bgcolor: rank3.id === item.id ? deepOrange[500] : "null" }} onClick={() => (editRank ? (rankAlignFunction(item.id, item, "Rank3")):(null))}>3</Avatar>
  <Avatar sx={{ bgcolor: deepPurple[500] }} onClick={() => (rankAlignFunction(dish.id, dish, "NoRank"))}>No</Avatar> */}

                            <Avatar sx={{ bgcolor: item.Rank === 1 ? deepOrange[500] : "null" }} onClick={() => ((rankAlignFunction(item.id, item, "Rank1", index, key, value, item.Rank)))}>1</Avatar>
                            <Avatar sx={{ bgcolor: item.Rank === 2 ? deepOrange[500] : "null" }} onClick={() => ((rankAlignFunction(item.id, item, "Rank2", index, key, value)))}>2</Avatar>
                            <Avatar sx={{ bgcolor: item.Rank === 3 ? deepOrange[500] : "null" }} onClick={() => ((rankAlignFunction(item.id, item, "Rank3", index, key, value)))}>3</Avatar>
                            <Avatar sx={{ bgcolor: deepPurple[500] }} onClick={() => (rankAlignFunction(item.id, item, "NoRank", index, key, value))}>No</Avatar>




                          </Stack>
                        </CardActions>
                      </Card>

                    </div>

                  ))}</>)}
              </div>


            </div>
          ))}
        </Grid>

        {userDataEdit === "" ? (null) : (<> <Button
          size="small"
          variant="contained"
          color="success"
          // id={dish.id}
          sx={{ position: "fixed", marginLeft: "42%", marginTop: "70vh", width: "20%" }}
          onClick={() => saveRankFunction()}
        >
          Save Now
        </Button></>)}

      </Grid>
    </>
  );
};

export default Tab3;
