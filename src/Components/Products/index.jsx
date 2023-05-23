import { Card } from "@mui/material";
import { connect } from "react-redux";


const Products = ({ products, activeCategory }) => {
  return (
    <>
      {
        activeCategory && <h2>{activeCategory.displayName}</h2>
      }

      {
      activeCategory && products.map((product, idx) => (
        <Card key={`products-${idx}`}>
          
          {product.name}
        
        </Card>
      ))
      }
    </>
  )
}

const mapStateToProps = ({ store }) => {
  return {
    categories: store.categories,
    activeCategory: store.activeCategory,
    products: store.products,
  }
  };

  export default connect(mapStateToProps)(Products);