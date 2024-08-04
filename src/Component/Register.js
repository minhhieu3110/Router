import '../Style/Login-Register.css'
import {useState} from "react";
import {useNavigate} from "react-router";
import axios from "axios";
export default function Register() {
    const [dataRegister, setDataRegister] = useState({username: "", password: ""})
    const [notice, setNotice] = useState('')
    const navigate = useNavigate();
    const register = async () => {
        try{
            await axios.post('http://localhost:4000/register', dataRegister).then((res) => {
                console.log(res.data)
                setNotice('Register Success')
            })
        }catch {
            setNotice('Register Unsuccessful')
        }
    }
    return (
        <center>
            <div className="registerForm">
                <h2>Register</h2>
                <br/>
                <input onChange={(e) =>{
                    setDataRegister({...dataRegister, username: e.target.value})
                }} placeholder={'Enter Username'}/>
                <br/><br/>
                <input type="password" onChange={(e)=>{
                    setDataRegister({...dataRegister,password: e.target.value})
                }} placeholder={'Enter Password'}/>
                <br/>
                <button onClick={register}>Register</button>
                <button onClick={()=>{navigate('/')}}>Login</button>
                <br/>
                {notice && <center><p style={{color:'red'}}>{notice}</p></center>}
            </div>
        </center>
    )
}