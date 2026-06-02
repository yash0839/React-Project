import React from 'react';
import githubData from "../../assets/github.json";
import MacWindow from './MacWindow';
import "./github.scss";

const GitCard = ({ data }) => {
  return (
    <div className="card">
      <img src={data.image} alt={data.title} />
      <h1>{data.title}</h1>
      <p className='description'>{data.description}</p>
      <div className="tags">
        {data.tags.map((tag, idx) => (
          <span key={idx} className='tag'>{tag}</span>
        ))}
      </div>
      <div className="urls">
        <a href={data.repoLink}>Repository</a>
        {data.demoLink && <a href={data.demoLink}>Live Demo</a>}
      </div>
    </div>
  );
};

const Github = ({ setWindowsState, windowName}) => {
  return (
<MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="cards">
        {githubData.map((project) => (
          <GitCard key={project.id} data={project} />
        ))}
      </div>
    </MacWindow>
  );
};

export default Github;