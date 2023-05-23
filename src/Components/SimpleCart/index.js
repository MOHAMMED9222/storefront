import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../store/actions";
import { Box, IconButton, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const SimpleCart = () => {

  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "md",

        }}
      >
        {
          cart.map((item, idx) => {
            return (
              <Box
                key={`cart-${idx}`}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100px",
                }}
              >
                <Typography>{item.name}</Typography>
                <IconButton>
                  <DeleteIcon fontSize="small" onClick={() => dispatch(remove(item))} />
                </IconButton>
              </Box>
            )
          }
          )
        }
      </Box>
    </>
  );
};

export default SimpleCart;