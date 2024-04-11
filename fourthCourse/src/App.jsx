import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navbar } from './components/Navbar'
import { Card } from './components/Card'
import './App.css'
import Filter from './components/Filter'
import { Cards } from './components/Cards'
import { apiUrl,filterData } from './data'
import { Spinner } from './components/Spinner'
import {toast} from "react-toastify"
function App() {
  const [courses, setCourses] = useState(null);

  const[loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    //till out data is fetching we have to put set loading is true mens that loader roller will keep rolling 

    try {
      let response =  await fetch(apiUrl);
      let ouput = await response.json();

      //output has data of card details 
      setCourses(ouput.data);
      
      
    } 

    catch (error) {
      toast.error("error in some network")
    }

    setLoading(false)
  }

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className="min-h-screen flex-col flex bg-bgDark2">
      <div>
      <Navbar/>
      </div>
    <div className="bg-bgDark2">
      <Filter filterData={filterData} />
    </div>
    <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
     {
      loading?(<Spinner/>):(<Cards courses={courses}/>)
     }

     {/*  this lines means that if loading is true then display spinner else display cards*/} 
    </div>
    </div>
  )
}

export default App
