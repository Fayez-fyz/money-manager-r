import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router'





export default function Register() {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [confirmpassword, setconfirmpassword] = useState("")
    const history = useHistory()
    let handleSubmit = async (e) =>{
        e.preventDefault()
        console.log(username,password)
        await axios.post(`https://fyz-money-manager.herokuapp.com//register`,{username,password})
        history.push('/login')
    }
    let handleSignIn = async (e) =>{
      e.preventDefault()
       history.push('/login')
  }
    return (
      <div className='d-flex justify-content-center col-lg-12 py-5'>
        <main className="form-signin text-center">
  <form onSubmit={(e)=>{
      handleSubmit(e)
  }}>
    <img className="mb-4" src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
    <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

    <div className="form-floating">
      <input type="email" className="form-control" value={username} onChange={e =>setusername(e.target.value)} id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" value={password} onChange={e =>setpassword(e.target.value)} id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Password</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" value={confirmpassword} onChange={e =>setconfirmpassword(e.target.value)} id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Confirm Password</label>
    </div>

    <div className="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> Remember me
      </label>
    </div>
    <input className="w-75 btn btn-lg btn-primary" type="submit" value='Sign up'/>
    <button className='btn btn-outline-secondary mt-3' onClick={handleSignIn}>I have already account</button>
    <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
  </form>
</main>
      </div>    
      
    )
}
