import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard({children, variant, ...props}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/07/goodnight.jpg?auto=format&q=60&fit=max&w=930"
          alt="goodnight goodnight"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Goodnight, Goodnight
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A book about the power of going to sleep on time
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
