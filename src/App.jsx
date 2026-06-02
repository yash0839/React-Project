<<<<<<< HEAD
// import { useState } from 'react'
// import "./app.scss"
// import Dock from './components/Dock'
// import Nav from './components/Nav'
// import Github from './components/windows/Github'
// import Note from './components/windows/Note'
// import Resume from './components/windows/Resume'
// import Spotify from './components/windows/Spotify'
// import Cli from './components/windows/Cli'




// function App() {

//   const [windowsState, setWindowsState] = useState({
//     github: false,
//     note: false,
//     resume: false,
//     spotify: false,
//     cli: false
//   })
  
//   return (
//     <main>
//       <Nav />
// <Dock windowsState={windowsState} setWindowsState={setWindowsState} />
//       { windowsState.github && <Github windowName="github" setWindowsState={setWindowsState} />}
//       { windowsState.note && <Note windowName="note" setWindowsState={setWindowsState} />}
//       { windowsState.resume && <Resume windowName="resume" setWindowsState={setWindowsState} />}
//       { windowsState.spotify && <Spotify windowName="spotify" setWindowsState={setWindowsState} />}
//       { windowsState.cli && <Cli windowName="cli" setWindowsState={setWindowsState} />}
//     </main>
//   )
// }

// export default App



import { useState, useEffect } from 'react';
import "./app.scss";
import Dock from './components/Dock';
import Nav from './components/Nav';
import Github from './components/windows/Github';
import Note from './components/windows/Note';
import Resume from './components/windows/Resume';
import Spotify from './components/windows/Spotify';
import Cli from './components/windows/Cli';

function App() {
  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false
  });

  // ✅ Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Check for Cmd (metaKey) or Ctrl
      const isCmdOrCtrl = event.metaKey || event.ctrlKey;

     if (isCmdOrCtrl && event.key === 'g') {
        event.preventDefault();
        setWindowsState(prev => ({ ...prev, github: true }));
      }
      else if (isCmdOrCtrl && event.key === 's') {
        event.preventDefault();
        setWindowsState(prev => ({ ...prev, spotify: true }));
      }
      else if (isCmdOrCtrl && event.key === 'r') {
        event.preventDefault();
        setWindowsState(prev => ({ ...prev, resume: true }));
      }
      
      // Escape key to close all windows
      else if (event.key === 'Escape') {
        setWindowsState({
          github: false,
          resume: false,
          spotify: false,
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main>
      <Nav />
      <Dock windowsState={windowsState} setWindowsState={setWindowsState} />
      {windowsState.github && <Github windowName="github" setWindowsState={setWindowsState} />}
      {windowsState.note && <Note windowName="note" setWindowsState={setWindowsState} />}
      {windowsState.resume && <Resume windowName="resume" setWindowsState={setWindowsState} />}
      {windowsState.spotify && <Spotify windowName="spotify" setWindowsState={setWindowsState} />}
      {windowsState.cli && <Cli windowName="cli" setWindowsState={setWindowsState} />}
    </main>
  );
}

export default App;
=======
import React,{useEffect, useState} from 'react'
import axios from 'axios'
import User from './User'


const App = () => {
 const [allData, setallData] = useState([])

  const getData = async()=>{

    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    
    setallData(response.data)
    console.log(response.data);    
  }
useEffect(()=>{
  getData()
},[])

  return (
    <div>


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
>>>>>>> 816aacfc4c7bf4a8fbac90e49ffa89bd2bd493eb
