const { test, expect } = require('@playwright/test');
const { io } = require('socket.io-client');
import { stringify } from '../../utils/fetchData.js';


test('WebSocket API Test', async ({ page }) => {
  // Start the WebSocket client
  const socket = io('wss://ws.derivws.com/websockets/v3?app_id=36544');

  // Connect to the WebSocket
  socket.on('connect', () => {
    console.log('Connected');
  });

  // Send a request to the WebSocket
  const payload = { "states_list": "BA" };
  socket.emit('request', payload)

  // Receive and verify the response from the WebSocket
  socket.on('response', (data) => {
    console.log('Received response:', data);
    expect(data).toEqual(stringify('../data/data.json'));
  });

  // Close the WebSocket connection
  socket.on('disconnect', () => {
    console.log('Disconnected');
  });
  await page.waitForTimeout(5000);
});
