import { Col, Row, Section } from "sezy-design";
import styled from "styled-components";
import breakpoints from "~breakpoints";

export const Logo = styled.div`
    margin-top:1rem;
    background-color:#E1EEFA;
`;

export const MainContent = styled(Section)`
    background: #23304A;
    &>div{
        padding: 1rem 1rem;
    }
`;
export const MainBox = styled(Row)`
    flex-wrap:nowrap;
    &>*>*{
        background: #0F1A30;
        height: 600px;
    }
`;

export const TokenTransaction = styled(Col)`
`;

export const TradingView = styled(Col)`
`;

export const Trading = styled(Col)`
`;

export const Gas = styled.div`

`;

export const Holder = styled.div`

`;

export const SharkMoves = styled.div`

`;

export const Volumn = styled.div`

`;

export const Coin = styled.div`

`;

export const Pool = styled.div`

`;

export const TopMoney = styled.div`

`;

export const SocialNetwork = styled.div`

`;

export const Rating = styled.div`

`;

export const Contact = styled.div`

`;
