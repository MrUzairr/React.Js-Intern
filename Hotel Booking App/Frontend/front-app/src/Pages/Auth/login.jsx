import React,{useState,useEffect} from 'react'
import Loader from "../../Components/Loader";
import Error from "../../Components/Error";
import { Link } from 'react-router-dom';

function Signup() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  async function handleLogin(){
      const user = {
        email,
        password,
      }
      try {
        setLoading(true)
        const response =await fetch('http://localhost:5000/api/users/login',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });
        const result = await response.json();
        setLoading(false)
        localStorage.setItem('currentUser',JSON.stringify(result));
        window.location.href = '/';

      } catch (error) {
        console.log(error)
        setLoading(false)
        setError(true)

      }

  }
  return (
    <div>
      {loading && (<Loader/>)}
      <div className='login row justify-content-center mt-5'>
        <div className='col-md-5 mt-5'>
          {error && (<Error message='Invalid Credentials'/>)}
            <div className='bs  text-center'>
              <h1 className='registerName'>Login</h1>
              <input type="email" className='form-control auth' placeholder='email' value={email} onChange={(e)=>{
                setEmail(e.target.value)
              }} />
              <input type="password" className='form-control auth' placeholder='password' value={password} onChange={(e)=>{
                setPassword(e.target.value)
              }}/>
              <button className='btn btn-primary mt-3 w-50' onClick={handleLogin}>Login</button>
              <p style={{textAlign:'left'}} className='mt-3'><Link to='/signup' style={{color:'#000'}}>Click here to <b>Register</b></Link></p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
