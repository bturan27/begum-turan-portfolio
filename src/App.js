import About from "./components/about/about";
import Intro from "./components/intro/intro";
import ProductList from "./components/ProductList/ProductList";
const App = () => {
  return (
    <div>
        <Intro/>
        <About />
        <ProductList />
    </div>
  )
};

export default App;