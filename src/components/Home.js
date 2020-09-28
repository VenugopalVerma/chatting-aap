import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
    <div className="home">
        This is home<br/>
        <Link to="/login">
        <button onClick={() => {console.log('clicked')}}>Sign In</button>
        </Link>
    </div>
    )
}

export default Home;