import React,{useState,useEffect} from 'react'

const useOnline = () => {
  const [isonline,setIsonline] = useState(true)
useEffect(() => {
  window.addEventListener("online",() =>{
    setIsonline(true)
  })
  window.addEventListener("offline",() =>{
    setIsonline(false)
  })
},[])
return isonline
}

export default useOnline