const Device = require('../models/Device');

const revokeAccess = async (req, res) => {
  const { deviceId } = req.body;

  try {
    // Find the device by ID
    const device = await Device.findById(deviceId);
    if (!device) {
      return res.status(404).json({ message: 'Device not found' });
    }

    // Revoke access to the device
    device.accessToken = null;
    await device.save();

    // Send a success response
    res.json({ message: 'Access revoked successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { revokeAccess };