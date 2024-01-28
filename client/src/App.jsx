import { BrowserRouter } from "react-router-dom";
import Orderpage from './components/Order'
import Home from './components/Home'
import BottomNavBar from "./components/BottomNavBar";
import OrderPage from "./components/Order";

const App = () => {
  return (
    <BrowserRouter>
      <div 
        className="relative z-0 bg-white">
          <div className="relative z-0">
            <OrderPage />
          </div>
          <div>
            <BottomNavBar />
          </div>
      </div>
    </BrowserRouter>
  )
}

export default App
