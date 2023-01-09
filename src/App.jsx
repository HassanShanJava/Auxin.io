import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Chart from "./components/Chart";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chart" element={<Chart />} />
      </Routes>
      
    </div>
  );
}

export default App;
