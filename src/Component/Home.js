import '../Style/Home.css'
import {Outlet} from "react-router";
export default function Home(){
    return (
        <div>
            <div className="header">
            
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
            <div className="main">
                <div className="sideBar">Side Bar</div>
                <div className="listProduct">List Product</div>
                <Outlet/>
            </div>
        </div>
    )
}