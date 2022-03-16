//Import dependencies
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Import components
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Code from "./pages/Code";
function App() {
  return (
    <>
      {" "}
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/iceberg" element={<Homepage />} />
          <Route path="/code" element={<Code />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
