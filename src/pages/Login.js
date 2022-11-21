import React, { useEffect, useState } from "react";
import Logo from "../assets/elifeLogo.png"

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../services/Firebase";
import { Navigate } from "react-router-dom";



const Login = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = getAuth(app);

    const currentUser = localStorage.getItem("@firebase:user");
    useEffect(()=>{
        if(!!!currentUser){
            <Navigate to="/Panel" replace={true} />
        }
    }
    );
    function handleSignIn(e){
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                localStorage.setItem("@firebase:user", JSON.stringify(user));
                // ...
                console.log("ok!");
                window.location.reload(false);
            })
            .catch((error) => {
                console.log(error.message)
            });
    }

    if(!!currentUser){
        return <Navigate to="/" replace={true} />
    }

    return(
        <div className='container col-sm-6 col-md-6 col-lg-3 mt-5'>
            <main className="form-signin w-100 m-auto">
                <form >
                    <img className="mb-4" src={Logo} alt="Logo" width="125"/>
                    <h1 className="h3 mb-3 fw-normal">Sign in</h1>

                    <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                        onChange={e => setEmail(e.target.value)}/>
                    <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                        onChange={e => setPassword(e.target.value)}/>
                    <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleSignIn}>Sign in</button>
                    <p className="mt-5 mb-3 text-muted">© 2022</p>
                </form>
            </main>
        </div>
    )
}

export default Login;