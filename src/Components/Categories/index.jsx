import { ButtonGroup, Button, Container } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { set } from "../../store/actions";
import SimpleCart from "../SimpleCart";
import { useEffect } from 'react'; // Import useEffect hook

const Categories = () => {
  const { categories, activeCategory } = useSelector(state => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch initial "activate" action on component mount
    if (categories.length > 0 && !activeCategory) {
      dispatch(set(categories[0]));
    }
  }, [categories, activeCategory, dispatch]);

  const handleCategoryClick = (category) => {
    dispatch(set(category)); // Dispatch "activate" action on category click
  };

  return (
    <>
      <h3>Browse Categories</h3>
      <Container>
        <ButtonGroup variant="text" aria-label="category button group">
          {categories.map((category, idx) => (
            <Button
              key={`categories-${idx}`}
              onClick={() => handleCategoryClick(category)}
              disabled={activeCategory === category}
            >
              {category.displayName}
            </Button>
          ))}
        </ButtonGroup>
        <SimpleCart />
      </Container>
    </>
  );
};

export default Categories;
