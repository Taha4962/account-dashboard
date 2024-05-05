import { useEffect, useState } from 'react';

// ...

const Dashboard = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:3001/activities');

        if (res.status === 200 && res.data.success) {
          setActivities(res.data.data);
        }
      } catch (error) {
        // Handle API errors
        // For example, display an error message to the user
        alert('An error occurred while fetching data. Please try again.');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>
            {activity.type}: {activity.data.username} - {activity.data.timestamp}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;