import '../Style/Admin.css'
import '../Style/Home.css'
import {Link} from "react-router-dom";
import {Outlet, useLocation} from "react-router";
export default function Admin(){
    const showAdminPage = useLocation().pathname==='/admin'
    return(
        <div>
            <div className="header">
                <nav>
                    <ul>
                        <li><Link to='/home'>Back to Home</Link></li>
                        <li><Link to='/admin'>List Product</Link></li>
                        <li><Link to='users'>List Users</Link></li>
                        <li><Link to='students'>List Students</Link></li>
                    </ul>
                </nav>
            </div>
            <div className='adminPage'>
                <div className="left">
                    <div className="productPageAdmin">Product</div>
                    <div className="orderPageAdmin" style={{top: '28%'}}>Order</div>
                    <div className="studentPageAdmin" style={{top: '36%'}}>Student</div>
                </div>
                <Outlet/>
                {showAdminPage ?
                    <div className="right">
                        <div className="menu-admin">Menu Admin</div>
                        <div className="listProductPageAdmin">List Product</div>
                    </div>
                : null}
            </div>
        </div>
    
    )
}