import "./App.css";
import Login from "./Pages/Login";
import Quora from "./Pages/Quora";
// import ErrorPage from "./Pages/Error";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
         <Route path="/" element= {<Quora/>}/>
         <Route path="/login" element={<Login/>}/>
         {/* error handling page */}
       </Routes>
      </Router>
    </div>
  );
}

export default App;
