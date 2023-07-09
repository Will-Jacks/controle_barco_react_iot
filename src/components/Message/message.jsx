import { useEffect } from 'react';
import React from 'react';


import { client } from '../Connector/connect';

export default function ExibeMsg() {
    const [messages, setMessages] = React.useState([]);

    useEffect(() => {
        client.on('message', (topic, payload, packet) => {
          setMessages(messages.concat(payload.toString()));
        });
      }, []);

    return (
        <div>
            <h3>Mensagem recebida: {messages}</h3>
        </div>
    )
}