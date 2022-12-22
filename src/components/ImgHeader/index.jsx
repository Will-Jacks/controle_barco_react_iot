import logo from '../../assets/img/barco_colorido_semf.png';
import styled from 'styled-components';

const ImgLogo = styled.img`
    width:150px;
`

export default function ImagemHeader() {
    return(
        <ImgLogo src={ logo } alt="logo-do-barco" />
    )
}