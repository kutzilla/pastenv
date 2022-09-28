import Http from 'http';
import { WebSocket, WebSocketServer } from 'ws';

const port = 15674;
const path = '/pastenv';

const server = Http.createServer();

const wss = new WebSocketServer({
  path,
  server
});

wss.on('connection', ws => {

  console.log('New client connected');

  ws.on('message', data => {
    console.log(`Received : ${data}`);

    ws.send('Hello from Server!')
  });

  ws.on('close', () => {
    console.log(`Connection closed by client`);
  });
});


server.listen(port);

