import About from "./components/about/about";
import Intro from "./components/intro/intro";
import ProductList from "./components/ProductList/ProductList";
import Contact from "./components/contact/contact";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import { useContext } from "react";



const App = () => {
  const theme= useContext(ThemeContext);
  const darkMode =theme.state.darkMode;
  return (
    <div  style={{backgroundImage: !darkMode ? `url("https://images.pexels.com/photos/9055624/pexels-photo-9055624.jpeg?auto=compress&cs=tinysrgb&w=1200")` : `url("https://images.pexels.com/photos/13014389/pexels-photo-13014389.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load")`,color: darkMode && "black"}} >
        <Toggle />
        <Intro />
        <About/>
        <ProductList />
        <Contact />
    </div>
  )
};

export default App;

