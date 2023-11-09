import { useState } from "react"
import styled from "styled-components"
import Menina from "../../assets/menina.png"
export default function Main(){

    const Mainstyle = styled.main`
    display: flex;
    justify-content:space-between;
    justify-content: center;
    align-items: center;
    width:100%;
    height: 78vh;
    `
    const ImgMain = styled.img`
    width:55vw;
    height: 62vh;
    `
    const Secao = styled.section`
    width: 50vw;
    height: 72vh;
    h1{
        color:#FFA0D9;
        padding-left: 10px;
    }
    ol{
        display:flex;
        flex-direction: column;
        align-items: end;
        justify-content: space-around;
        height: 67vh;
        width: 42vw;
    }
    li{
        font-size: 1.8rem;
        background-color: #FFA0D9;
        border-radius: 15px;
        border: 10vh;
        width:39vw;
    }
    `

    const [sintomas,setSintomas] = useState(["Nódulo palpável na mama.", "Pele avermelhada ou retraída, sem resposta a tratamentos tópicos.", "Alterações no mamilo, incluindo a inversão do mamilo ou a saída anormal de secreção.", "Dor ou inchaço em parte ou na totalidade das mamas.", "Nódulos cervicais ou na axila."])
    return(
        <Mainstyle>
        <Secao>
            <h1>Os principais sinais de alerta ou sintomas do câncer de mama são:</h1>
            <ol>
               {sintomas.map((item) => (
                <li>{item}</li>
               ))} 
            </ol>
        </Secao>
        <figure>
            <ImgMain src={Menina} alt="" />
        </figure>
        </Mainstyle>
    )
}