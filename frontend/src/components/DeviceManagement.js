import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DeviceManagement = () => {
  const { deviceId } = useParams();

  const handleRevokeAccess = async () => {
    try {
      await axios.post('http://localhost:3001/device/revoke-access', { deviceId });

      // Handle successful revocation
      // For example, remove the device's access token from local storage and display a success message to the user
      localStorage.removeItem('deviceToken');
      alert('Access to the device has been successfully revoked.');
    } catch (error) {
      // Handle revocation error
      // For example, display an error message to the user
      alert('An error occurred while revoking access to the device. Please try again.');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Device ID"
        value={deviceId}
        readOnly
      />
      <button onClick={handleRevokeAccess}>Revoke Access</button>
    </div>
  );
};

export default DeviceManagement;