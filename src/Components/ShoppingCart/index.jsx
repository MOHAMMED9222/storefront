import { useState } from "react";
import { Typography, Container, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, TextField, Button, Box } from '@mui/material';

const ShoppingCart = () => {
  const [address, setAddress] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const items = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 15 },
    { id: 3, name: "Product 3", price: 20 },
  ];

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="h5" gutterBottom>
        Total: ${total}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Billing/Shipping Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Credit Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <Box mt={2}>
          <Button type="submit" variant="contained" color="primary">
            Submit Order
          </Button>
        </Box>
      </form>
      {isSubmitted && (
        <Typography variant="h6" color="success" mt={2}>
          Thank you for your purchase!
        </Typography>
      )}
    </Container>
  );
};

export default ShoppingCart;
