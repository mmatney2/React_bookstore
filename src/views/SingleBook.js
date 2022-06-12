import { Typography } from "@mui/material";
// import { useContext, useEffect, useState } from "react";
import BookDisplayCard from "../components/BookDisplayCard";
import Box from '@mui/material/Box';
import Avatar from "@mui/material/Avatar";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import {Navigate} from 'react-router-dom'

export default function SingleBook() {

return (
<>
<Box>
  <Typography variant="h4">
    Book Close-up
    </Typography>
      <BookDisplayCard/>
    </Box>
    </>
  
)
}
