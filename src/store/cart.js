const initialState = [];

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD':
      return [...state, payload];
    case 'REMOVE':
      return state.filter(item => item.name !== payload.name);
    default:
      return state;
  }
}

export default cartReducer;