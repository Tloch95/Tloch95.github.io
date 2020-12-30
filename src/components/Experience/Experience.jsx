import React, { useContext } from 'react'
import PortfolioContext from '../../context/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

function Experience() {
  const { experience } = useContext(PortfolioContext);
  const { jobs } = experience;
  const jobLen = jobs ? jobs.length : 0;

  return (
    <section id="experience" className="section">
      <div className="grid-container">
        <div className="section-header experience-header">
          <FontAwesomeIcon icon={faBriefcase} />{" "}
          Experience
        </div>
        <Timeline align="alternate">
          {jobs &&
            jobs.map((job, i) => {
                return (
                  <TimelineItem className="job">
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                      {i + 1 == jobLen && <TimelineDot />}
                    </TimelineSeparator>
                    <TimelineContent>
                      <h3 className="job-heading">
                        <span className="job-position">{job.position}</span> {" "}
                        <span className="job-at">@</span> {" "}
                        <span className="job-company">{job.company}</span>
                      </h3>
                      <br/>
                      <ul>
                      {job.responsibilities &&
                        job.responsibilities.map((responsibility) => {
                          return (
                            <li className="responsibility">{responsibility}</li>
                          );
                        })
                      }
                      </ul>
                    </TimelineContent>
                  </TimelineItem>
                );
            })
          }
        </Timeline>
      </div>
    </section>
  )
}

export default Experience;