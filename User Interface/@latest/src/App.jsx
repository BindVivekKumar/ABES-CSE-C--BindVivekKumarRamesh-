import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./pages/Navbar";


import Home from "./pages/Home";
import About from "./pages/About";

import AddUser from "./Component/AddUser";
import SearchById from "./Component/SearchById";
import EditUser from "./Component/EditUser";
import ViewUser from "./Component/ViewUser";
import DeleteUser from "./Component/DeleteUser";

function App() {
  return (
    <BrowserRouter>

      
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/searchbyid" element={<SearchById />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/edituser/:id" element={<EditUser />} />
        <Route path="/viewuser" element={<ViewUser />} />
        <Route path="/deleteuser/:id" element={<DeleteUser />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;