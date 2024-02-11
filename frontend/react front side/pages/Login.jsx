import React from "react";
import {Link} from "react-router-dom"
const Login=()=>{
//signin or login
    return <div>
        <form className="">
            <span></span>
            <h2>Sign in to twitter</h2>
            <input type="text" ref={UserEmail}/>
            <input type="button" value="Next" />
            <input type="button" value="Forgot password" />
            <div className="signup">
                <p>Don't have account?</p>  
                <Link to="/signup"></Link>
            </div>
        </form>
    </div>
}

function submitForm(){

}

export default Login