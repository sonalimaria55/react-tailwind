import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Recipes from'./components/Recipes.jsx'
import About from './components/About.jsx'
import BrowseRecipes from './components/BrowseRecipes.jsx'

export default function App() {
  return (
    <>

    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/recipes' element={<Recipes/>}/>
      <Route path='/browserecipes' element={<BrowseRecipes/>}/>
      
    </Routes>
    </BrowserRouter>
    

</>
  )
}
