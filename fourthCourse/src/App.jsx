import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navbar } from './components/Navbar'
import { Card } from './components/Card'
import './App.css'
import Filter from './components/Filter'
import { Cards } from './components/Cards'
import { apiUrl,filterData } from './data.js'
import { Spinner } from './components/Spinner'
import {toast} from "react-toastify"
function App() {
  const [courses, setCourses] = useState([]);

  const[loading, setLoading] = useState(true);

  const[category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    //till out data is fetching we have to put set loading is true mens that loader roller will keep rolling 

    try {
      let response =  await fetch(apiUrl);
      let output = await response.json();

      //output has data of card details 
      setCourses(output.data);
      
      
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
      <Filter 
      filterData={filterData}
      category= {category}
      setCategory={setCategory}
       />
    </div>
    <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
     {
      loading?(<Spinner/>):(<Cards courses={courses} category={category} />)
     }

     {/*  this lines means that if loading is true then display spinner else display cards*/} 
    </div>
    </div>
  )
}

export default App
