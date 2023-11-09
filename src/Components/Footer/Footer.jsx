import styled from "styled-components"
import Rosa from "../../assets/rosa.png"



const FooterStyle = styled.footer`
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
height: 12vh;
background-color: #FFA0D9;
p{
    font-size: 1.6rem;
    width: 38vw;
    color:#ffffff;
}
`
const ImgFooter = styled.img`
width: 10vw;
`
export default function Footer(){
    return(
        <FooterStyle>
        <p>Instituto Nacional de Câncer - INCA</p>
        <figure>
            <ImgFooter src={Rosa} alt="" />
        </figure>
        <p>Union for International Cancer Control (UICC)</p>
        </FooterStyle>
    )
}