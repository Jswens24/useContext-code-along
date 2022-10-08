import { useState, useContext, createContext } from 'react';
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

const UserContext = createContext();
const CartContext = createContext();


function App() {
  const [user, setUser] = useState('');
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <CartContext.Provider value={{ cart, setCart }}>
          <Header />
          <Main />
        </CartContext.Provider>
      </UserContext.Provider>
    </div>
  );
}
export default App;
export { UserContext, CartContext };