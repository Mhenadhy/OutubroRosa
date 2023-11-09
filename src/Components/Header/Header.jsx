import Laco from "../../assets/laco.png" 
import styled from "styled-components"


const HeaderStyle = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 15vh;
background:#FFA0D9;
`
const Logo = styled.img`
width:10vw;
`
const NavBar = styled.nav`
width: 72vw;
ul{
    display:flex;
    justify-content: space-around;
}
li{
    font-size: 1.5rem;
    list-style: none;
    color:#ffffff;
}
`
export default function Header(){
    return(
        <HeaderStyle>
        <Logo src={Laco} alt="" />
        <NavBar>
        <ul>
            <li>CARTILHA</li>
            <li>FOLHETO COLO DO ÚTERO</li>
            <li>FOLHETO MAMA</li>
            <li>KIT MATERIAIS</li>
        </ul>
        </NavBar>
        </HeaderStyle>
    )
}

