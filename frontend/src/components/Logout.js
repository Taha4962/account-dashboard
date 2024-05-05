import { useNavigate } from 'react-router-dom';

// ...

const Logout = () => {
  const history = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:3001/auth/logout');

      // Handle successful logout
      // For example, remove the user's token from local storage
      localStorage.removeItem('token');

      // Navigate to the login page
      history.push('/login');
    } catch (error) {
      // Handle logout error
      // For example, display an error message to the user
      alert('An error occurred while logging out. Please try again.');
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;