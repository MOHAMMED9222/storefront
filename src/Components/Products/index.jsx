import { useSelector, useDispatch } from "react-redux";
import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { add } from "../../store/actions";

const Products = () => {
  const { products } = useSelector(state => state);
  const { activeCategory } = useSelector(state => state.categories)
  const dispatch = useDispatch();
  return (
    <>
      {
        activeCategory && <h2>{activeCategory.displayName}</h2>
      }
      {
        activeCategory && <p>{activeCategory.description}</p>
      }

      {activeCategory && <Container maxWidth="md">
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item key={product.name} xs={12} sm={6} md={4}>
              <Card >
                <CardMedia
                  component="img"
                  image={`https://source.unsplash.com/random?${product.name}`}
                  title={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
    
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => dispatch(add(product))}
                  >
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>}
    </>
  )

};

  export default Products;