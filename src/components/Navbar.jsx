import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            
            <div className="bg-rose-800  ">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/recipes">Recipes</Link>
                <Link to="/browserecipes">BrowseRecipes</Link>

                
            </div>
        </div>
    )
}
