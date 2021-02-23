import React from 'react'
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="text-center mt-3 ml-4 mr-4" >
            <h1>Welcome to Home</h1>
            <Link to='/families'>
                <button className="btn btn-dark">Go to GoT Families</button>
            </Link>
        </div>
    )
}
