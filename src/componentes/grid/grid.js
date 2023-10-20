import styled from "styled-components"


export const Card = styled.div`
    -webkit-box-flex:0;
    felx:0;
    ${props=> `ms-felz ${props.size} `}
    ${props=> props.mt &&  `margin-top ${props.mt} `}

`