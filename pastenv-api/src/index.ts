import Http from 'http';
import { WebSocket, WebSocketServer } from 'ws';

const port = 15674;
const path = '/pastenv';

const server = Http.createServer();

const wss = new WebSocketServer({
  path,
  server
});

const webSockets: WebSocket[] = [];

const messages : string[] = [];

wss.on('connection', ws => {

  webSockets.push(ws);
  console.log(`New client connected. Currently are ${webSockets.length} client(s) connected`);

  console.log('Sending all messages to new client');
  messages.forEach(message => {
    ws.send(message);
  });


  ws.on('message', data => {
    console.log(`Received : ${data} and send it to all clients`);
    messages.push(data.toString());

    webSockets.forEach(i => {
      i.send(data);
    });
  });

  ws.on('close', () => {
    console.log(`Connection closed by client. WebSocket is going to be removed`);
    for (let i = 0; i <  webSockets.length; i++) {
      if (ws === webSockets[i]) {
        webSockets.splice(i, 1);
      }
    }
    console.log(`WebSocket removed. ${webSockets.length} client(s) are left.`);

  });
});


server.listen(port);

