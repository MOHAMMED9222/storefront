import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import productReducer from './products';
import categoryReducer from './categories/categories';
import cartReducer from './cart';


const reducers = combineReducers({
  categories: categoryReducer,
  products: productReducer,
  cart: cartReducer,
});

const store = () => createStore(reducers, composeWithDevTools());

export default store();