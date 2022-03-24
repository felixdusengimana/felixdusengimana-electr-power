import Header from "./component/header/Header";
import "./index.css"
import Welcome from "./pages/Welcome";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Buying from "./pages/Buying";
import CheckBalance from "./pages/CheckBalance";
import TokenCheck from "./pages/TokenCheck";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/buy" element={<Buying/>}/>
        <Route path="/checkbalance" element={<CheckBalance/>}/>
        <Route path="/checktoken" element={<TokenCheck/>}/>
      </Routes>
    </Router>
  );
}

export default App;
