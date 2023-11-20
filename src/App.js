import logo from './logo.svg';
import './App.css';
import Demo from "./Demo";
import DemoClass from "./DemoClass";
import Life from "./Life";
import ListStudent from "./CRUD/ListStudent";
import CreateStudent from "./CRUD/CreateStudent";
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import EditStudent from "./CRUD/EditStudent";


function App() {
  return (
      <>
          <Routes>
              <Route path={"/"} element={<Home></Home>}>
                  <Route path={"/list"} element={<ListStudent></ListStudent>}></Route>
                  <Route path={"/create"} element={<CreateStudent></CreateStudent>}></Route>
                  <Route path={"/edit/:id"} element={<EditStudent></EditStudent>}></Route>
              </Route>
          </Routes>
          {/*<Demo/>*/}
          {/*<DemoClass/>*/}
          {/*<Life/>*/}
          {/*<ListStudent/>*/}
          {/*<CreateStudent/>*/}
      </>
  );
}

export default App;
