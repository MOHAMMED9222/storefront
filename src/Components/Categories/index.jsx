import { ButtonGroup, Button, Container } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { set } from "../../store/actions";
import SimpleCart from "../SimpleCart";


const Categories = () => {
  const { categories } = useSelector(state => state.categories);
  const dispatch = useDispatch();
  return (
    <>
      <h3>Browse Categories</h3>
      <Container>
      <ButtonGroup variant="text" aria-label="category button group">
        {
          categories.map((category, idx) => {
            return (
              <Button 
              key={`categories-${idx}`} 
              onClick={() => dispatch(set(category))}
              >
                {category.displayName}
              </Button>
            )
          }
         )
        }

      </ButtonGroup>
        <SimpleCart />
      </Container>
    </>
  )
};

export default Categories;