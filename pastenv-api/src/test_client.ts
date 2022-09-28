import WebSocket from 'ws';

const ws = new WebSocket('ws://localhost:15674/pastenv');

ws.on('open', () => {
  ws.send('Hello from Client!');
});

ws.on('message', data => {
  console.log('received: %s', data);
});