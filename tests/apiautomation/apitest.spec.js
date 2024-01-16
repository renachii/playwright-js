const { test, expect } = require('@playwright/test');
const { io } = require('socket.io-client');

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
    expect(data).toEqual({
      "echo_req": {
        "req_id": 2,
        "states_list": "BA"
      },
      "msg_type": "states_list",
      "req_id": 2,
      "states_list": [
        {
          "text": "Bosansko-podrinjski kanton",
          "value": "05"
        },
        {
          "text": "Brčko distrikt",
          "value": "BRC"
        },
        {
          "text": "Federacija Bosne i Hercegovine",
          "value": "BIH"
        },
        {
          "text": "Hercegovačko-neretvanski kanton",
          "value": "07"
        },
        {
          "text": "Kanton Sarajevo",
          "value": "09"
        },
        {
          "text": "Kanton br. 10 (Livanjski kanton)",
          "value": "10"
        },
        {
          "text": "Posavski kanton",
          "value": "02"
        },
        {
          "text": "Republika Srpska",
          "value": "SRP"
        },
        {
          "text": "Srednjobosanski kanton",
          "value": "06"
        },
        {
          "text": "Tuzlanski kanton",
          "value": "03"
        },
        {
          "text": "Unsko-sanski kanton",
          "value": "01"
        },
        {
          "text": "Zapadnohercegovački kanton",
          "value": "08"
        },
        {
          "text": "Zeničko-dobojski kanton",
          "value": "04"
        }
      ]
    });
  });

  // Close the WebSocket connection
  socket.on('disconnect', () => {
    console.log('Disconnected');
  });
  await page.waitForTimeout(5000);
});
