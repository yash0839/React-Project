import React,{useEffect, useState} from 'react'
import axios from 'axios'
import User from './User'


const App = () => {
 const [allData, setallData] = useState([])

  const getData = async()=>{

    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    
    setallData(response.data)    
  }
useEffect(()=>{
  getData()
},[])

  return (
    <div>
        {/* <button onClick={getData}>get data</button> */}

     <div className='all-cards'>
        {allData.map(function (elem, idx){

          console.log(elem);
          return <div  key={idx} >
            <User data={elem} />
          </div>
        })}
     </div>
    </div>
  )
}

export default App
