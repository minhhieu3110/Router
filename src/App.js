import './App.css';
import {Route, Routes} from "react-router";
import Home from "./Component/Home";
import Order from "./Component/Order";
import Admin from "./Component/Admin";
import Users from "./Component/Users";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Students from "./Component/Students";
import AddStudent from "./Component/AddStudent";
import Detail from "./Component/Detail";

function App() {
    return (
        <Routes>
            <Route path={''} element={<Login/>}/>
            <Route path={'register'} element={<Register/>}/>
            <Route path={'home'} element={<Home/>}>
                <Route path={'orders'} element={<Order/>}/>
            </Route>
            <Route path={'admin'} element={<Admin/>}>
                <Route path={'users'} element={<Users/>}/>
                <Route path={'students'} element={<Students/>}>
                    <Route path={'add'} element={<AddStudent/>}/>
                    <Route path={'detail/:id'} element={<Detail/>}/>
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
