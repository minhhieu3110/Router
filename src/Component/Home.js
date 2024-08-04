import '../Style/Home.css'
import {Outlet, useLocation} from "react-router";
import {Link} from "react-router-dom";

export default function Home() {
    const showListProduct = useLocation().pathname==='/home'
    const location = useLocation().state
    return (
        <div>
            <div className="header">
                <nav>
                    <ul>
                        {/*<li>Hello {location.name}</li>*/}
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='orders'>Orders</Link></li>
                        <li><Link to='/admin'>Admin</Link></li>
                        <li><Link to='/'>Logout</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="logo-banner">
                <div className="logo">Logo</div>
                <div className="banner">Banner</div>
            </div>
            <div className="nav">
                <div className="left">
                    <div className="home">Home</div>
                    <div className="product">Product</div>
                </div>
                <div className="right">
                    <div className="order">Order</div>
                </div>
            </div>
            <Outlet/>
            {showListProduct ?
                <div className="mainProduct">
                    <div className="sideBar">Side Bar</div>
                    <div className="listProduct">List Product</div>
                </div>
                : null}
        </div>
    )
}