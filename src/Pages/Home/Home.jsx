import React, { useState } from 'react'
import "./Home.css"
import Header from '../../Comonents/Header/Header'
import ExploreMenu from '../../Comonents/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Comonents/FoodDisplay/FoodDisplay'
function Home() {
const[category,setCategory]=useState("All")


  return (
    <>
    <Header/>
    <ExploreMenu category={category} setCategory={setCategory}/>
    <FoodDisplay category={category}/>
    </>
  )
}

export default Home