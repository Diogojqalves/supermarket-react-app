import { createRoot } from "react-dom/client";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import About from "./About.js";
import Products from "./Products.js";
import ProductDetails from "./ProductDetails.js";
import Cart from "./Cart.js";
import { Provider } from "react-redux";
import { store } from "./store.js";

function App() {
  /* TODO: wrap App with Provider */

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/products">
              <Products />
            </Route>
            <Route path="/products/:id">
              <ProductDetails />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

createRoot(document.querySelector("#react-root")).render(<App />);
