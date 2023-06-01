import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";


const NewsLayout = () => {
  const[result, setResult] = useState({})

  useEffect(() => {
    
  })

  return (
    <div>
        <Outlet />
    </div>
  )
}

export default NewsLayout