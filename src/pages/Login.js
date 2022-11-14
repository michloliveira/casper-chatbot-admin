import React from "react";
import Logo from "../assets/elifeLogo.png"
const Login = () =>{
    return(
        <div className='container col-sm-6 col-md-6 col-lg-3 mt-5'>
            <main className="form-signin w-100 m-auto">
                <form >
                    <img className="mb-4" src={Logo} alt="Logo" width="125"/>
                    <h1 className="h3 mb-3 fw-normal">Sign in</h1>

                    <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">© 2022</p>
                </form>
            </main>
        </div>
    )
}

export default Login;