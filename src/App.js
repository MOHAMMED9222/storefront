import Categories from "./Components/Categories";
import Header from "./Components/Header";
import Products from "./Components/Products";
import thunk from 'redux-thunk';


function App() {
  return (
    <>
      <Header />
      <Categories />
      <Products />
    </>
  );
}

export default App;