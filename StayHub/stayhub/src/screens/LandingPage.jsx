import React from "react";
import { useNavigate} from 'react-router-dom'

function LandingPage(){
    const navigate = useNavigate();

    return (
        <div className="landing-container ">
            <header className="landing-header">
                <h1>Welcome To StayHub</h1>
                <button className="login-button" onClick={()=>navigate('/login')}>
                    Login
                </button>
                <main className="landing-main">
                    <p>Your perfect PG accomodation is just a click away.</p>
                </main>
            </header>
        </div>
    )
}

export default LandingPage