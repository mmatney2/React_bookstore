import { Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import BookDisplayCard from "../components/BookDisplayCard";
import Box from '@mui/material/Box'
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";

// export default function SingleBook() {
//     const [book, setbook]=useState()

//   return (
//   <>
//     <Typography variant='h3'>{book.title}</Typography>
//     {/* <Box sx={{display:'flex', justifyContent:"center", alignContent:"center", width:'100%', mb:2}}>
//     </Box> */}

//     <BookDisplayCard id={book?.id}/>
//   </>
//   )
// }

export default function SingleBook() {
  const { book } = useContext(AppContext);
 

  return (
    <>
      <Typography variant="h3"></Typography>
      <BookDisplayCard id={book?.id}/>
 
    </>
  );
}

// export default function Logout() {
//   const {setUser} = useContext(AppContext)
//   useEffect(
//       ()=>{
//           setUser({})
//       },[setUser]
//   )

// return (
//   <>
//       <Navigate to="/login"/>
//   </>
// )
// }

