import styled from "styled-components"
import { numberType } from "../../../../class003/src/constantes/layout"


export const Card = styled.div`
    -webkit-box-flex:0;
    felx:0;
    ${props=> `ms-felz ${props.size} `}
    ${props=> props.mt &&  `margin-top ${props.mt} `}

`
Card.defaultProps = {
    size:12
}


Card.PropTypes = {
    size: numberType.isRequired,
    mt: numberType
}