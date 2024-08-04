import '../Style/Students.css'
import {Outlet, useLocation, useNavigate, useNavigation} from "react-router";

export default function Students() {
    const navigate = useNavigate();
    const showListStu = useLocation().pathname === '/admin/students'
    return (
        <>
            <Outlet/>
            {showListStu ?
                <div className="right">
                    <div className="menu-admin">Menu Admin</div>
                    <div className="listStudentsPageAdmin">
                        <button className='btn-add-stu' onClick={() => navigate('add')}>Add</button>
                        List Students
                    </div>
                </div>
            :null}
        </>
    )
}