import { useSelector } from "react-redux";
import { Typography, Container, Grid } from '@mui/material';

const Cart = () => {
  const cart = useSelector(state => state.cart);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="subtitle1">Your cart is empty.</Typography>
      ) : (
        <Grid container spacing={2}>
          {cart.map((item, index) => (
            <Grid item xs={12} key={index}>
              <Typography>{item.name}</Typography>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Cart;
