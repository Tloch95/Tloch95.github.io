import React, { useContext } from 'react'
import PortfolioContext from '../../context/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import Tilt from 'react-tilt'
import ProjectImage from '../Image/ProjectImage';

function Projects() {
  const { projects } = useContext(PortfolioContext);

  return (
    <section id="projects" className="section">
      <div className="grid-container">
        <div className="section-header projects-header">
          <FontAwesomeIcon icon={faCodeBranch} />{" "}
          Projects
        </div>
        {projects &&
          projects.map((project, i) => {
            return (
              <>
                <div className="project-info-wrapper">
                  <div className="project-info">
                    <div className="project-title">
                      {project.title || 'Web Portfolio'}
                    </div>
                    <div className="project-desc">
                      {project.desc || 'A VSCode themed web portfolio designed and brought to life by yours truly. Built using ReactJS and Gatsby.'}
                    </div>
                  </div>
                </div>
                <a href={project.url || '#!'} target="_blank" aria-label="Project URL" rel="noopener noreferrer">
                <Tilt
                  options={{
                    reverse: false,
                    max: 8,
                    perspective: 800,
                    scale: 1,
                    speed: 300,
                    transition: true,
                    axis: null,
                    reset: true,
                    easing: 'cubic-bezier(.03,.98,.52,.99)',
                  }}
                >
                    <div className="img-wrapper">
                      <ProjectImage alt={project.title} filename={project.img}/>
                    </div>
                  </Tilt>
                </a>
              </>
            );
          })
        }
      </div>
    </section>
  )
}

export default Projects;