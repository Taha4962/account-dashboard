const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Routes
const authRoutes = require('./routes/auth');
const deviceRoutes = require('./routes/device');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// mongoose.connection.on('connected', () => {
//   console.log('Connected to MongoDB');
// });
{/* provide the MONGO_URI to connect with the database*/}

// Routes
app.use('/auth', authRoutes);
app.use('/device', deviceRoutes);

// Start server
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Socket.IO
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('Socket connected:', socket.id);

  // Listen for device updates
  socket.on('device-update', (device) => {
    // Broadcast the device update to all connected clients
    io.emit('device-update', device);
  });

  // Listen for device deletion
  socket.on('device-delete', (deviceId) => {
    // Broadcast the device deletion to all connected clients
    io.emit('device-delete', deviceId);
  });

  // Listen for device access revocation
  socket.on('device-revoke-access', (deviceId) => {
    // Broadcast the device access revocation to all connected clients
    io.emit('device-revoke-access', deviceId);
  });

  // Listen for device access grant
  socket.on('device-grant-access', (device) => {
    // Broadcast the device access grant to all connected clients
    io.emit('device-grant-access', device);
  });

  // Listen for device access request
  socket.on('device-request-access', (deviceId) => {
    // Broadcast the device access request to all connected clients
    io.emit('device-request-access', deviceId);
  });

  // Listen for device access response
  socket.on('device-response-access', (deviceId, response) => {
    // Broadcast the device access response to all connected clients
    io.emit('device-response-access', deviceId, response);
  });

  // Listen for device status update
  socket.on('device-status-update', (deviceId, status) => {
    // Broadcast the device status update to all connected clients
    io.emit('device-status-update', deviceId, status);
  });

  // Listen for device data update
  socket.on('device-data-update', (deviceId, data) => {
    // Broadcast the device data update to all connected clients
    io.emit('device-data-update', deviceId, data);
  });

  // Listen for device error
  socket.on('device-error', (deviceId, error) => {
    // Broadcast the device error to all connected clients
    io.emit('device-error', deviceId, error);
  });

  // Listen for device log
  socket.on('device-log', (deviceId, log) => {
    // Broadcast the device log to all connected clients
    io.emit('device-log', deviceId, log);
  });

  // Listen for device command
  socket.on('device-command', (deviceId, command) => {
    // Broadcast the device command to all connected clients
    io.emit('device-command', deviceId, command);
  });

  // Listen for device command response
  socket.on('device-command-response', (deviceId, response) => {
    // Broadcast the device command response to all connected clients
    io.emit('device-command-response', deviceId, response);
  });

  // Listen for device command error
  socket.on('device-command-error', (deviceId, error) => {
    // Broadcast the device command error to all connected clients
    io.emit('device-command-error', deviceId, error);
  });

  // Listen for disconnect
  socket.on('disconnect', () => {
    console.log('Socket disconnected:', socket.id);
  });
});