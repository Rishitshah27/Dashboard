import { productInputs, userInputs } from "./formSource";
import Home from "./Pages/home/Home";
import List from "./Pages/list/List";
import Login from "./Pages/login/Login";
import New from "./Pages/new/New";
import Single from "./Pages/single/Single";
import{BrowserRouter,Routes,Route} from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ?"app dark":"app"}>
       <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
          </Route>
          <Route path="users">
            <Route index element={<List/>}/>
            <Route path=":userId" element={<Single/>}/>
            <Route path="new" element={<New  inputs={userInputs}  title="Add new User"/>}/>
          </Route>
          <Route path="products">
            <Route index element={<List/>}/>
            <Route path=":productId" element={<Single/>}/>
            <Route path="new" element={<New inputs={productInputs} title="Add new product"/>}/>
          </Route>
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
