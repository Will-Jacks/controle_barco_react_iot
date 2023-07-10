import { useState } from "react";
import { ButtonsMQTT } from "../Buttons";
import { client } from '../Connector/connect';
import { topic } from "../Connector/connect";
import styled from "styled-components";
const ButtonsContainer = styled.div`
    margin-bottom:70px;
`

export function SendMQTT() {

    function enviar(message) {
        client.publish(topic, message);
    }

    const [isButtonPressed, setIsButtonPressed] = useState(false);

    const [ledStatus, setLedStatus] = useState('Liga led');

    const handleButtonPress = (message) => {
        setIsButtonPressed(true);
        console.log('Botão pressionado');
        enviar(message);
        
    };

    const handleButtonRelease = (message) => {
        setIsButtonPressed(false);
        console.log('Botão solto');
        enviar(message);
    };

    const handleTouchStart = (message) => {
        setIsButtonPressed(true);
        handleButtonPress();
        enviar(message);
    };

    const handleTouchEnd = (message) => {
        setIsButtonPressed(false);
        handleButtonRelease();
        enviar(message);
    };

    const handleClickLed = ()=> {
        let novoStatus, mensagem;
        if (ledStatus === 'Liga led') {
          novoStatus = 'Desliga led';
          mensagem = 'Liga led';
        } else {
          novoStatus = 'Liga led';
          mensagem = 'Desliga led';
        }
        setLedStatus(novoStatus);
        enviar(mensagem);
      };


    return(
        <ButtonsContainer>
            <ButtonsMQTT
                onMouseDown={() => handleButtonPress('Cima')}
                onMouseUp={() => handleButtonRelease('Parar')}
                onTouchStart={() => handleTouchStart('Cima')}
                onTouchEnd={() => handleTouchEnd('Parar')}
                style={{ userSelect: 'none' }}
                >
                Frente
            </ButtonsMQTT>

            <div>
                <ButtonsMQTT
                    onMouseDown={() => handleButtonPress('Esquerda')}
                    onMouseUp={() => handleButtonRelease('Parar')}
                    onTouchStart={() => handleTouchStart('Esquerda')}
                    onTouchEnd={() => handleTouchEnd('Parar')}
                    style={{ userSelect: 'none' }}>
                    Esquerda
                </ButtonsMQTT>

                <ButtonsMQTT 
                    onMouseDown={() => handleButtonPress('Direita')}
                    onMouseUp={() => handleButtonRelease('Parar')}
                    onTouchStart={() => handleTouchStart('Direita')}
                    onTouchEnd={() => handleTouchEnd('Parar')}
                    style={{ userSelect: 'none' }}>
                    Direita
                </ButtonsMQTT>

            </div>
            <ButtonsMQTT
                onMouseDown={() => handleButtonPress('Tras')}
                onMouseUp={() => handleButtonRelease('Parar')}
                onTouchStart={() => handleTouchStart('Tras')}
                onTouchEnd={() => handleTouchEnd('Parar')}
                style={{ userSelect: 'none' }}>
                Tras
            </ButtonsMQTT>

            <div>
            <ButtonsMQTT onClick={()=> enviar('Parar')}>Parar</ButtonsMQTT>
            <ButtonsMQTT onClick={handleClickLed}>{ledStatus}</ButtonsMQTT>
            </div>
            <ButtonsMQTT onClick={() => enviar("255")}>Rápido</ButtonsMQTT>
            <ButtonsMQTT onClick={() => enviar("150")}>Lento</ButtonsMQTT>
        </ButtonsContainer>
    )
}

