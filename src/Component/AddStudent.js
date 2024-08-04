import '../Style/AddStudent.css'
import {useNavigate} from "react-router";

export default function AddStudent() {
    const navigate = useNavigate();
    return (
        <div className='right'>
            <div className="menu-admin"></div>
            <div className="addStudent">
                <button className='btn-back-list-stu' onClick={() => {
                    navigate('/admin/students')
                }}>Back to list
                </button>
                Add Student
            </div>
        </div>
    )
}