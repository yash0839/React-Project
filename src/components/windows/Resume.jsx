import React from 'react'
import MacWindow from './MacWindow'
import "./resume.scss"

const Resume = ({ windowName, setWindowsState}) => {
  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
        <div className="resume-window">
            <iframe src="/Patil_Yash_Dinesh_Resume.pdf" title="Resume"></iframe>//embed 
        </div>
    </MacWindow>
  )
}

export default Resume