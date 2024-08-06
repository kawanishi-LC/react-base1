import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import CreateThred from "./CreateThred";
import Thred from "./Thred";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/threads/new"} element={<CreateThred />} />
          <Route path={"/threads/:thread_id"} element={<Thred />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
