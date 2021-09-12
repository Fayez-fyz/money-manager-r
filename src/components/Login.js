import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";



export default function Login() {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    let history = useHistory()
    let handleSubmit = async (e) =>{
        e.preventDefault()
        try {
          let logindata = await axios.post(`https://fyz-money-manager.herokuapp.com//login`, { username, password })
          console.log(logindata)
          window.localStorage.setItem("app_token",logindata.data.token)
          history.push("/money")
      } catch (error) {
          console.log(error)
      }
    }
    let handleSignUp = async (e) =>{
      e.preventDefault()
       history.push('/register')
  }
  return (
    <div className='d-flex justify-content-center col-lg-12 py-5'>
      <main className="form-signin text-center">
  <form onSubmit={handleSubmit}> 
    <img className="mb-4" src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

    <div className="form-floating">
      <input type="email" className="form-control" value={username} onChange={e =>setusername(e.target.value)} id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" value={password} onChange={e =>setpassword(e.target.value)} id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Password</label>
    </div>

    <div className="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> Remember me
      </label>
    </div>
    <input className="w-75 btn btn-lg btn-primary" type="submit" value='Sign in'/>
    <button className='btn btn-outline-secondary mt-3' onClick={handleSignUp}>I don't have account</button>
    <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
  </form>
</main>

    </div>
  );
}
