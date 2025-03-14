import React, { useState } from 'react';
import './Sidebar.css';  // Assuming you will create a separate CSS file for styling

const Sidebar = () => {
  const [filters, setFilters] = useState({
    location: '',
    salary: '',
    date: '',
    experience: '',
    employmentType: '',
  });

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="sidebar">
      <h3>Filters</h3>
      
      <div className="filter-item">
        <label htmlFor="location">Location</label>
        <select
          name="location"
          id="location"
          value={filters.location}
          onChange={handleChange}
        >
          <option value="">Any</option>
          <option value="San Francisco, CA">San Francisco, CA</option>
          <option value="New York, NY">New York, NY</option>
          <option value="London, UK">London, UK</option>
          <option value="Bangalore, IN">Bangalore, IN</option>
          <option value="Berlin, DE">Berlin, DE</option>
        </select>
      </div>

      <div className="filter-item">
        <label htmlFor="salary">Salary</label>
        <select
          name="salary"
          id="salary"
          value={filters.salary}
          onChange={handleChange}
        >
          <option value="">Any</option>
          <option value="$60,000 - $80,000">$60,000 - $80,000</option>
          <option value="$80,000 - $100,000">$80,000 - $100,000</option>
          <option value="$100,000 - $120,000">$100,000 - $120,000</option>
          <option value="$120,000+">$120,000+</option>
        </select>
      </div>

      <div className="filter-item">
        <label htmlFor="date">Date of Posting</label>
        <select
          name="date"
          id="date"
          value={filters.date}
          onChange={handleChange}
        >
          <option value="">Any</option>
          <option value="Last 24 hours">Last 24 hours</option>
          <option value="Last 7 days">Last 7 days</option>
          <option value="Last 30 days">Last 30 days</option>
        </select>
      </div>

      <div className="filter-item">
        <label htmlFor="experience">Work Experience</label>
        <select
          name="experience"
          id="experience"
          value={filters.experience}
          onChange={handleChange}
        >
          <option value="">Any</option>
          <option value="Entry Level">Entry Level</option>
          <option value="Mid Level">Mid Level</option>
          <option value="Senior Level">Senior Level</option>
        </select>
      </div>

      <div className="filter-item">
        <label htmlFor="employmentType">Type of Employment</label>
        <select
          name="employmentType"
          id="employmentType"
          value={filters.employmentType}
          onChange={handleChange}
        >
          <option value="">Any</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Contract">Contract</option>
          <option value="Freelance">Freelance</option>
        </select>
      </div>

      <button className="apply-filters-btn">Apply Filters</button>
    </div>
  );
};

export default Sidebar;
