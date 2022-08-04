import About from "./components/about/about";
import Intro from "./components/intro/intro";
import ProductList from "./components/ProductList/ProductList";





const App = () => {
  return (
    <div  style={{backgroundImage: `url("https://images.pexels.com/photos/9055624/pexels-photo-9055624.jpeg?auto=compress&cs=tinysrgb&w=1200")`}} >
        <Intro  />
        <About/>
        <ProductList />
    </div>
  )
};

export default App;

