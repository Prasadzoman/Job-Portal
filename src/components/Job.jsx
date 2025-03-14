import React from 'react';
import './Job.css'; // Assuming you will create a separate CSS file for styling
import { Link } from 'react-router-dom';

const Job = (props) => {
    return (
        <div className="job-listing">
            <Link to={`/Job/${props.id}`}> {/* Corrected Link path */}
                <div className="job-image">
                    <img src={props.image} alt={props.name} />
                </div>
                <div className="job-details">
                    <div className="job-name">
                        <h3>{props.name}</h3>
                    </div>
                    <div className="job-info">
                        <ul>
                            <li><strong>Location:</strong> {props.location}</li>
                            <li><strong>Salary:</strong> {props.salary}</li>
                            <li><strong>Role:</strong> {props.role}</li>
                        </ul>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Job;
