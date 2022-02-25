import { Label, Table } from "sezy-design";
import styled from "styled-components";

export const Title = styled(Label)`
    padding: 1.4rem 1.8rem 1rem;
    display:block;
`;

const tableScrollBarWidth = '6px';
const tableHeaderPaddingRight = '1.8rem';

const tableWrapperStyle = `
    & th{
        background:#1C2740;
        color:#B9C2D0;
        position: sticky;
        top: 0; /* Don't forget this, required for the stickiness */
        box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.4);
    }

    & tr>td:first-child{
        width: 40%;
    }

    & tr>td:last-child{
        width: 30%;
    }

    & tr>th:first-child, & tr>td:first-child{
        padding-left: 2rem;
    }

    & tr>th:last-child, & tr>td:last-child{
        padding-right: ${tableHeaderPaddingRight};
    }

    &::-webkit-scrollbar {
        width: ${tableScrollBarWidth};
    }
    
    &::-webkit-scrollbar-track {
        border-radius: 10px;
    }
    
    &::-webkit-scrollbar-thumb {
        background: #0b1322;
        border-radius: 10px;
        border: 1px solid #ffffff36;
    }
    
    & td{
        color: #B6BBC3;
    }
`

export const HeaderTable = styled(Table)`
    ${tableWrapperStyle}
    & tbody{
        display:none;
    }
    & th:last-child{
        padding-right: calc(${tableHeaderPaddingRight} + ${tableScrollBarWidth}) !important;
    }
`;

export const DataTable1 = styled(Table)`
    ${tableWrapperStyle}
    height:200px;
    & tbody > tr > td:first-child{
        color:#EC6649;
    }
`;

export const DataTable2 = styled(Table)`
    ${tableWrapperStyle}
    height:200px;
    & tbody > tr > td:first-child{
        color:#26E1CD;
    }
`;

export const HighlightData = styled.div`
    display:flex;
    justify-content:center;
    align-items:flex-end;
    width: 60%;
    border-top: 1px solid #383838;
    border-bottom: 1px solid #383838;
    margin:1.2rem auto 0.8rem;
    padding:0.5rem 0;
    &>*:first-child[data-type=up]{
        margin-right:0.5rem;
    }
`;

export const HighlightDataMain = styled(Label)`
    ${props => dataType2Style(props['data-type'])}
    display:flex;
    align-items:center;
`;

export const HighlightDataSub = styled(Label)`
    color: #B6BBC3;
`;





const dataType2Style = type => (
    type === 'up'
        ? `
            {
                &>div{
                    color: #26E1CD;
                }
                &>svg{
                    fill: #26E1CD;
                }
            }
        `
        : `
            {
                &>div{
                    color: #EC6649;
                }
                &>svg{
                    fill: #EC6649;
                }
            }
        `
)