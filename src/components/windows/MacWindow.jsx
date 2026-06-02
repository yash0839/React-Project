import React from 'react'
import { Rnd } from 'react-rnd'
import "./window.scss"

const MacWindow = ({children, width="25vw", height="25vw",windowName, setWindowsState  }) => {
  return (
    <Rnd  
        default={{ x: 100, y: 100, width: "25vw", height: "25vw" }}
        minWidth={300}
        minHeight={200}
        bounds="window"
        >
        <div className="window">
            <div className="nav">
                <div className="dots">
                    <div 
                    onClick={() => setWindowsState(state => ({...state, [windowName]: false}))}
                    className="dot red"></div>
                    <div className="dot yellow"></div>
                    <div className="dot green"></div>
                </div>
                <div className="title"><p>yashpatil - zsh</p> </div>
            </div>
            <div className="main-content">
                {children}
            </div>
        </div>
    </Rnd>
  )
}

export default MacWindow