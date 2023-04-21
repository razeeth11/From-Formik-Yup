import "./App.css";
import TextField from "@mui/material/TextField";
import { Formik, useFormik } from "formik";
import * as yup from 'yup'
import { useState } from "react";

export function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

const loginValidation = yup.object({
      loginEmail: yup.string().required("Required field"),
      loginPassword: yup.string().required("Required field").min(8 , 'password must be atleast 8 characters'),
})

const signValidation = yup.object({
      signEmail: yup.string().required("Required field"),
      signPassword: yup.string().required("Required field").min(8 , 'password must be atleast 8 characters'),
      signCPassword: yup.string().required("Required field").min(8 , 'password must be atleast 8 characters'),
})

function Login() {
  const [state, setState] = useState(true);

  const style = {
    fontSize: "42px",
  };

  const loginFormik = useFormik({
    initialValues: {
      loginEmail: "",
      loginPassword: "",
    },
    validationSchema : loginValidation ,
    onSubmit : (values)=> console.log(values) 
  });
 
  const signFormik = useFormik({
    initialValues: {
      signEmail : "",
      signPassword : "",
      signCPassword : "",
    },
    validationSchema : signValidation ,
    onSubmit : (values)=> {if(values.signPassword == values.signCPassword){
         console.log(values)
    } else {
      alert("Both password must be same")
    } 
    setState(true)
    alert("Signed Up successfully !")
  }
  });

  return (
    <div className="log-in">
      {state ? <h1>Login Form</h1> : <h1>Signp Form</h1>}
      <div className="log-sign">
        <button
          onClick={() => setState(true)}
          className={state ? "style" : null}
        >
          Login
        </button>
        <button
          onClick={() => setState(false)}
          className={!state ? "style" : null}
        >
          Signup
        </button>
      </div>

      {state ? (
        <div>
          <form onSubmit={loginFormik.handleSubmit} className="form-1">
            <TextField
              onChange={loginFormik.handleChange}
              onBlur={loginFormik.handleBlur}
              name="loginEmail"
              sx={style}
              id="outlined-basic"
              placeholder="Username / Email Address"
              variant="outlined"
              helperText={loginFormik.touched.loginEmail && loginFormik.errors.loginEmail ? loginFormik.errors.loginEmail : null}
              error={loginFormik.touched.loginEmail && loginFormik.errors.loginEmail ? loginFormik.errors.loginEmail : null}
            />
            <TextField
              onChange={loginFormik.handleChange}
              onBlur={loginFormik.handleBlur}
              name="loginPassword"
              sx={style}
              id="outlined-basic"
              placeholder="Password"
              variant="outlined"
              helperText={loginFormik.touched.loginPassword && loginFormik.errors.loginPassword ? loginFormik.errors.loginPassword : null}
              error={loginFormik.touched.loginPassword && loginFormik.errors.loginPassword ? loginFormik.errors.loginPassword : null}
            />

            <button className="submit-button" type="submit">
              Login
            </button>
            <small>Forgot password ?</small>
          </form>
          <p className="last">
            Not a Member?{" "}
            <span className="signup-link" onClick={() => setState(false)}>
              Signup now
            </span>
          </p>
        </div>
      ) : null}

      {!state ? (
        <div>
          <form onSubmit={signFormik.handleSubmit} className="form-2">
            <TextField
              onBlur={signFormik.handleBlur}
              onChange={signFormik.handleChange}
              name="signEmail"
              sx={style}
              id="outlined-basic"
              placeholder="Username / Email Address"
              variant="outlined"
              helperText={signFormik.touched.signEmail && signFormik.errors.signEmail ? signFormik.errors.signEmail : null}
              error={signFormik.touched.signEmail && signFormik.errors.signEmail ? signFormik.errors.signEmail : null}
            />
            <TextField
              onBlur={signFormik.handleBlur}
              onChange={signFormik.handleChange}
              name="signPassword"
              sx={style}
              id="outlined-basic"
              placeholder="Password"
              variant="outlined"
              helperText={signFormik.touched.signPassword && signFormik.errors.signPassword ? signFormik.errors.signPassword : null}
              error={signFormik.touched.signPassword && signFormik.errors.signPassword ? signFormik.errors.signPassword : null}
            />
            <TextField
              onBlur={signFormik.handleBlur}
              onChange={signFormik.handleChange}
              name="signCPassword"
              sx={style}
              id="outlined-basic"
              placeholder="Confirm Password"
              variant="outlined"
              helperText={signFormik.touched.signCPassword && signFormik.errors.signCPassword ? signFormik.errors.signCPassword : null}
              error={signFormik.touched.signCPassword && signFormik.errors.signCPassword ? signFormik.errors.signCPassword : null}
            />

            <button className="submit-button" type="submit">
              Sign Up
            </button>
          </form>
          <p className="last">
            Already have an account !
            <span className="login-link" onClick={() => setState(true)}>
              Login
            </span>
          </p>
        </div>
      ) : null}
    </div>
  );
}
