import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router";
import '../Style/Login-Register.css'
export default function Login() {
    const [account, setAccount] = useState([]);
    const [dataLogin, setDataLogin] = useState({username: "", password: ""});
    const [error, setError] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:4000/account').then((res) => {
            setAccount(res.data)
        })
    })
    const clickLogin = () => {
        const verifyAccount = account.find((acc) => acc.username === dataLogin.username && acc.password === dataLogin.password);
        const dataSender = {
            name: `${dataLogin.username}`
        }
        verifyAccount ? navigate('/home', {state: dataSender}) : setError('Username & Password  Invalid')
    }
    return (
        <center>
            <div className="loginForm">
                <h2>Login</h2><br/>
                <input onChange={(e) => {
                    setDataLogin({...dataLogin, username: e.target.value})
                }} placeholder={'Enter Username'}/>
                <br/><br/>
                <input type="password" onChange={(e) => {
                    setDataLogin({...dataLogin, password: e.target.value})
                }} placeholder={'Enter Password'}/>
                <br/>
                <button onClick={clickLogin}>Login</button>
                <button onClick={() => {
                    navigate('/register')
                }}>Register
                </button>
                <br/>
                {error && <center><p style={{color: 'red', fontSize: '15px'}}>{error}</p></center>}
            </div>
        </center>
    )
}