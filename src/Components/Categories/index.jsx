import { ButtonGroup, Button } from "@mui/material";
import { connect } from "react-redux";
import { set } from "../../store/reducer";


const Categories = ({ categories, set }) => {
  return (
    <>
      <h3>Browse Categories</h3>
      <ButtonGroup variant="text" aria-label="category button group">
        {
          categories.map((category, idx) => {
            return (
              <Button 
              key={`categories-${idx}`} 
              onClick={() => set(category)}
              >
                {category.displayName}
              </Button>
            )
          }
         )
        }
  

      </ButtonGroup>
    </>
  )
};

const mapStateToProps = ({ store }) => {
return {
  categories: store.categories,
}
};

const mapDispatchToProps = {
  set,
}


export default connect(mapStateToProps, mapDispatchToProps)(Categories);