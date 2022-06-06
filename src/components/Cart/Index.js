import React from 'react'
import Box from '@mui/material/Box'
import CartItem from './CartItem'
import CheckoutBar from './CheckoutBar'

export default function Index() {
    return (
        <>
            <Box sx={{mb:15}}>
                {
                    [...new Set(cart.map(JSON.stringify))].map(JSON.parse)?.map(
                        (item)=><CartItem key={item.id} item={item}/>
                    )
                }
            </Box>
            <CheckoutBar/>
        </>
        )
  }
  
  
  const item1={
      "id":1,
      "name":"itema",
      "desc":"itema is good",
      "price":2.99,
      "img":"https://i5.walmartimages.com/asr/0b82849d-00a9-4f3b-b472-c4b8001ba154.d9c5856a2f051f82d511ad61dc6068f9.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      "category_id":1
    }
    const item2={
      "id":2,
      "name":"itemB",
      "desc":"itemB is good",
      "price":12.99,
      "img":"https://play-lh.googleusercontent.com/tSYCIbNjUMwhtXLN8nZUcgGGRECdT1jvF99hN2iYVzkz8c1QPLFVFfh4sxl4_RTmZrnWxLJrPchHFg=w240-h480-rw",
      "category_id":2
    }
    const item3={
      "id":3,
      "name":"itemC",
      "desc":"itemC is good",
      "price":200.00,
      "img":"https://images-na.ssl-images-amazon.com/images/I/51BTlRykvfL._SY498_BO1,204,203,200_.jpg",
      "category_id":1
    }
    
    const cart=[item1, item2, item2, item2, item3, item3]