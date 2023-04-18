import './App.css'
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export function App() {

  return (
    <div className="App">
      <Login/>
    </div>
  )
}

function Login(){

  const [state,setState] = useState(true)

  const style = {
    fontSize : "42px"
  }

  return(
    <div className="log-in">
      {state ? <h1>Login Form</h1> : <h1>Signp Form</h1>}
      <div className="log-sign">
      <button onClick={()=> setState(true)} className={state ? "style" : null}>Login</button>
      <button onClick={()=> setState(false)} className={!state ? "style" : null}>Signup</button>
      </div>

      {state ? <div>
      <form className='form-1'>
      <TextField sx={style} id="outlined-basic" placeholder='Username / Email Address' variant="outlined" />
      <TextField sx={style} id="outlined-basic" placeholder='Password' variant="outlined" />

      <button className='submit-button' type='submi'>Login</button>
      <small>Forgot password ?</small>
      </form>
      <p className='last'>Not a Member? <span className='signup-link' onClick={()=> setState(false)}>Signup now</span></p>
      </div> : null}

      {!state ? <div>
      <form className='form-2'>
      <TextField sx={style} id="outlined-basic" placeholder='Username / Email Address' variant="outlined" />
      <TextField sx={style} id="outlined-basic" placeholder='Password' variant="outlined" />
      <TextField sx={style} id="outlined-basic" placeholder='Confirm Password' variant="outlined" />

      <button className='submit-button' type='submit'>Sign Up</button>
      </form>
      <p className='last'>Already have an account !<span className='login-link' onClick={()=> setState(true)}>Login</span></p>
        </div> : null} 

    </div>
  )
}

