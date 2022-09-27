import { Client } from '@stomp/stompjs';

const client = new Client({
    brokerURL: 'ws://localhost:15674/ws',
    debug (str) {
      console.info(str);
    },
    reconnectDelay: 5000,
    heartbeatIncoming: 4000,
    heartbeatOutgoing: 4000,
  });

  client.onConnect = (frame) => {
    console.log('Received ' + frame.body);
  };

  client.onStompError = (frame) => {
    // Will be invoked in case of error encountered at Broker
    // Bad login/passcode typically will cause an error
    // Complaint brokers will set `message` header with a brief message. Body may contain details.
    // Compliant brokers will terminate the connection after any error
    console.log('Broker reported error: ' + frame.headers.message);
    console.log('Additional details: ' + frame.body);
  };

  client.activate();