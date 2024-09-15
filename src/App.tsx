import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Terms from "./Terms";
import Privacy from "./Privacy";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </div>
  );
}

export default App;
