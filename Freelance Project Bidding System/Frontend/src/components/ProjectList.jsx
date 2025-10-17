import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch projects from the backend API
    axios.get('/api/projects')
      .then(response => {
        setProjects(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the projects!", error);
        setLoading(false);
      });
  }, []); // The empty array ensures this effect runs only once

  if (loading) {
    return <div>Loading projects...</div>;
  }

  return (
    <div>
      <h1>Available Projects</h1>
      {projects.length === 0 ? (
        <p>No projects available at the moment.</p>
      ) : (
        <ul>
          {projects.map(project => (
            <li key={project.id}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProjectList;