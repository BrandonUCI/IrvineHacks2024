import { BrowserRouter } from "react-router-dom";

import Home from './components/Home'
import BottomNavBar from "./components/BottomNavBar";

const App = () => {
  return (
    <BrowserRouter>
      <div 
        className="relative z-0 bg-white">
          <div className="relative z-0">
            <Home />
          </div>
          <div>
            <BottomNavBar />
          </div>
      </div>
    </BrowserRouter>
  )
}

export default App
