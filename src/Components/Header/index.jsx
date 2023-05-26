import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Header = () => {
  const { cart } = useSelector(state => state);
  return (
    <>
      <Router>
        <Grid container p={2}>
          <Grid item xs>
            <Typography variant="h4">Our Store</Typography>
          </Grid>
          <Grid item xs style={{ textAlign: 'right', alignSelf: 'center' }}>
            <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}> 
              <Typography>CART ({cart.length})</Typography>
            </Link>
          </Grid>
        </Grid>
      </Router>
    </>
  );
};

export default Header;
