import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import CreateThread from "./CreateThread";
import Thread from "./Thread";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/threads/new"} element={<CreateThread />} />
          <Route path={"/threads/:thread_id"} element={<Thread />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
