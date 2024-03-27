import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { RotatingLines } from 'react-loader-spinner';
import {FIREBASE_AUTH} from '../services/firebaseConfig.js'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithGooglePopup } from '../services/googleAuth.js'
import CircularProgress from '@mui/material/CircularProgress';
function App() {
  const auth = FIREBASE_AUTH;
  const [email, setEmail] = useState <any>(null);
  const [password, setPassword] = useState <any>(null);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState('password');
  const handleVisibility: any =()=>{
    setVisible(!visible)
    if(type === 'password'){
      setType('text');
    }else{
      setType('password')
    }
  }
  const handleSignIn = async () => {
    const res = await signInWithGooglePopup();
    console.log(res);
    
  }
  function handleSubmit (e : any){
    e.preventDefault();
    if(email && password) {
      setLoading(true);
    }
    createUserWithEmailAndPassword(auth, email,password)
    .then(()=>{
      setEmail('')
      setPassword('');
      alert("Welcome")
    })
    .catch(
      e => alert("Error occured during signup:" + e.message)
    )
    .finally(() => {
      setLoading(false)
    } 
    )
  }
  return (
   <div className='container flex  justify-center items-center h-screen'>
     <div className='lg:w-1/2 shadow-lg border-t-2 py-28 flex items-center flex-col'>
      <h1 className='mb-8 font-bold text-5xl text-blue-400'>Create Account</h1>
      <form onSubmit={handleSubmit} className='w-1/2'>
        <div className='flex flex-col'>
          <label htmlFor="">
            Email
          </label>
          <input type="text" className='border border-slate-500 ps-2 mt-2 focus:outline-none' placeholder='eg. admin123@gmail.com'
          onChange={(e) => setEmail(e.target.value )}
          value={email}/>
          <p className='font-thin'>Enter a valid email please</p>
        </div>
        <div className='flex flex-col mt-2'>
          <label htmlFor="">
            Password
          </label>
          <div className='border border-slate-500 flex items-center justify-between px-2 mt-2 '>
            <input type={type} className=' focus:outline-none' onChange={(e) => setPassword(e.target.value)} value={password}/>
           {visible? ( 
           <VisibilityIcon className='hover:cursor-pointer' onClick={handleVisibility}/>
           ):(
            <VisibilityOffIcon className='hover:cursor-pointer' onClick={handleVisibility}/>
           )}
          </div>
         
          <p className='font-thin'>
            Must contain at least 8 characters
          </p>
        </div>
        <button className='bg-black text-white px-2 py-1 w-full mt-4'>
          Sign Up
        </button>
        </form>
        <p className='font-thin text-center'>or</p>
        <button className='bg-black text-white px-2 py-1  w-1/2' onClick={handleSignIn}>
          Sign in with Google
        </button>
        <p className='font-thin mt-8 w-1/2'>
          By sign up via email you accept <span className='font-semibold underline'>Terms of service</span> and <span className='font-semibold underline'>Privacy Policy</span>
        </p>
    
      {
        loading && (
          <CircularProgress />
        )
      }
     </div>
   </div>
  )
}

export default App
