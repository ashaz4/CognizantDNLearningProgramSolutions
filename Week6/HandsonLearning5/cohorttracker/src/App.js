import React from 'react';
import CohortDetails from './CohortDetails';

const cohorts = [
  {
    cohortCode: 'C101',
    technology: 'ReactJS',
    startDate: '2025-07-01',
    currentStatus: 'Ongoing',
    coachName: 'John Doe',
    trainerName: 'Jane Smith',
  },
  {
    cohortCode: 'C102',
    technology: 'NodeJS',
    startDate: '2025-06-15',
    currentStatus: 'Completed',
    coachName: 'Alice Brown',
    trainerName: 'Bob White',
  },
  // Add more cohorts as needed
];

function App() {
  return (
    <div>
      {cohorts.map((cohort, index) => (
        <CohortDetails key={index} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;
