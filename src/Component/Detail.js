import {useNavigate, useParams} from "react-router";
import '../Style/Detail.css'
export default function Detail(){
    const {id} = useParams();
    const navigate = useNavigate();
    return(
        <div className='right'>
            <div className="menu-admin"></div>
            <div className="detailStudent">
                <button className='btn-back-list-stu' onClick={() => {
                    navigate('/admin/students')
                }}>Back to list
                </button>
                <p>Detail Student {id}</p>
            </div>
        </div>
    )
}