import Navbar from "./layout/Navbar";
import Home from "./pages/Home";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import QueenDom from "./pages/QueenDom";
import Ipada from "./pages/Ipada";




const App = () => {
  return (
<>



<Router>
  <Routes>
  <Route  path="/" element={<Home />}>

  </Route>

  <Route path="/queendom" element={<QueenDom />} />
  <Route path="/ipada" element={<Ipada />} />

  </Routes>
</Router>

  



</>
   
  );
};

export default App;
