import React,{useState} from 'react'
import Loader from "../../Components/Loader";
import Error from "../../Components/Error";
import Success from '../../Components/Success';
import { Link } from 'react-router-dom';

function Signup() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [cpassword,setCPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success,setSuccess] = useState(false);


    async function handleRegister(){
      if(password == cpassword){
        const user = {
          name,
          email,
          password,
          cpassword
        }
        try {
          setLoading(true);
          const response = await fetch("http://localhost:5000/api/users/register", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
          });
    
          const result = await response.json();
          console.log(result)
          setLoading(false);
          setSuccess(true)
          
          setName('');
          setEmail('');
          setPassword('');
          setCPassword('');

        } catch (error) {
          console.log(error)
          setLoading(false);
          setError(true)
        }
      }
      else{
        alert('Passwords are not matched');
      }
    }
  return (
    <div>
      {loading && (<Loader/>)}
      {error && (<Error message={'Something went wrong, please try again later!'}/>)}
      <div className='login row justify-content-center mt-5'>
        <div className='col-md-5 mt-5'>
      {success && (<Success message={'Registration Successful'}/>)}
            <div className='bs  text-center'>
              <h1 className='registerName'>Register</h1>
              <input type="text" className='form-control auth' placeholder='name' value={name} onChange={(e)=>{
                setName(e.target.value)
              }} />
              <input type="email" className='form-control auth' placeholder='email' value={email} onChange={(e)=>{
                setEmail(e.target.value)
              }} />
              <input type="password" className='form-control auth' placeholder='password' value={password} onChange={(e)=>{
                setPassword(e.target.value)
              }}/>
              <input type="password" className='form-control auth' placeholder='confirm password' value={cpassword} onChange={(e)=>{
                setCPassword(e.target.value)
              }} />
              <button className='btn btn-primary mt-3 w-50' onClick={handleRegister}>Register</button>
              <p style={{textAlign:'left'}} className='mt-3'><Link to='/login' style={{color:'#000'}}>Click here to <b>Login</b></Link></p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
