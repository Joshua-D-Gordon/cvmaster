// src/JobTracker/JobTracker.js
import React, { useState } from 'react';
import './styles.css';
import Sidebar from '../Sidebar/Sidebar';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialJobs = [
  { id: '1', title: 'Software Engineer', company: 'Google', dateApplied: '2023-06-20', status: 'Applied' },
  { id: '2', title: 'Product Manager', company: 'Facebook', dateApplied: '2023-06-21', status: 'In Progress' },
  // Add more initial job entries here
];

const JobTracker = () => {
  const [view, setView] = useState('List');
  const [jobs, setJobs] = useState(initialJobs);
  const [newJob, setNewJob] = useState({ title: '', company: '', dateApplied: '', status: 'Applied' });

  const toggleView = () => {
    setView(view === 'List' ? 'Board' : 'List');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const addJob = () => {
    setJobs([...jobs, { ...newJob, id: (jobs.length + 1).toString() }]);
    setNewJob({ title: '', company: '', dateApplied: '', status: 'Applied' });
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(jobs);
    const [reorderedItem] = items.splice(result.source.index, 1);
    reorderedItem.status = result.destination.droppableId;
    items.splice(result.destination.index, 0, reorderedItem);

    setJobs(items);
  };

  return (
    <div>
      <Sidebar />
      <div className="content">
        <div className="jobtracker-header">
          <h2>Job Tracker</h2>
          <button className="toggle-button" onClick={toggleView}>
            {view === 'List' ? 'Switch to Board' : 'Switch to List'}
          </button>
        </div>
        <div className="new-job-form">
          <input
            type="text"
            name="title"
            value={newJob.title}
            onChange={handleInputChange}
            placeholder="Job Title"
          />
          <input
            type="text"
            name="company"
            value={newJob.company}
            onChange={handleInputChange}
            placeholder="Company"
          />
          <input
            type="date"
            name="dateApplied"
            value={newJob.dateApplied}
            onChange={handleInputChange}
            placeholder="Date Applied"
          />
          <select
            name="status"
            value={newJob.status}
            onChange={handleInputChange}
          >
            <option value="Applied">Applied</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Rejected">Rejected</option>
          </select>
          <button onClick={addJob}>Add Job</button>
        </div>
        {view === 'List' ? (
          <div className="job-list">
            <table>
              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Company</th>
                  <th>Date Applied</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map(job => (
                  <tr key={job.id}>
                    <td>{job.title}</td>
                    <td>{job.company}</td>
                    <td>{job.dateApplied}</td>
                    <td>{job.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <DragDropContext onDragEnd={handleDragEnd}>
            <div className="job-board">
              {['Applied', 'In Progress', 'Completed', 'Rejected'].map(status => (
                <Droppable droppableId={status} key={status}>
                  {(provided) => (
                    <div
                      className="board-column"
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      <h3>{status}</h3>
                      {jobs.filter(job => job.status === status).map((job, index) => (
                        <Draggable key={job.id} draggableId={job.id} index={index}>
                          {(provided) => (
                            <div
                              className="job-card"
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <h4>{job.title}</h4>
                              <p>{job.company}</p>
                              <p>{job.dateApplied}</p>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              ))}
            </div>
          </DragDropContext>
        )}
      </div>
    </div>
  );
};

  export default JobTracker;