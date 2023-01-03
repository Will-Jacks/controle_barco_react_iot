import { ButtonsMQTT } from "../Buttons";
import { client } from '../Connector/connect';
import { topic } from "../Connector/connect";
import styled from "styled-components";

const ButtonsContainer = styled.div`
    margin-bottom:70px;
`

export function SendMQTT() {
    function enviar(message) {
        client.publish(topic,message);
    }
    return(
        <ButtonsContainer>
            <ButtonsMQTT onClick={()=> enviar('Cima')}>Frente</ButtonsMQTT>
            <div>
                <ButtonsMQTT onClick={()=> enviar('Esquerda')}>Esquerda</ButtonsMQTT>
                <ButtonsMQTT onClick={()=> enviar('Direita')}>Direita</ButtonsMQTT>
            </div>
            <ButtonsMQTT onClick={()=> enviar('Tras')}>Tras</ButtonsMQTT>
            <div>
            <ButtonsMQTT onClick={()=> enviar('Parar')}>Parar</ButtonsMQTT>
            <ButtonsMQTT onClick={()=> enviar('Liga led')}>Led</ButtonsMQTT>
            </div>
        </ButtonsContainer>
    )
}