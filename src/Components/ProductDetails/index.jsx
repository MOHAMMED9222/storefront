import { Container, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const Products = () => {
  const { activeCategory, products } = useSelector(state => state.categories);

  // Filter products based on the active category
  const filteredProducts = products.filter(
    product => product.category === activeCategory
  );

  return (
    <>
      <Typography variant="h4">Products</Typography>
      <Container>
        <Grid container spacing={2}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <div>
                  <img src={product.image} alt={product.name} />
                  <Typography>{product.name}</Typography>
                  <Typography>${product.price}</Typography>
                </div>
              </Grid>
            ))
          ) : (
            <Typography>No products available for the selected category.</Typography>
          )}
        </Grid>
      </Container>
    </>
  );
};

export default Products;
